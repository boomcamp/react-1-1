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
            <div className="column">
              <section className="products">
                <h1>Products</h1>
                {
                    this.state.products
                        .map(p =>( 
                            <div key={p.id} className="product">
                                <img src={p.imageUrl} alt="product image" />
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                                <p>{p.price}</p>
                                <button>Add To Cart</button>
                            </div>
                        ))
                }
              </section>
            </div>
                
              <div className="column bg-black">
                <section className="cart">
                        <h1>Cart</h1>
                </section>
              </div>
            </div>
          )
    }
}