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
      .post('http://10.0.2.2:3000/posts', postData)
      .then(res => {
        console.log('Post successful:', res.data);
        setForm({
          title: '',
          text: '',
          user: '',
        });
        navigation.navigate('ListPost');
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
