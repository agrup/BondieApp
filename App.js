import React from 'react';
import { Button, View } from 'react-native';
import Navigation from './app/navigations/Navigation'
import { BusslineContextProvider } from "./app/context";

export default function App() {
  return (
    <BusslineContextProvider>
      <Navigation/>
    </BusslineContextProvider>
  )
}