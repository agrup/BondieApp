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
import { Button } from 'react-native';


//const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function optionStackScreens({ navigation }){
    return(
        {                            
            headerLeft: () => (
                <MaterialCommunityIcons        
                    name='menu'
                    size={40}                                        
                    onPress={() => navigation.toggleDrawer()}
                    style={ {marginLeft: 2} }
                />
            ),
          }
    )
}

function BussLineStacks({ navigation }){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Lineas Locales" component={BussLineScreen} options={optionStackScreens}/>
        </Stack.Navigator>
    )
}

function HomeStacks({ navigation }){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Bondie App" component={HomeScreen} options={optionStackScreens}/>
        </Stack.Navigator>
    )
}

function MapsStacks({ navigation }){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Mapas" component={MapsScreen} options={optionStackScreens}/>
        </Stack.Navigator>
    )
}

function InfoStacks({ navigation }){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Info" component={InfoScreen} options={optionStackScreens}/>
        </Stack.Navigator>
    )
}

export default function navigation(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name = "Bienvenido"
                    component={HomeStacks}
                    options={{
                        drawerLabel: 'Bienvenido',
                        drawerIcon: ({color , size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size}/>
                        ),
                        
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