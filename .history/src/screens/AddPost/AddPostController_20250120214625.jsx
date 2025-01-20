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
    axios.post('http://localhost:3000/posts', form).then(res =>
      setForm({
        title: '',
        text: '',
        user: '',
      }),
    );
    navigation.navigate('ListForm').catch(err => console.log(err.message));
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
