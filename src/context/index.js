import React, {createContext, useState} from 'react';
import axios from '../services/axiosConfig';

export const rootContext = createContext();

export default (RootContextProvider = props => {
  const [user, setUser] = useState(null);
  const [entireTopics, setEntireTopics] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const fetchUserData = () => {
    axios
      .get('/users/' + user._id)
      .then(async function(response) {
        setUser(response.data);
      })
      .catch(function(error) {
        console.log('error in fetchUserData', error);
      });
  };

  const fetchEntireTopics = () => {
    axios
      .get('/topics')
      .then(async function(response) {
        setEntireTopics(response.data.data);
      })
      .catch(function(error) {
        console.log('error in fetching all topics', error);
      });
  };

  const fetchNotifications = () => {
    axios
      .get('/notifications/' + user._id)
      .then(async function(response) {
        setNotifications(response.data.notifications);
      })
      .catch(function(error) {
        console.log('error in fetchNotifications', error);
      });
  };

  const {children} = props;

  return (
    <rootContext.Provider
      value={{
        user,
        entireTopics: entireTopics,
        setUser: setUser,
        fetchUserData,
        fetchEntireTopics,
        setEntireTopics,
        notifications,
        setNotifications,
        fetchNotifications,
      }}>
      {children}
    </rootContext.Provider>
  );
});
