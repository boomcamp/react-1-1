import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'fancy hat',
          price: 12.99,
          description: 'has a feather in it.',
        },
        {
          id: 2,
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'fancy car',
          price: 15750.45,
          description: 'goes vroom vroom.',
        },
        {
          id: 3,
          imageUrl: 'https://via.placeholder.com/150x150',
          title: 'simple rock',
          price: 5.0,
          description: 'it is a rock',
        },
      ],
      cart: [],
    };
  }

  addToCart(item) {
    this.setState({
      cart: [...this.state.cart, item],
    });
  }

  render() {
    return (
      <div className="App">
        <section className="products">
          <h1>Products</h1>
          {
            this.state.products.map(item => (
              <div key={item.id} className="product-list">
                <img src={item.imageUrl} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => this.addToCart(item)}>Add to Cart</button>
              </div>
            ))
          }
        </section>

        <section className="cart">
          <h1>Cart</h1>
        </section>
      </div>
    );
  }
}