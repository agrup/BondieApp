import React, {Image} from 'react';
import { StyleSheet } from 'react-native';
export default function MainIcon() {


    return(
        <Image
            style={styles.logo}
            source = {require('../../assets/logo.jpeg')}
            resizeMode="contain"
        />
    )
}

const styles = StyleSheet.create({
    logo: {
      width: "100%",
      height: 150,
      marginTop: 20
    },
})