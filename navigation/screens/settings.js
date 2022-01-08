import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SettingsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={{height: '100%', width:'100%'}} source={require("../../assets/images/photo1.png")}></Image>
      </View>
    );
  }