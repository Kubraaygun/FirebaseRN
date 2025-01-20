import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomButton from '../component/CustomButton';

const AddPostView = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Yeni Gönderi Ekle</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Kullanıcı Adı</Text>
        <TextInput style={styles.input} placeholder="Kullanici Adi" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Başlık</Text>
        <TextInput style={styles.input} placeholder="Başlık" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Açıklama</Text>
        <TextInput style={styles.input} placeholder="Açıklama" />
      </View>

      <CustomButton buttonTitle={'Gönder'} />
    </View>
  );
};

export default AddPostView;

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'black',
    marginVertical: 50,
    marginHorizontal: 16,
  },
  formTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '800',
  },
});
