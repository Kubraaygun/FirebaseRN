import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';

const AppBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Listesi</Text>
      <CustomButton
        buttonTitle={'Gönderi Ekle'}
        onPress={() => {
          navigation.navigate('AddPost');
        }}
      />
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
});
