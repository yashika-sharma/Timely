let axios = require('axios');
import getAccessToken from './getAccessToken';
import refreshToken from './refreshToken';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.BASE_URL;

axios.interceptors.request.use(
  async config => {
    if (!config.headers.Authorization && config.url != '/refresh-tokens') {
      const token = await getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  res => {
    return res;
  },
  async error => {
    const {config} = error;

    // if the error is not 401
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && config.url === '/refresh-tokens') {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !config._retry) {
      config._retry = true;
      let token = await refreshToken();
      if (config.url == '/authentication' && config.method !== 'delete') {
        let parsedData = JSON.parse(config.data);
        parsedData.accessToken = token;
        config.data = parsedData;
      }
      config.headers['Authorization'] = 'Bearer ' + token;
      return axios(config);
    }

    return Promise.reject(error);
  },
);
export default axios;
