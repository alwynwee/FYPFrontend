import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Image, Dimensions, Button } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../src/Inventoryitems';
import RecipeScreen from './recipe';

export default function InventoryScreen({navigation}) {
  
  //check user code, and fetch his inventory list

  //inventory list
  const inventorylist = [
    {
        "username": "justintankh",
        "p_code": "WCDYKA",
        "title": "Mac & Cheese",
        "img_url": "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90049980_XL1_20201207.jpg?w=1200&q=70",
        "qty": 1,
        "rtr_date": "2021-12-11",
        "exp": "2021-12-30"
    },
    {
        "username": "justintankh",
        "p_code": "VMLRNO",
        "title": "Eggs",
        "img_url": "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/11194824_XL1.jpg?w=1200&q=70",
        "qty": 1,
        "rtr_date": "2021-12-11",
        "exp": "2021-12-26"
    },
    {
        "username": "justintankh",
        "p_code": "TIGFRK",
        "title": "Heinz Ketchup",
        "img_url": "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/430819_XL1.jpg",
        "qty": 1,
        "rtr_date": "2021-12-21",
        "exp": "2022-12-31"
    },
    {
        "username": "justintankh",
        "p_code": "GLDIPI",
        "title": "Quaker",
        "img_url": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=58028250774",
        "qty": 1,
        "rtr_date": "2021-12-29",
        "exp": "2021-12-26"
    },
    {
        "username": "justintankh",
        "p_code": "AKJRDJ",
        "title": "Café soluble granulado cafeínado extrafuerte - Nescafé",
        "img_url": "https://world.openfoodfacts.org/images/products/789/100/030/0602/front_fr.17.full.jpg",
        "qty": 1,
        "rtr_date": "2021-12-29",
        "exp": "2021-12-26"
    },
    {
        "username": "justintankh",
        "p_code": "VRBKWA",
        "title": "peach tea",
        "img_url": "https://www.africanbites.com/wp-content/uploads/2021/04/Peach-Tea-Final-1.jpg",
        "qty": 1,
        "rtr_date": "2022-01-01",
        "exp": "2022-01-01"
    },
    {
        "username": "justintankh",
        "p_code": "XYTMVZ",
        "title": "Egg",
        "img_url": "https://i.guim.co.uk/img/media/db9a96e1251a41a215ada849407983cedadc2fbb/0_252_2574_1545/master/2574.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c9f8a7a53581da509ffbc0d9c33b9aa1",
        "qty": 1,
        "rtr_date": "2022-01-01",
        "exp": "2021-12-26"
    },
    {
        "username": "justintankh",
        "p_code": "SONSXI",
        "title": "Chicken feet",
        "img_url": "https://www.thespruceeats.com/thmb/66vVLkYRLgQ1mSWIV3lZpg8LK20=/1825x1825/smart/filters:no_upscale()/hot-and-spicy-chicken-feet-1664854-Hero-2-de6ba5fb21e44e86ae89738fffac690b.JPG",
        "qty": 5,
        "rtr_date": "2022-01-01",
        "exp": "2022-12-26"
    },
    {
        "username": "justintankh",
        "p_code": "POZTMG",
        "title": "Special Muesli 30% fruits & noix - Jordans - 750 g",
        "img_url": "https://world.openfoodfacts.org/images/products/501/047/730/1246/front_fr.3.full.jpg",
        "qty": 5,
        "rtr_date": "2022-01-01",
        "exp": "2022-01-20"
    }
  ]

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/photo1.png')} style={styles.bgImage}>
            <FlatList data={inventorylist} style={styles.InventoryBox}
              renderItem={({item}) => {
                return <Card info={item} style={styles.text}/>
              }}
              keyExtractor={(inventorylist) => inventorylist.p_code.toString()}
            />
            <View style={styles.recipeButton}>
              <Button color="#FF880D" title="Recipe"></Button>
            </View>
        </ImageBackground>
    </View>
  );
}

const Devicewidth = Math.round(Dimensions.get('window').width)
const Deviceheight = Math.round(Dimensions.get('window').height)
const styles = StyleSheet.create({
  recipeText:{
    fontSize: 40,
    fontWeight: "Bolder",
  },
  recipeButton:{
    backgroundColor: "#FF880D",
    height: Deviceheight / 10,
    width: Devicewidth / 1.1 ,
    top: Devicewidth / 2.5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",    
  },
  bgImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  InventoryBox:{
    color: "black",
    height: Deviceheight / 1.7,
    width: Devicewidth / 1.1 ,
    position: "absolute",
    padding: 30,
    bottom: Devicewidth / 1.87 ,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'rgba(250, 160, 78, 0.8)'
  },
  text:{
    fontSize: 18,
  }
});