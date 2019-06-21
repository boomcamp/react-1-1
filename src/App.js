import React, { Component } from 'react';
import './App.css';
import { conditionalExpression } from '@babel/types';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cardView: true,
      cart: [],
      address: '',
      creditCard: '',
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          qty: 0,
          description:
            'Headgear commonly used by fishermen. Increases fishing skill marginally.',
          price: 12.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
        {
          id: 2,
          title: 'Metal Hat',
          qty: 0,
          description: 'Uncomfortable, but sturdy.',
          price: 8.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
      ],
      beachGear: [
        {
          id: 3,
          title: 'Tent',
          qty: 0,
          description: 'Portable shelter.',
          price: 32.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
      ],
    };
  }

  addToCart(item) {
    // this.setState({
    //   cart: [...this.state.cart, item],
    // });
    let cartNew = this.state.cart.map(prod => Object.assign({}, prod));
    var idx = this.state.cart.findIndex(prod => prod.id === item.id)

    if (idx === -1) {
      item = Object.assign({}, item, { qty: 1 })
      this.setState({
        cart: [...this.state.cart, item]
      })
    }else {
      cartNew[idx].qty++
      this.setState({
        cart: cartNew
      })
    }
  }

  checkout = () => {
    this.setState({ cart: [] });
    alert('Purchase is complete!');
  };

  handleAddressInput = e => {
    this.setState({
      address: e.target.value
    })
  }

  handleCreditCardInput = e => {
    this.setState({
      creditCard: e.target.value
    })
  }

  checkout = () => {
    if (this.state.address.length > 0 && this.state.creditCard.length > 0) {
      this.setState({ cart: [], address: '', creditCard: '' });
      alert('Purchase is complete!');
    } else {
      alert('Please fill out the required fields.');
    }
  };

  deleteFromCart(id) {
    let cartCopy = this.state.cart.map(product => Object.assign({}, product));
    let index = this.state.cart.findIndex(product => product.id === id);

    if (cartCopy[index].qty === 1) {
      cartCopy.splice(index, 1);
    } else if (cartCopy[index].qty > 1) {
      cartCopy[index].qty--;
    }

    this.setState({ cart: cartCopy });
  }

  handleToggleView = () => {
    this.setState({ cardView: !this.state.cardView });
  };

  render() {

    return (
      <div className="App">
        <section className="products">
          <h1>Products</h1>
          <button onClick={this.handleToggleView}>Toggle view</button>
          <h2>Hats</h2>
          {this.state.hats.map(item => (
            <div key={item.id} className={this.state.cardView? "product" : "product-list"}>
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
          ))}

          <h2>Beach Gear</h2>
          {this.state.beachGear.map(item => (
            <div key={item.id} className={this.state.cardView? "product" : "product-list"}>
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
          ))}
        </section>

        <section className="cart">
          <h1>Cart</h1>
          <h2>
            Total: $
            {this.state.cart.reduce(
              (totalPrice, product) => (totalPrice += product.price * product.qty),
              0
            )}

          </h2>

          <div className="inputs">
            <input
              placeholder="address"
              value={this.state.address}
              onChange={this.handleAddressInput}
            />
            <input
              placeholder="credit card number"
              value={this.state.creditCard}
              onChange={this.handleCreditCardInput}
            />
          </div>

          <button onClick={this.checkout}>Checkout</button>

          {this.state.cart.map(item => (
            <div key={item.id} className="product">
              <img src={item.imageUrl} />
              <div className="product-info">
                <h4>{item.title}</h4>
                <p>Quantity: {item.qty}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>

                <button onClick={() => this.deleteFromCart(item.id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}