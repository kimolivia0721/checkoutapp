import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import ItemsView from './ItemsView.js';
import Cart from './Cart.js';



class Main extends Component {
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
        this.state = {
            items: []
        }
    }
    addToCart(id){
        //id is the id in Items.js
        var s = 0;
        {this.state.items.map((item, index) => {
            if (item[1] === id){
                const newItems = this.state.items;
                newItems[index][0]++;
                this.setState({
                    items: newItems,
                })
                s = 1;
            }
        })}
        if(!s){
            this.setState({
                items: [...this.state.items, [1, id]],
            })
        }
    }
    deleteFromCart(id){
        //id is the id in Items.js
        {this.state.items.map((item, index) => {
            if (item[1] === id){
                const newItems = this.state.items;
                if (item[0] == 1){
                    newItems.splice(index, 1);
                }
                else{
                    newItems[index][0]--;
                }
                this.setState({
                    items: newItems,
                })
            }
        })}
    }
    render (){
        
        return(
            <View>
                <View>
                    <View>
                        <Text className="center">Groceries</Text>
                        <View>
                            <ItemsView addItem={this.addToCart}/>
                        </View>
                    </View>

                    <View>
                        <Text className="center">Cart</Text>
                            <Cart items={this.state.items} addCartItem={this.addToCart} deleteCartItem={this.deleteFromCart}/>
                    </View>
                </View>
            </View>
        )
    }
}


export default Main;
