import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Items from './Items.js';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';


class ItemsView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let itemList = Items.map(item =>{
            return (
                <View className="card" key={item.id}>
                    
                    <View className="container">
                    <Button
          title="add"
          onPress={() => this.props.addItem(item.id)}
        />
                    </View>


                    <View className="card-content">
                    <Text>{item.desc}</Text>
                    <Text>Price: ${item.price}</Text>
                    </View>
                </View>
            )
        })
        return(
            <View className="box">
                {itemList}
            </View>
        );
    }
}

export default ItemsView;