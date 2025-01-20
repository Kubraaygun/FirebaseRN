import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text>Form Listesi</Text>
      <CustomButton />
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({});
