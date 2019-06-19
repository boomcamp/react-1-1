import React, { Component } from 'react';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            products : 
            [{
                id: 1,
                imageUrl: 'https://via.placeholder.com/150x150',
                title: 'House & Lot',
                price: 100,
                description: 'With furnitures inside',
            },
            {
                id: 2,
                imageUrl: 'https://via.placeholder.com/150x150',
                title: 'Red Car',
                price: 90,
                description: 'With free 1 gallon of gas',
            },
            {
                id: 1,
                imageUrl: 'https://via.placeholder.com/150x150',
                title: 'Wife',
                price: 10,
                description: 'Have 4 babies',
            }],
            cart: [],
        };
    }

    render(){
        return(
            <div className="App">
              <section className="products">
                <h1>Products</h1>
              </section>
        
              <section className="cart">
                <h1>Cart</h1>
              </section>
            </div>
          )
    }
}