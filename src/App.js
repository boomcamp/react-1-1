import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      address: '',
      creditCard: '',
      cardView: true,
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            'Headgear commonly used by fishermen. Increases fishing skill marginally.',
          price: 12.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
        {
          id: 2,
          title: 'Metal Hat',
          description: 'Uncomfortable, but sturdy.',
          price: 8.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
      ],
      beachGear: [
        {
          id: 3,
          title: 'Tent',
          description: 'Portable shelter.',
          price: 32.99,
          imageUrl: 'https://via.placeholder.com/150x150',
        },
      ],
    };
  }

  addToCart(item) {
    let obj = Object.assign({});
    let cartCopy = this.state.cart.map(product => (obj, product));
    let index = this.state.cart.findIndex(product => product.id === item.id);

    if (index === -1) {
      item = Object.assign({}, item, { quantity: 1 });
     
      this.setState({ cart: [...this.state.cart, item] });
     // console.log({ cart: [...this.state.cart, item] });
    } else {
      cartCopy[index].quantity++;
      this.setState({ cart: cartCopy });
    }
  }


  deleteFromCart(id) {
    let obj = Object.assign({});
    let cartCopy = this.state.cart.map(product => (obj, product));
    let index = this.state.cart.findIndex(product => product.id === id);

    if (cartCopy[index].quantity === 1) {
      cartCopy.splice(index, 1);
    } else if (cartCopy[index].quantity > 1) {
      cartCopy[index].quantity--;
    }

    this.setState({ cart: cartCopy });
  }



  checkout = () => {
    if (this.state.address.length > 0 && this.state.creditCard.length > 0) {
      this.setState({ cart: [] });
      alert('Purchase is complete!');
    } else {
      alert('Please fill out the required fields.');
    }
  };

  handleAddressInput = e => {
    this.setState({ address: e.target.value });
  };
  
  handleCreditCardInput = e => {
    this.setState({ creditCard: e.target.value });
  };

  handleToggleView = () => {
    this.setState({
      cardView: false,
    })
    
  }

  render() {
    return (
      <div className="App">
        <section className="products">
          <button onClick = {this.handleToggleView} >Toggle View</button>
          <h1>Products</h1>
          <h2>Hats</h2>
          {this.state.hats.map(item => (
            <div key={item.id} className={this.state.cardView === true ? "product" : "product-list"}>
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
            <div key={item.id} className={this.state.cardView === true ? "product" : "product-list"}>
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
              (totalPrice, product) => (totalPrice += product.price),
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
                <p>Quanity: {item.quantity}</p>
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