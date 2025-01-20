import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListPostView = ({postData}) => {
  console.log(postData);
  return (
    <View>
      <FlatList
      
      data={postData}
      renderItem={((item))=>(
        <View>
          <Text>{item.title}</Text>
        </View>
      )}
      />
    </View>
  );
};

export default ListPostView;

const styles = StyleSheet.create({});
