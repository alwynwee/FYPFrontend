import React from 'react'
import {View, Text, StyleSheet, Dimensions,Image,Button} from 'react-native'

const inventoryItems = ({info}) => {
    const {img_url, title, rtr_date, exp} = info;
    // console.log("-------------------------------------------------------");
    // console.log(title);
    return (
    <View style={styles.cardContainer}>
        <Image source={{uri: img_url}} style={styles.imageStyle}/>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.detailsStyle}>Registered Date : {rtr_date}</Text>
        <Text style={styles.detailsStyle}>Expiration date : {exp}</Text>
        <View style={styles.statusBar}></View>
        <View style={styles.expireBar}></View>
    </View>
    ) 
}

const Devicewidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer:{
        width: Devicewidth,
        height: Devicewidth / 3,
        // borderRaidus: 20,
        shadowColor: "black",
        shadowOffset:{
            width:20,
            height:20
        },
        shadowRadius:5,
        shadowOpacity: 20,
    },
    statusBar:{
        backgroundColor: "white",
        height: 10,
        left: Devicewidth / 3.8,
        bottom: Devicewidth / 11,
        width: Devicewidth / 2.3,
        justifyContent: "center",
        flex:1,
        position: "absolute",
        borderRadius: 20,
    },
    expireBar:{
        //display progress using width precentage 
        width: Devicewidth / 2.3 - (Devicewidth / 2.3 * 0.2),
        //change color based on progress
        backgroundColor: "red",
        height: 10,
        left: Devicewidth / 3.8,
        bottom: Devicewidth / 11,
        justifyContent: "center",
        flex:1,
        position: "absolute",
        borderRadius: 20,
    },
    imageStyle:{
        height: Devicewidth / 4,
        width: Devicewidth / 4,
    },
    titleStyle:{
        left: Devicewidth / 3.8,
        bottom: Devicewidth / 4.2,
        flexWrap: 'nowrap',
        fontSize: 18,
    },
    detailsStyle:{
        left: Devicewidth / 3.8,
        bottom: Devicewidth / 4.2,
        fontSize: 12,
        fontWeight: "200",
    }
})
export default inventoryItems