import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListPostView = ({postData}) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          gap: 12,
        }}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
    gap: 10,
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
