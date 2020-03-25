import React, { useContext } from 'react';
import { SafeAreaView , FlatList } from 'react-native';
import BussLineItem from './BussLineItem';
import { BusslineContext } from "../../context";

export default function BussLineList () {  
  const busslineContext = useContext(BusslineContext);
  const { busslines, selectBussline, selected } = busslineContext;    
  
  return (
    <SafeAreaView>        
      <FlatList 
        data={busslines}        
        renderItem= { ({item}) => 
          <BussLineItem
            id={item.id} 
            name={item.name} 
            color={item.color}
            selected={selected.get(item.id)}
            onSelect={selectBussline}
          />
        }
        keyExtractor={item => item.id}
        extraData={selected} 
      />
    </SafeAreaView>
  );
}
;