import * as React from 'react';
import { useState, useEffect} from "react";
import { SafeAreaView, Text, Image, FlatList } from 'react-native';
import BussLineItem from './BussLineItem';
import {mockBussLine} from '../../services/MockBussLineService';
import { useNavigation } from '@react-navigation/native';

import { firebaseApp } from "../../utils/FireBase";
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/app";


var db = firebaseApp.firestore();

export default function BussLineList () {

  const [login, setLogin] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [Busslines, setBussLines] = useState({});
  const [user, setUser] = useState(null);

  const [selected, setSelected] = useState(new Map());
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  useEffect(() => {

    (async () => {    
      const resultBussLines = [];
      await db.collection("BussLines").get()
      .then(response => {
        response.forEach(doc => {
          let bussline = doc.data();
          bussline.id = doc.id;
          resultBussLines.push(bussline);
          console.log(bussline);
        })
      });

    setBussLines(resultBussLines)
    })();
   }, []);

  return (
    
    <SafeAreaView>  
      
      <FlatList 
        data={Busslines}
        renderItem= { ({item}) => 
          <BussLineItem
            id={item.id}
            name={item.name} 
            color={item.color}
            onSelect={onSelect}
            selected={!!selected.get(item.id)}
          />          
        } 
        keyExtractor={item => item.id}
        extraData={selected}  
      />
    </SafeAreaView>
  );
}
;