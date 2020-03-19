import * as React from 'react';
import { useState, useEffect} from "react";
import { SafeAreaView, Text, Image, FlatList } from 'react-native';
import BussLineItem from './BussLineItem';
import {mockBussLine} from '../../services/MockBussLineService';
import { useNavigation } from '@react-navigation/native';

import { firebaseApp } from "../../utils/FireBase";
import * as firebase from "firebase";
import "firebase/firestore";
const db = firebase.firestore(firebaseApp);

export default function BussLineList () {

  const [login, setLogin] = useState(null);
  const [Busslines, setBussLines] = useState({});
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  useEffect(() => {
      const resultBussLines = [];
      db.collection("BussLines").get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
   });

   setBussLines(mockBussLine)

   }, []);

  return (
    
    <SafeAreaView>  
      
      <FlatList 
        data={Busslines}
        renderItem= { ({item}) => 
          <BussLineItem
            name={item.name} 
            color={item.color}
          />  
      } />
    </SafeAreaView>
  );
}
;