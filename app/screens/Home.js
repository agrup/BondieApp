import React from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
//import  MainIcon from '../components/Reources/icon' 
import styles from '../styles/app'


export default  function Home(){
    return (
        <View style={styles.screen}>

        
            <View >
                <Image
                    style={styles.logo}
                    source = {require('../assets/logo.png')}
                    resizeMode="contain"
                />
                <Text style={styles.info} > Bondie APP</Text>
                <Text style={styles.description}>Tu app para viajar en Lujan</Text>
                
            </View>
        </View>
    )
}

