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
    axios
      .post('http://localhost:3000/posts', form)
      .then(res =>
        setForm({
          id: newDate().getTime(),
          date: new Date(),
          title: '',
          text: '',
          user: '',
        }),
      )
      .catch(err => console.log(err.message));
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
