import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Login as component} from './login/login';

function App() {
  return (
    <MainContainer/>
  );
}

export default App;