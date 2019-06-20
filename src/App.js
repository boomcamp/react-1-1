import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      address: "",
      creditCard: "",
      cardView: true,
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            "Headgear commonly used by fishermen. Increases fishing skill marginally.",
          price: 12.99,
          imageUrl: "https://via.placeholder.com/150x150",
          quantity: 0
        },
        {
          id: 2,
          title: "Metal Hat",
          description: "Uncomfortable, but sturdy.",
          price: 8.99,
          imageUrl: "https://via.placeholder.com/150x150",
          quantity: 0
        }
      ],
      beachGear: [
        {
          id: 3,
          title: "Tent",
          description: "Portable shelter.",
          price: 32.99,
          imageUrl: "https://via.placeholder.com/150x150",
          quantity: 0
        }
      ]
    }
  }

  addToCart(product) {
    let copyCart = [...this.state.cart];
    let index = this.state.cart.findIndex(p => p.id === product.id);
    if(index === -1){ 
        product = Object.assign({},product,{ quantity: 1 });
            this.setState({
                cart: [...this.state.cart, product]
            })
    }else{
        copyCart[index].quantity++;
        this.setState({
            cart: copyCart,
        });
    }
  }

  checkout = () => {
    if (this.state.address.length > 0 && this.state.creditCard.length > 0) {
      this.setState({cart: []});
      alert('Purchase is complete!');
    } else {
      alert('Please fill out the required fields.');
    }
  };

  handleAddressInput = (e) => {
    this.setState({ address: e.target.value });
  }

  handleCreditCardInput = (e) => {
    this.setState({ creditCard: e.target.value });
  }

  deleteFromCart(id){
    let copyCart = [...this.state.cart];
    let index = this.state.cart.findIndex(p => p.id === id);

    if(copyCart[index].quantity===1){
        copyCart = copyCart.filter(c => c.id !== copyCart[index].id);
    }else{
        copyCart[index].quantity-=1;
    }
    console.log(copyCart);
    this.setState({
        cart: copyCart
    })
  }

  handleToggleView = () => {
    this.setState({ cardView: !this.state.cardView });
  };

  render() {
    return (
      <div className="App">
        <section className="products">
          <h1>Products</h1>
          <button onClick={this.handleToggleView}>Toggle View</button>
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
              (totalPrice, product) => (totalPrice += product.price * product.quantity),0
            )}
          </h2>

          <div className="inputs">
            <input placeholder="address" value={this.state.address} onChange={this.handleAddressInput} />
            <input placeholder="credit card number" value={this.state.creditCard} onChange={this.handleCreditCardInput} />
          </div>

          <button onClick={this.checkout}>Checkout</button>

          {this.state.cart
            .map(cartItem =>( 
              <div key={cartItem.id} className="product">
                  <img src={cartItem.imageUrl}/>
                  <div className="product-info">
                    <h4>{cartItem.title}</h4>
                    <p>{cartItem.description}</p>
                    <p>{cartItem.price}</p>
                    <p>{cartItem.quantity}</p>
                    <button onClick={() => this.deleteFromCart(cartItem.id)}> Remove from Cart </button>
                  </div>
              </div>
            ))
          }
        </section>
      </div>
    );
  }
}