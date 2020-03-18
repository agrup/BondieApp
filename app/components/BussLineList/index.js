import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import BussLineItem from './BussLineItem';
import {mockBussLine} from '../../services/MockBussLineService';

class BussLineList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: this._addKeysToItems(mockBussLine)
    };
  }
  _handleOnPress = id => {
    
  }

  _renderItem = ({item}) => {      
    return(
      <BussLineItem
        name={item.name} 
        color={item.color}
        onPress={this._handleOnPress(item.id)}
      />  
    );
  }

  _addKeysToItems = items => {
    return items.map(item => {
      return Object.assign(item, {key: item.id} );
    });
  }
  render(){
    return (
      <FlatList data={this.state.data} renderItem={this._renderItem} />
    );
  }
}
  
export default BussLineList;