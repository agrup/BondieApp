import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles/app'
// import admob from '@react-native-firebase/admob';
// import { firebase } from '@react-native-firebase/admob';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

export default function Adv() {
  return(
    <BannerAd
    unitId={TestIds.BANNER}
    // unitId="ca-app-pub-7795891581309684/7605017223"
    size={BannerAdSize.FULL_BANNER}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
    onAdLoaded={() => {
      console.log('Advert loaded');
    }}
    onAdFailedToLoad={(error) => {
      console.error('Advert failed to load: ', error);
    }}
  />
  );
}