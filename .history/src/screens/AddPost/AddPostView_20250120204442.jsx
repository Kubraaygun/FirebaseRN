import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

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
    </View>
  );
};

export default AddPostView;

const styles = StyleSheet.create({});
