import * as React from 'react';
import { View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import CartScreen from './screens/cart';
import RecipeScreen from './screens/recipe'; 
import InventoryScreen from './screens/inventory';
import RecommenderScreen from './screens/recommender';
import SearchScreen from './screens/search';
import SettingsScreen from './screens/settings';

const homeName = 'Inventory';
const settingsName = 'Setting';
const cartName = 'Cart';
const recommenderName = 'Recommander';
const searchName = 'Search';
const recipeName = 'Recipe';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={InventoryScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
      </Stack.Navigator>
    );
  }

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName={homeName}
            screenOptions={({route})=>({
                tabBarStyle:{
                    height:70,
                    position: 'absolute',
                    bottom: 16,
                    right:16,
                    left:16,
                    borderRadius:10
                },
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if(rn === homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    }else if (rn === cartName){
                        iconName = focused ? 'cart' : 'cart-outline'
                    }else if (rn === recommenderName){
                        iconName = focused ? 'thumbs-up' : 'thumbs-up-outline'
                    }else if (rn === searchName){
                        iconName = focused ? 'search' : 'search-outline'
                    }else if (rn === settingsName){
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: 'orange',
                inactiveTintColor: 'grey',
                labelStyle: {paddingBottom: 10, fontSize: 10, fontWeight : 'bold'},
                style: {padding: 10}
            }}
            >

            <Tab.Screen name ={homeName} component={MainStackNavigator}/>
            <Tab.Screen name ={cartName} component={CartScreen}/>
            <Tab.Screen name ={searchName} component={SearchScreen}/>
            <Tab.Screen name ={recommenderName} component={RecommenderScreen}/>
            <Tab.Screen name ={settingsName} component={SettingsScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}
