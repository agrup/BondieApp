import React from 'react';
import { View, StyleSheet } from 'react-native';

import MapView, { Polyline } from 'react-native-maps';
import {
    LATITUDE,
    LONGITUDE,
    LATITUDE_DELTA,
    LONGITUDE_DELTA,
} from '../../configs/Maps';

/* Para Testing hasta hacer este el fetch sobre el backend*/ 
import {mockRoutes} from '../../services/MockBussLineService';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        routes: []
    }
  }
  
  componentDidMount(){
      /* TODO: service fetchRoutes*/
      this.setState({
          routes: mockRoutes
        });
  }

  renderRoute ({coordinates, name, color}) {
        return (
            <Polyline
            key={name}
            coordinates={coordinates}
            strokeColor={color}
            strokeWidth={3}
            />
        );
    }

  render() {
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
        {this.state.routes.map(this.renderRoute)}

      </MapView>

    );
  }

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

export default Map;