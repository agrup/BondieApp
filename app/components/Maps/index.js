import React, {useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import MapView, { Polyline } from 'react-native-maps';
import { firebaseApp } from "../../utils/FireBase";
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/app";


import {
    LATITUDE,
    LONGITUDE,
    LATITUDE_DELTA,
    LONGITUDE_DELTA,
} from '../../configs/Maps';

/* Para Testing hasta hacer este el fetch sobre el backend*/ 
// import {mockRoutes} from '../../services/MockBussLineService';

var db = firebaseApp.firestore();

export default function Map(){
 
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    (async () => {    
      const resultBussLines = [];
      await db.collection("BussRoutes").get()
      .then(response => {
        response.forEach(doc => {
          let bussline = doc.data();
          bussline.id = doc.id;
          resultBussLines.push(bussline);
          //console.log(bussline);
        })
      });

      setRoutes(resultBussLines)
    })();
   }, []);



  function renderRoute ({coordinates, name, color}) {
        return (
            <Polyline
            key={name}
            coordinates={coordinates}
            strokeColor={color}
            strokeWidth={3}
            />
        );
    }

    return (

      <MapView
        style={ styles.map }

        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {routes.map(item => renderRoute(item))}

      </MapView>

    );

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

//export default Map;