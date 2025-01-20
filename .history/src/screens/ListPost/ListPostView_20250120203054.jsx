import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListPostView = ({postData}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        renderItem={({item}) => (
          <View style={styles.post}>
            <View>
              <Text>{item.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListPostView;

const styles = StyleSheet.create({});
