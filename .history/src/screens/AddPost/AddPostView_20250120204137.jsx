import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AddPostView = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Yeni Gönderi Ekle</Text>
      <View style={styles.inputGroup}></View>
    </View>
  );
};

export default AddPostView;

const styles = StyleSheet.create({});
