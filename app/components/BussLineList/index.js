import React, { useContext,useState } from 'react';
import { SafeAreaView , FlatList,StyleSheet,Text,View } from 'react-native';
import BussLineItem from './BussLineItem';
import { BusslineContext } from "../../context";

// import { ScrollView } from 'react-native-gesture-handler';

import Loading from '../../components/loagind/Loading'

export default function BussLineList () {  
  const busslineContext = useContext(BusslineContext);
  const { busslines, selectBussline, selected,goSelectBussline } = busslineContext;   
  
   if (busslines.length ==0){
     return (<Loading isVisible={true} text="Cargando..." />)
     
   }
    return (
        <FlatList 
          data={busslines}
          renderItem= { ({item}) => 
            <BussLineItem
              id={item.id} 
              name={item.name} 
              color={item.color}
              schedulers={item.horarios}
              selected={selected.get(item.id)}
              onSelect={selectBussline}
              goSelect={goSelectBussline}
            />
          }
          keyExtractor={item => item.id}
          extraData={selected} 
        />

    );
};