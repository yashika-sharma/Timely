import axios from './axiosConfig';
import getAccessToken from './getAccessToken';
import deleteRefreshToken from './deleteRefreshToken';
import deleteAccessToken from './deleteAccessToken';
import deleteUserId from './deleteUserId';

export default (logout = async changeAuthentication => {
  let accessToken = await getAccessToken();
  axios
    .delete('/authentication', {
      headers: {
        Authorization: accessToken,
      },
    })
    .then(async () => {
      changeAuthentication(false);
      await deleteAccessToken();
      await deleteRefreshToken();
      await deleteUserId();
    })
    .catch(err => {
      console.log('axios error for logging out', err);
    });
});
