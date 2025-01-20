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
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.user}>{item.user}</Text>
            </View>

            <Text style={styles.text}>{item.text}</Text>
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
    paddingVertical: 5,
  },
  post: {
    backgroundColor: 'black',
    margin: 5,
  },
  title: {
    color: 'gold',
  },
  user: {
    color: 'white',
  },
  text: {
    color: 'orangered',
  },
});
