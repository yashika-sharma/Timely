import React, {useState, useEffect, useContext} from 'react';
import HomeDrawerScreen from './AppNavigator';
import Loading from '../components/Loading';
import AuthNavigatorScreen from './AuthNavigator';
import {rootContext} from '../context/index';
import getAccessToken from '../services/getAccessToken';
import axios from '../services/axiosConfig';
import storeAccessToken from '../services/storeAccessToken';
import storeRefreshToken from '../services/storeRefreshToken';
import storeUserId from '../services/storeUserId';
import {connect} from 'react-redux';
import {
  changeAuthentication,
  fetchComplaints,
} from './../redux/actions/actions';

const RootStackScreen = ({isAuthenticated, fetchComplaints}) => {
  const [initializing, setInitializing] = useState(false);
  const {setUser, setEntireTopics, user} = useContext(rootContext);

  const setTheData = async (user, allTopics) => {
    setUser(user);
    setEntireTopics(allTopics);
  };

  const getUser = async () => {
    if (!user) {
      let accessToken = await getAccessToken();
      var data = {
        strategy: 'jwt',
        accessToken: accessToken,
      };
      var config = {
        method: 'post',
        url: '/authentication',
        data: data,
      };

      axios(config)
        .then(async res => {
          let allTopics = await axios
            .get('/topics')
            .then(async function(response) {
              return response.data;
            });

          await setTheData(res.data.user, allTopics.data);
          await storeAccessToken(res.data.accessToken);
          await storeRefreshToken(res.data.refreshToken);
          await storeUserId(res.data.user._id);
          fetchComplaints(res.data.user._id);
        })

        .catch(err => {
          let emptyUser = {};
          let allTopics = [];
          setUser(emptyUser);
          setEntireTopics(allTopics);
          console.log('error in try', err);
        });
    }
  };

  useEffect(() => {
    getUser();
    setInitializing(false);
  }, []);

  if (initializing) {
    return <Loading />;
  } else {
    return isAuthenticated == true ? (
      <HomeDrawerScreen />
    ) : (
      <AuthNavigatorScreen />
    );
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  changeAuthentication: value => dispatch(changeAuthentication(value)),
  fetchComplaints: userId => dispatch(fetchComplaints(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootStackScreen);
