import 'react-native-gesture-handler';
import React, {Component, useState, useRef} from 'react';
import axios from 'axios';
import {
  Platform, 
  StyleSheet,
  Text,
  View,
  Alert,
  Modal
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LessonScreen from './screens/LessonScreen';
import TestScreen from './screens/TestScreen';


const App = () => {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Lesson">
        <Stack.Screen name="Lesson" component={LessonScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

});

export default App;