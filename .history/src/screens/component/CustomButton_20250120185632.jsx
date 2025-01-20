import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({buttonTitle,}) => {
  return (
  <TouchableOpacity>
    <Text>
        {buttonTitle}
    </Text>
  </TouchableOpacity>>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
