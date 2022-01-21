import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,Dimensions } from 'react-native';

export default function SearchScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/photo1.png')} style={styles.bgImage}>
      </ImageBackground>
    </View>
  );
}

const Devicewidth = Math.round(Dimensions.get('window').width)
const Deviceheight = Math.round(Dimensions.get('window').height)
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
})