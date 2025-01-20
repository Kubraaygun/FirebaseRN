import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ListPostView from './ListPostView';

const ListPostController = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then(res => console.log(res.data.posts));
  }, []);
  return <ListPostView />;
};

export default ListPostController;

const styles = StyleSheet.create({});
