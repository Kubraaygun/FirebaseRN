import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ListPostController from './src/screens/ListPost/ListPostController';
import AddPostController from './src/screens/AddPost/AddPostController';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ListPost" component={ListPostController} />
          <Stack.Screen name="AddPost" component={AddPostController} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
