import React from 'react';
import {StyleSheet,View, Text, ActivityIndicator } from 'react-native'
import {Overlay} from 'react-native-elements'

export default function Loading (props){
    const {isVisible, text} = props;
    return (
        
            <View style={style.view}>
                <ActivityIndicator size = "large" color= "#FFFFFF"/>
                {text && <Text style = {StyleSheet.text}> {text}</Text>}
                
            </View>
        
    )
}

const style = StyleSheet.create({
    overlay:{
        height: 50,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#00a680",
        borderWidth: 2,
        borderRadius: 10,
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#00a680",
        textTransform: "uppercase",
        marginTop: 10
    }

})