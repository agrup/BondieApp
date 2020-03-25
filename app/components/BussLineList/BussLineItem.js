import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native-reanimated';

export default function BussLineList (props) {
    
  const {color,name} = props;
  
  return(
      <TouchableOpacity>
        <View style={[styles.bussLineItem,{backgroundColor: color}]}>
            <MaterialCommunityIcons name='bus' color="black" size={25}/>
            <Text style={styles.name}>{name}</Text>        
        </View>
      </TouchableOpacity>
    )  
}

const styles = StyleSheet.create({
  bussLineItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 2,
    padding: 5,
    height: 60,    
  },
  name: {
    marginLeft: 20,
  }
});

