import React, { createContext, useState, useEffect} from "react";
import { YellowBox } from 'react-native';
import firestore from '@react-native-firebase/firestore';

//Solucion provisori para evitar los warnings amarillos
YellowBox.ignoreWarnings(['Setting a timer']);

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const { children } = props;

  const [busslines, setBussLines] = useState([]);
  
  async function fetchRoutes(){
    const resultBussLines = [];
      await firestore().collection("BussRoutes").get()
      .then(response => {
        response.forEach(doc => {
          let bussline = doc.data();
          bussline.id = doc.id;
          resultBussLines.push(bussline);
        })

    });
    setBussLines(resultBussLines)
  }

  useEffect(() => {
  fetchRoutes();
  });
   
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
