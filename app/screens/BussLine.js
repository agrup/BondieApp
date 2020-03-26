import React from 'react';
import { View,Text } from 'react-native';
import BussLineList from '../components/BussLineList/';
import styles from '../styles/app'

export default  function BussLine(){
    return (
        <View style={styles.screen}>            
            <BussLineList></BussLineList>
        </View>
    )
}
