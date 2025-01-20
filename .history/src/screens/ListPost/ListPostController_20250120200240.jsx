import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ListPostView from './ListPostView';
import axios from 'axios';
const ListPostController = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  }, []);
  return <ListPostView />;
};

export default ListPostController;

const styles = StyleSheet.create({});
