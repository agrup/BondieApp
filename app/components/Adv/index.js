import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles/app'

export default function Adv() {
  return(
    <TouchableOpacity>
      <View >

        <View  style={styles.screenadv}>

            <Text style={styles.textadv}>
                <Image
                    style={styles.logomini}
                    source = {require('../../assets/logo.png')}
                />
              BondieApp (adv)
            </Text>

        </View>
      </View>
    </TouchableOpacity>
  );
}