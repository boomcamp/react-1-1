import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            "Headgear commonly used by fishermen. Increases fishing skill marginally.",
          price: 12.99,
          imageUrl: "https://via.placeholder.com/150x150"
        },
        {
          id: 2,
          title: "Metal Hat",
          description: "Uncomfortable, but sturdy.",
          price: 8.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ],
      beachGear: [
        {
          id: 3,
          title: "Tent",
          description: "Portable shelter.",
          price: 32.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ]
    }
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
          <h2>Hats</h2>
          {
            this.state.hats.map(item => (
              <div key={item.id} className="product-list">
                <img src={item.imageUrl} />
                <div className="product-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <button onClick={() => this.addToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          }

          <h2>Beach Gear</h2>
          {
            this.state.beachGear.map(item => (
              <div key={item.id} className="product-list">
                <img src={item.imageUrl} />
                <div className="product-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <button onClick={() => this.addToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          }
        </section>

        <section className="cart">
          <h1>Cart</h1>
          <h2>
            Total: $
            {this.state.cart.reduce(
              (totalPrice, product) => (totalPrice += product.price),0
            )}
          </h2>
          {
            this.state.cart
            .map(cartItem =>( 
              <div key={cartItem.id} className="product">
                  <img src={cartItem.imageUrl} alt="product" />
                  <h4>{cartItem.title}</h4>
                  <p>{cartItem.description}</p>
                  <p>{cartItem.price}</p>
                  <button onClick={() => this.addToCart(cartItem)}>Add To Cart</button>
              </div>
            ))
          }
        </section>
      </div>
    );
  }
}