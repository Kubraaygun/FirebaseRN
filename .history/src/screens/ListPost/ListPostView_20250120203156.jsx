import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListPostView = ({postData}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        renderItem={({item}) => (
          <View style={styles.post}>
            <View style={styles.info}>
              <Text>{item.title}</Text>
              <Text>{item.user}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListPostView;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  post: {
    backgroundColor: 'black',
  },
});
