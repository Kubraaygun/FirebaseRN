import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomButton from '../component/CustomButton';

const AddPostView = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Yeni Gönderi Ekle</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Kullanıcı Adı</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanici Adi"
          placeholderTextColor={'black'}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Başlık</Text>
        <TextInput
          style={styles.input}
          placeholder="Başlık"
          placeholderTextColor={'black'}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Açıklama</Text>
        <TextInput
          style={styles.input}
          placeholder="Açıklama"
          placeholderTextColor={'black'}
        />
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
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 10,
    gap: 20,
  },
  inputGroup: {
    gap: 10,
  },
  formTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '800',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  input: {
    backgroundColor: 'gold',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
});
