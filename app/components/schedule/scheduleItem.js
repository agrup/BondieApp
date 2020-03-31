import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Table, Row, Rows,Col,Cols } from 'react-native-table-component';

export default function Scheduler({scheduler}){

   const tableHead = []
   const tableroutes = []
    Object.values(scheduler).forEach(function(key){
      console.log(key)
      var {show,horas} = key
      console.log(horas)
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
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={data.HeadTable} style={styles.head} textStyle={styles.text}/>
            <Cols data={data.DataTable} textStyle={styles.text}/>
          </Table>
        </View>
      )
    }

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });