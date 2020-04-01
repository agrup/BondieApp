import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Table, Row, Rows,Col,Cols } from 'react-native-table-component';

export default function Scheduler({scheduler}){

   const tableHead = []
   const tableroutes = []
   
    Object.values(scheduler).forEach(function(key){
      const {show,horas} = key

      tableHead.push(show)
      tableroutes.push(horas)
    });


    const data = {
      HeadTable: tableHead,
      DataTable:        
        tableroutes
    }
      return (
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#fff'}}>
            <Row data={data.HeadTable} style={styles.head} textStyle={styles.textheader}/>
            <Cols data={data.DataTable} textStyle={styles.text}/>
          </Table>
        </View>
      )
    }

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#000000' },
    head: { height: 40, backgroundColor: '#FF1153' },
    text: { margin: 6, color:'#FF0042'},
    textheader:{color:'#000000',
    fontWeight: "bold",
    textAlign:'center',
    fontFamily: 'Comfortaa-VariableFont_wght',
    }
  });