import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Scheduler from '../schedule/scheduleItem'


export default function BussLineItem({ id, name, color, selected, onSelect,goSelect }) {
  const navigation = useNavigation();
  const [isSelected,setIsSelected] = useState(false) 
  return(
    <View>
      <View style={[styles.bussLineItem,{backgroundColor: color}]}>

        <View  style={styles.leftSide}>
          <MaterialCommunityIcons name='bus' color="black" size={40}/>
          <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.rightSide}>
          <TouchableOpacity onPress={()=>{ShowHideComponent(isSelected,setIsSelected)}}>
            <SchedulerItem />
          </TouchableOpacity>
          
        </View>
        
        <View style={styles.rightSide}>
          <TouchableOpacity onPress={() => {onSelect(id)}}>
            <Show selected={selected}/>
          </TouchableOpacity>        
        </View>

        <TouchableOpacity onPress={() => {goSelect(id); navigation.navigate("Lugares")}}>
          <Maps />
        </TouchableOpacity>
      </View>
      {isSelected ? <Scheduler/> : null}
    </View>
  );
}

  
const Maps = () => {
  return (
    <View style={styles.button}>
      <MaterialCommunityIcons name="google-maps" color="black" size={30}/>
    </View>
  );
}


const Show = ({selected}) => {
  return (
    <View style={styles.button}>
      <MaterialCommunityIcons name={selected ? 'eye-outline' : 'eye-off-outline'} color="black" size={30}/>
    </View>
  );
}

const SchedulerItem = () => {

  return (
    
    <View style={styles.button} >
      <MaterialCommunityIcons name='clock' color="black" size={30}/>
      
    </View>
  );
}

const Title = ({selected}) => {
  return (
    <View style={styles.button} >
      <MaterialCommunityIcons name='clock' color="black" size={30}/>
    </View>
  );
}

const ShowHideComponent = (isSelected,setIsSelected) => {
  if (isSelected == true) {
    setIsSelected(false);
  } else {
    setIsSelected(true);
  }
};

const styles = StyleSheet.create({
  bussLineItem: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",    
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 2,
    padding: 5,
    height: 100,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    //flexWrap:"nowrap"
  },
  leftSide: {
    marginLeft: 10,
    // marginTop: 10,
    // paddingVertical: 12,
    // paddingHorizontal:12,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent:'flex-start',
    width: '50%',    
  },
  rightSide: {
    flexDirection: "row",
    flex:2,
    marginRight: '2%',    
    justifyContent:'flex-end',
    width: '25%',
  },
  name: {
    marginLeft: 20,
    textAlign:'center',
    fontFamily: 'Comfortaa-VariableFont_wght',
    fontWeight: "bold",
    fontSize:30,
    marginTop: 0,
    alignContent: 'center',
    paddingHorizontal:12,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 10,
    backgroundColor: "yellow",
    color: "#20232a",
  },
  button:{
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal:8,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 4,
    backgroundColor: "#CCCCCC",
  }
  
});

