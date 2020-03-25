import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function BussLineItem({ id, name, color, selected, onSelect }) {
  const navigation = useNavigation();
  return(
    <TouchableOpacity
      onPress={() => {onSelect(id); navigation.navigate("Lugares")}}
    >
      <View style={[styles.bussLineItem,{backgroundColor: color}]}>

        <View  style={styles.leftSide}>
          <MaterialCommunityIcons name='bus' color="black" size={25}/>
          <Text style={styles.name}>{name}</Text>
        </View>

        <View  style={styles.rightSide}>
          <MaterialCommunityIcons name={selected ? 'eye-outline' : 'eye-off-outline'} color="black" size={30}/>
        </View>                  

      </View>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  bussLineItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",    
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 2,
    padding: 5,
    height: 60
  },
  leftSide: {
    flexDirection: "row",
    justifyContent:'flex-start',
    width: '70%',    
  },
  rightSide: {
    flexDirection: "row",
    marginRight: '2%',    
    justifyContent:'flex-end',
    width: '25%',
  },
  name: {
    marginLeft: 20
    
  },
  
});

