import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = function(props){

    return ( 
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <TouchableOpacity style = {styles.square}></TouchableOpacity>
                <Text style = {styles.itemText}>{props.text}</Text>
            </View>
            <View style = {styles.circular}></View>
        </View>
    )
}
//----------------------------------------------------------------------Styles
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius:10,
        borderColor: '#710193',
        borderWidth:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        elevation: 10,
    },
   //----------------------------------------------------------------------
    itemLeft:{
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
      
    },
    //----------------------------------------------------------------------
    square:{
        width:24,
        height:24,
        marginRight:10,
        backgroundColor: '#710193',
        opacity:0.4,
        borderRadius:5
    },
    //----------------------------------------------------------------------
    itemText:{
        maxWidth:'80%',
        color: '#311432',
        fontWeight: 'bold',
    },
    //----------------------------------------------------------------------
    circular:{
        width:15,
        height: 15,
        borderColor:'#710193',
        borderWidth: 2,
        borderRadius:5
    },
}); 
export default Task;