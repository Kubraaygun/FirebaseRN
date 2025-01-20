import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';

const AddPostController = () => {
  const formModel = new AddPostModel();
  const [form, setForm] = useState(formModel.state);
  console.log(formModel);

  const handleInputChange = (key, value) => {
    setForm({...form, [key]: value});
  };
  return <AddPostView onInhandleInputChangeputChange={handleInputChange} />;
};

export default AddPostController;

const styles = StyleSheet.create({});
