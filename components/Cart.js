import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

import Items from './Items.js';

class Cart extends Component {
    constructor(props){
        super(props);
    }
    countItems(){
        var total = 0;
        for (var i = 0; i < this.props.items.length; i++){
            total += this.props.items[i][0];
        }
        return total;
    }
    calculateTotal(){
        var total = 0;
        for (var i = 0; i < this.props.items.length; i++){
            for (var j = 0; j < Items.length; j++){
                if (Items[j].id == this.props.items[i][1]){
                    total += Items[j].price * this.props.items[i][0];
                }
            }
        }
        return total;
    }
    render(){
        let numItems = this.countItems();
        let total = this.calculateTotal();
        let cartList = this.props.items.map((item, key) => {

            var desc = '';
            
            for (var i = 0; i < Items.length; i++){
                if (Items[i].id == item[1]){
                    desc = Items[i].desc;
                }
            }

            return(
                <View>
                    <Text> descr: {desc} </Text>
                    <Text> amount: {item[0]} </Text>
                    <Text> id: {item[1]} </Text>
                    <Button
                    title="remove"
                    onPress={() => this.props.deleteCartItem(item[1])}
                    />
                    <Button
                    title="add"
                    onPress={() => this.props.addCartItem(item[1])}
                    />
                </View>
            );
        })
        return(
            <View>
                <Text>{numItems} items in cart</Text>
                {cartList}
                <Text>Total: ${total}</Text>
                <Text>After tax: ${Math.round((total * 1.13 + Number.EPSILON) * 100) / 100}</Text>
            </View>
        );
    }
}

export default Cart;