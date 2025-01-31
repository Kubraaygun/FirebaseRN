import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListPostView from './ListPostView';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';

const ListPostController = () => {
  const [postData, setPostData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      axios
        .get('http://10.0.2.2:3000/posts')
        .then(res => setPostData(res.data))
        .catch(error => console.log('Error:', error.message));
    }
  }, [isFocused]);

  return <ListPostView postData={postData} />;
};

export default ListPostController;

const styles = StyleSheet.create({});
