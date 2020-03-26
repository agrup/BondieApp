import React from 'react';
import { Button, View, Text } from 'react-native';
import Navigation from './app/navigations/Navigation'
import { BusslineContextProvider } from "./app/context";
import Adv from './app/components/Adv'

export default function App() {
  return (
    <BusslineContextProvider>
      <Navigation/>
      <Adv/>

    </BusslineContextProvider>
  )
}