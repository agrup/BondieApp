import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { BusslineContext } from "../../context";

import {
    LATITUDE,
    LONGITUDE,
    LATITUDE_DELTA,
    LONGITUDE_DELTA,
} from '../../configs/Maps';

export default function Map(){
  const bussLineContext = useContext(BusslineContext);
  const { selectedBusslines } = bussLineContext;

  const renderRoute = ({coordinates, name, color}) => {
    //console.log(coordinates[0]);
    const coordinatesPoliline = [];
    coordinates.map(geoPoint => {
      coordinatesPoliline.push({
        latitude : geoPoint._latitude,
        longitude : geoPoint._longitude,
      });
    })
    return (
      (coordinatesPoliline) ?
        <Polyline
        key={name}
        coordinates={coordinatesPoliline}
        strokeColor={color}
        strokeWidth={3}
        />
      : null
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
      {selectedBusslines.map(item => renderRoute(item))}
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