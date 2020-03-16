import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Import screens

import BussLineScreen from '../screens/BussLine';
import HomeScreen from '../screens/Home';
import MapsScreen from '../screens/Maps';
import InfoScreen from '../screens/Info';

import MyAcountScreen from '../screens/MyAcount';


//const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function BussLineStacks(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lineas Locales" component={BussLineScreen}/>
        </Stack.Navigator>
    )
}

function HomeStacks(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

function MapsStacks(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Mapas" component={MapsScreen}/>
        </Stack.Navigator>
    )
}

function InfoStacks(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Info" component={InfoScreen}/>
        </Stack.Navigator>
    )
}

export default function navigation(){
    return(
        <NavigationContainer>
            <Drawer.Navigator >
                <Drawer.Screen
                    name = "Bienvenido"
                    component={HomeStacks}
                    options={{
                        drawerLabel: 'Bienvenido',
                        drawerIcon: ({color , size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size}/>
                        )
                    }}
                />  
                <Drawer.Screen
                    name = "Lineas Locales"
                    component={BussLineStacks}
                    options={{
                        drawerLabel: 'Lineas Locales',
                        drawerIcon: ({color , size}) => (
                            <MaterialCommunityIcons name='bus' color={color} size={size}/>
                        )
                    }}
                />                
                <Drawer.Screen
                    name = "Lugares"
                    component={MapsStacks}
                    options={{
                        drawerLabel: 'Lugares',
                        drawerIcon: ({color , size}) => (
                            <MaterialCommunityIcons name="google-maps" color={color} size={size}/>
                        )
                    }}
                />
                <Drawer.Screen
                    name = "Informcion"
                    component={InfoStacks}
                    options={{
                        drawerLabel: 'Informacion',
                        drawerIcon: ({color , size}) => (
                            <MaterialCommunityIcons name='information' color={color} size={size}/>
                        )
                    }}
                />                                                   
            </Drawer.Navigator>
        </NavigationContainer>
    )
};