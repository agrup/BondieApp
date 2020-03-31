import React, { createContext, useState, useEffect} from "react";
import { YellowBox } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

//Solucion provisori para evitar los warnings amarillos
YellowBox.ignoreWarnings(['Setting a timer']);

import PropTypes from "prop-types";

import { firebaseApp, CACHE_SIZE_UNLIMITED } from "../utils/FireBase";
import "firebase/firestore";
import "firebase/app";


export const Context = createContext({});

var db = firebaseApp.firestore();
var database = firebaseApp.database();

db.settings({
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
});

db.enablePersistence().catch(function(err) {
  console.log(err);
});

export const Provider = props => {
  // Initial values are obtained from the props
  const { children } = props;

  const [busslines, setBussLines] = useState({});
  
  async function fetchRoutes(){
       const resultBussLines = [];
        /*await database.ref('BussRoutes/').once('value')
        .then( function (snapshot) {
          snapshot.val().forEach(bussRoute => {
            console.log(bussRoute.id);
            let bussline = bussRoute.data;
            bussline.id = bussRoute.id;
            resultBussLines.push(bussline);
          })
          */
         await db.collection("BussRoutes").get()
         .then(response => {
           response.forEach(doc => {
             let bussline = doc.data();
             bussline.id = doc.id;
             resultBussLines.push(bussline);
           })
      });

      setBussLines(resultBussLines)
    }//, []);

//  const [busslines, setBussLines] = useState({});  

  // async function fetchRoutes(){
  //   const resultBussLines = [];
  //   await db.collection("BussRoutes").get()
  //     .then(response => {
  //       response.forEach(doc => {
  //         let bussline = doc.data();
  //         bussline.id = doc.id;
  //         //bussline.selected = false;  //por el momento se estan manteniendo por separado las lineas seleccionadas
  //         resultBussLines.push(bussline);
  //       })
  //     });

  //   setBussLines(resultBussLines)    
  // }

  useEffect(() => {
    NetInfo.fetch().then( state => {
      if(state.isConnected){    
        fetchRoutes();
      }else{
        console.log('no hay conexion');
      }
    });
    
   }, []);

   const unsubscribe = NetInfo.addEventListener(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);

    //si no hay lineas cargadas y hay internet vuelvo a consultar
    console.log('tamaño de bussline '+Object.keys(busslines).length);
    if(state.isConnected && Object.keys(busslines).length==0){
      fetchRoutes();
    }
    
  });

  // Unsubscribe
  //unsubscribe();


  //tengo en el estado los pares id => seleccionado/no_seleccionado
  const [selected, setSelected] = useState(new Map());

  const goSelectBussline = id => {
    const newSelected = new Map(selected);
    newSelected.set(id, true);

    setSelected(newSelected); 
  }
  //funcion que se ejecuta al seleccionar
  const selectBussline = id => {
    const newSelected = new Map(selected);
    newSelected.set(id, !selected.get(id));

    setSelected(newSelected);      
  }

  /*
  //SUPUESTAMENTE ES MAS EFICIENTE ESTA 
  const selectBussline = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);      
    },
    [selected],
  );
  */
  
  const getSelectedBusslines = () =>{    
    const resultBussLines = [];
    
    if(selected.size>0){
      busslines.forEach(line => {
        if(selected.get(line.id)){    
                
          resultBussLines.push(line);    
        }      
      })
    }    
    return resultBussLines;
  }

  // Make the context object:
  const BussLineContext = {
    busslines,
    selectBussline,
    selectedBusslines: getSelectedBusslines(),
    selected,    
    goSelectBussline
  };

  // pass the value in provider and return
  return <Context.Provider value={BussLineContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
