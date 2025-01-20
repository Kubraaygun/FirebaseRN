import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomButton from '../component/CustomButton';

const AddPostView = ({handleInputChange, form, handleSubmit}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Yeni Gönderi Ekle</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Kullanıcı Adı</Text>
        <TextInput
          value={form.user}
          style={styles.input}
          onChangeText={text => handleInputChange('user', text)}
          placeholder="Kullanıcı Adı"
          placeholderTextColor={'black'}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Başlık</Text>
        <TextInput
          value={form.title}
          style={styles.input}
          onChangeText={text => handleInputChange('title', text)}
          placeholder="Başlık"
          placeholderTextColor={'black'}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Açıklama</Text>
        <TextInput
          value={form.text}
          style={styles.input}
          onChangeText={text => handleInputChange('text', text)}
          placeholder="Açıklama"
          placeholderTextColor={'black'}
        />
      </View>

      <CustomButton buttonTitle={'Gönder'} onPress={handleSubmit} />
    </View>
  );
};

export default AddPostView;

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#A94A4A',
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
    backgroundColor: '#F4D793',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
});
