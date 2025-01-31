import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListPostView from './ListPostView';
import axios from 'axios';
import AddPostController from './AddPostController';

const ListPostController = () => {
  const [postData, setPostData] = useState([]);

  const fetchPosts = () => {
    axios
      .get('http://10.0.2.2:3000/posts') // localhost yerine 10.0.2.2 kullan
      .then(res => setPostData(res.data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <AddPostController setPostData={setPostData} />{' '}
      {/* setPostData'yı AddPostController'a ilet */}
      <ListPostView postData={postData} />
    </View>
  );
};

export default ListPostController;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
});
