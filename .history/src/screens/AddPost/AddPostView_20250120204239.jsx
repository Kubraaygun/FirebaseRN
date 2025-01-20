import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AddPostView = () => {
  return (
    <View style={styles.form}>
      <Text style={styles.formTitle}>Yeni Gönderi Ekle</Text>
      <View style={styles.inputGroup}>
        <Text>Kullanıcı Adı</Text>
        <TextInput placeholder="Kullanici Adi" />
      </View>

      <View style={styles.inputGroup}>
        <Text>Kullanıcı Adı</Text>
        <TextInput placeholder="Kullanici Adi" />
      </View>

      <View style={styles.inputGroup}>
        <Text>Kullanıcı Adı</Text>
        <TextInput placeholder="Kullanici Adi" />
      </View>
    </View>
  );
};

export default AddPostView;

const styles = StyleSheet.create({});
