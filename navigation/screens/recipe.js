import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';

export default function RecipeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground source={require('../../assets/images/photo1.png')} style={styles.bgImage}>
        </ImageBackground>
      </View>
    );
  }

  const styles = StyleSheet.create({
    bgImage: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  })