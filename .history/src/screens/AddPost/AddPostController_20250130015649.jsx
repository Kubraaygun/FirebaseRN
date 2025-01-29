import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const AddPostController = () => {
  const navigation = useNavigation();
  const formModel = new AddPostModel();
  const [form, setForm] = useState(formModel.state);
  console.log(form);

  const handleInputChange = (key, value) => {
    setForm({...form, [key]: value});
  };

  const handleSubmit = () => {
    const postData = {
      ...form,
      id: new Date().getTime(),
      date: new Date(),
    };

    axios
      .post('http://localhost:3000/posts', postData)
      .then(res => {
        console.log('Post successful:', res.data);
        setForm({
          title: '',
          text: '',
          user: '',
        });

        // Gönderiyi ekledikten sonra ListPost verisini yeniden çek
        axios
          .get('http://localhost:3000/posts')
          .then(response => {
            // Listeyi güncelle
            setPostData(response.data); // Burada ListPostController'daki setPostData fonksiyonuna erişebilmelisin
            navigation.navigate('ListPost');
          })
          .catch(error => console.log('Veri çekme hatası:', error));
      })
      .catch(err => {
        console.log('Error:', err.message);
      });
  };

  return (
    <AddPostView
      handleInputChange={handleInputChange}
      form={form}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddPostController;

const styles = StyleSheet.create({});
