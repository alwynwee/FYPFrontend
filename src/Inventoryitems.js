import React, { useEffect } from 'react'
import {Animated, View, Text, StyleSheet, Dimensions,Image,Button} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const inventoryItems = ({info}) => {
    const {img_url, title, rtr_date, exp} = info;

    const Devicewidth = Math.round(Dimensions.get('window').width)
    const barWidth = React.useRef(new Animated.Value(0)).current;
    const finalWidth = Devicewidth / 2.3;

    useEffect(() => {
        Animated.spring(barWidth,{
        toValue: finalWidth,
        bonuciness: 10,
        speed: 2,
        useNativeDriver: false,
        }).start();
    },[]);

    const register_date = new Date(rtr_date);
    const expiry_date = new Date(exp);
    let current_date = new Date();
    const diffDays = Math.ceil(
      Math.abs(expiry_date - register_date) / (1000 * 60 * 60 * 24)
    );
    const passedDays = Math.ceil(
      Math.abs(current_date - register_date) / (1000 * 60 * 60 * 24)
    );
    const leftDays = Math.ceil(
      (expiry_date - current_date) / (1000 * 60 * 60 * 24)
    );
  
    let expiryProgress = ((passedDays / diffDays) * 100) < Devicewidth / 2.3 ? ((passedDays / diffDays) * 100) : Devicewidth / 2.3 ;
    let StatusDetails = (expiryProgress >= Devicewidth / 2.3) ? "Expired" : expiryProgress > Devicewidth / 2.3 * 0.5 ? "Expiring Soon" : "Fresh";
    console.log("------------------------------------");
    console.log(StatusDetails);
    // console.log(StatusDetails);
    // console.log("------------------------------------");
    // console.log(leftDays);
    // console.log(diffDays);
    // console.log(expiryProgress);

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
    // console.log("-------------------------------------------------------");
    // console.log(title);
    return (
    <View style={styles.cardContainer}>
        <Image source={{uri: img_url}} style={styles.imageStyle}/>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.detailsStyle}>Registered Date : {rtr_date}</Text>
        <Text style={styles.detailsStyle}>Expiration date : {exp}</Text>
        <Text style={styles.detailsStyle}>{StatusDetails}</Text>
        <View style={styles.statusBar}></View>
        <Animated.View style={[styles.expireBar, {width: expiryProgress}, 
        (StatusDetails == "Fresh" 
        ? {backgroundColor: "#37FF16"} 
        : StatusDetails == "Expiring Soon" 
        ? {backgroundColor: "#FF910F"} 
        : {backgroundColor: "#FF2F2F"}) 
        ]} />
    </View>
    ) 
}

export default inventoryItems