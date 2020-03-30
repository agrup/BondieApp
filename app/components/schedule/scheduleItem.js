import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function Scheduler(){
    const data = {tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]}
      return (
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={data.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={data.tableData} textStyle={styles.text}/>
          </Table>
        </View>
      )
    }

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });