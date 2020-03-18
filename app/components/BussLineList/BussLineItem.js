import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class BussLineItem extends React.Component {  
  render(){
    return(
      <TouchableOpacity>
        <View style={[styles.bussLineItem,{backgroundColor: this.props.color}]}>
            <MaterialCommunityIcons name='bus' color="black" size={25}/>
            <Text style={styles.name}>{this.props.name}</Text>        
        </View>
      </TouchableOpacity>
    );
  }
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

export default BussLineItem;
