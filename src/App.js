import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            products: [{
                id: 1,
                imageUrl: 'https://via.placeholder.com/150x150',
                title: 'fancy hat',
                price: 12.99,
                description: 
                    "Headgear commonly used by fishermen. Increases fishing skill marginally.",
                quantity: 0
                },
            {
                id: 2,
                imageUrl: 'https://via.placeholder.com/150x150',
                title: 'fancy car',
                price: 8.99,
                description: 
                    "Uncomfortable, but sturdy.",
                quantity: 0
                },
            ],
            beachGear: [{
                id: 3,
                imageUrl: 'https://via.placeholder.com/150x150',
                title: 'simple rock',
                price: 32.99,
                description: 
                    "Portable shelter",
                quantity: 0
                },
          ],
          cart: [],
        };
    }

    addToCart(item) {
        let cartCopy = this.state.cart.map(product => Object.assign({}, product));
        let index = this.state.cart.findIndex(product => product.id === item.id);
    
        if (index === -1) {
          item = Object.assign({}, 
          item, { quantity: 1 });
          this.setState({ cart: [...this.state.cart, item] });
         } else {
          cartCopy[index].quantity++;
          this.setState({ cart: cartCopy });
        }
      }

    deleteFromCart(id) {
        let cartCopy = this.state.cart.map(product => Object.assign({}, product));
        let index = this.state.cart.findIndex(product => product.id === id);
    
        if (cartCopy[index].quantity === 1) {
          cartCopy.splice(index, 1);
        } else if (cartCopy[index].quantity > 1) {
          cartCopy[index].quantity--;
        }
    
        this.setState({ cart: cartCopy });
      }

    checkout = () => {
        this.setState({ cart: [] });
        alert('Purchase is complete!');
      };

      handleAddressInput = e => {
        this.setState({ address: e.target.value });
      };
    
      handleCreditCardInput = e => {
        this.setState({ creditCard: e.target.value });
      };
    
      handleToggleView = () => {
        this.setState({ cardView: !this.state.cardView });
      };

        render() {
            return (
                <div className="App">
                    <section className="products">
                        <h1>Products</h1>
                        <center><button onClick={this.handleToggleView}>Toggle View</button></center>
                        <h2>Hats</h2>
                        {this.state.products.map(item => (
                            <div key={item.id} className= {this.state.cardView ? "product" : "product-list"}>
                                <img src = {item.imageUrl} />
                                <div className="product-detail">
                                    <h1> {item.title} </h1>
                                    <span> {item.description} </span>
                                    <span> {item.price} </span>
                                    <button onClick={() => this.addToCart(item)}> Add to Cart </button>
                                </div>
                            </div>


                        ))}
                        <h2>Beach Gear</h2>
                        {this.state.beachGear.map(item => (
                            <div key={item.id} className={this.state.cardView ? "product" : "product-list"}>
                            <img src={item.imageUrl} />
                            <div className="product-detail">
                                <h4>{item.title}</h4>
                                <span>{item.description}</span>
                                <span>{item.price}</span>
                                <button onClick={() => this.addToCart(item)}>
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        ))}
                    </section>
                    <section className="cart">
                    <h1>Cart</h1>
                    <div className="Header-Checkout">
                        <h2>
                            Total: $
                            {this.state.cart
                                .reduce(
                                 (totalPrice, product) => (totalPrice += product.price * product.quantity),
                                0
                                )
                                .toFixed(2)}
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
              <button className="Checkout" onClick={this.checkout}>Checkout</button>
          </div>
                      
                    </div>
                        {this.state.cart.map(item => (
                            <div key={item.id} className="product-cart">
                            <img src={item.imageUrl} />
                            <div className="product-detail">
                                <div class="product-title">
                                    <h1>{item.title}</h1>
                                    <button  onClick={() => this.deleteFromCart(item.id)}>
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <p>Quantity: {item.quantity}</p>
                                <span>{item.description}</span>
                                <span>{item.price}</span>
                            </div>
                            </div>
                        ))}
                    </section>
                </div>  
            );
        }
    }
