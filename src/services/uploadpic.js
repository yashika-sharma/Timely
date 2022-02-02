import ImagePicker from 'react-native-image-crop-picker';
import 'react-native-get-random-values';
import {v4 as uuid4} from 'uuid';
import axios from './axiosConfig';

export default (uploadpic = (navigation, user, setUser) => {
  ImagePicker.openPicker({
    width: 300,
    height: 300,

    compressImageQuality: 0.7,
  })
    .then(async response => {
      const uuid = uuid4();
      const ext = response.path.split('.').pop();
      let filename = `${uuid}.${ext}`;
      var formdata = new FormData();
      formdata.append('name', filename);
      formdata.append('files', {
        uri: response.path,
        type: response.mime,
        name: filename,
      });
      if (user.image) {
        let [pic] = user.image.split('.');
        let uploadedDoc = await axios
          .get('/uploads?name=' + user.image)
          .then(res => res.data.data[0]);

        axios({
          method: 'patch',
          url: '/uploads/' + uploadedDoc._id,
          data: formdata,
          headers: {'Content-Type': 'multipart/form-data'},
        })
          .then(async response => {
            console.log('file replaced');
            axios.patch('/users/' + user._id, {image: filename}).then(res => {
              setUser(res.data);
            });
            navigation.navigate('Account');
          })
          .catch(function(response) {
            console.log(response);
          });
      } else {
        axios({
          method: 'post',
          url: '/uploads',
          data: formdata,
          headers: {'Content-Type': 'multipart/form-data'},
        })
          .then(async response => {
            axios.patch('/users/' + user._id, {image: filename}).then(res => {
              setUser(res.data);
            });
            navigation.navigate('Account');
          })
          .catch(function(response) {
            console.log(response);
          });
      }
    })
    .catch(err => {
      console.log('outermost image error', err);
    });
});
