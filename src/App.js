import React, { Component } from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'BTC - Bitcoin',
                    price: 9166.00,
                    description: 'A PRICY BITCOIN'
                },
                {
                    id: 2,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'ETH - Etherium',
                    price: 268.66,
                    description: 'ETHER'
                },
                {
                    id: 3,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'XRP - Ripple',
                    price: 0.44,
                    description: 'IT IS RIPPLE'
                },
                {
                    id: 4,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'BNB - Binance Coin',
                    price: 35.34,
                    description: 'FROM BINANCE'
                }
            ],
            cart: []
        };
    }
}

export default App;