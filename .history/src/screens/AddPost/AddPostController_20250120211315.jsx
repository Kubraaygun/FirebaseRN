import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddPostView from './AddPostView';

const AddPostController = () => {
  const formModel = new AddPostModel();
  console.log(formModel);
  return <AddPostView />;
};

export default AddPostController;

const styles = StyleSheet.create({});
