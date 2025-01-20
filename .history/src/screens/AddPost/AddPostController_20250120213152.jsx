import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import axios from 'axios';

const AddPostController = () => {
  const formModel = new AddPostModel();
  const [form, setForm] = useState(formModel.state);
  console.log(form);

  const handleInputChange = (key, value) => {
    setForm({...form, [key]: value});
  };

  const handleSubmit = () => {
    axios.post('');
  };
  return <AddPostView handleInputChange={handleInputChange} form={form} />;
};

export default AddPostController;

const styles = StyleSheet.create({});
