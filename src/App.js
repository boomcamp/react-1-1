import React, { Component } from 'react';
import './App.css';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            handguns: [
                {
                  id: 1,
                  imageUrl: 'https://source.unsplash.com/random/150x150',
                  title: 'USP-1S',
                  price: 12.99,
                  description: 'Less bullets more damage.',
                  quantity: 1
                },
                {
                  id: 2,
                  imageUrl: 'https://source.unsplash.com/random/150x150',
                  title: 'TEC-9',
                  price: 15.45,
                  description: 'More bullets more damage less accurate.',
                  quantity: 1
                },
                {
                  id: 3,
                  imageUrl: 'https://source.unsplash.com/random/150x150',
                  title: 'GLOCK',
                  price: 11.00,
                  description: 'More bullets less damage.',
                  quantity: 1
                }
            ],
            rifles: [
                {
                  id: 4,
                  imageUrl: 'https://source.unsplash.com/random/150x150',
                  title: 'AWP',
                  price: 35.45,
                  description: 'Snipper ripple.',
                  quantity: 1
                },
                {
                  id: 5,
                  imageUrl: 'https://source.unsplash.com/random/150x150',
                  title: 'M4-A1',
                  price: 25.50,
                  description: 'Less bullets more damage.',
                  quantity: 1
                }
            ],
            cart: [],
            address: "",
            creditCard: "",
            cardView: true,
            classNew: "product",
        }
        this.checkout = this.checkout.bind(this);
        this.toggleView = this.toggleView.bind(this);
    }

    addToCart(item) {
        let cartTemp = this.state.cart.map(e => Object.assign({}, e));
        let index = this.state.cart.findIndex(e => e.id === item.id);
        console.log(index);
        console.log(item);
        if (index === -1) {
            item = Object.assign({}, item, { quantity: 1 });
            this.setState({ cart: [...this.state.cart, item] });
        } else {
            cartTemp[index].quantity++;
            this.setState({ cart: cartTemp });
        }
    };

    deleteFromCart(item) {
        let cartTemp = this.state.cart.map(e => Object.assign({}, e));
        let index = this.state.cart.findIndex(e => e.id === item);
        console.log(index);
        console.log(item);
        if (cartTemp[index].quantity === 1) {
            cartTemp.splice(index, 1);
        } else if (cartTemp[index].quantity > 1) {
            cartTemp[index].quantity--;
        }
        this.setState({ cart: cartTemp });
    }

    checkout() {
        if (this.state.address.length > 0 && this.state.creditCard.length > 0) {
            this.setState({ cart: [] });
            alert('Purchase is complete!');
          } else {
            alert('Please fill out the required fields.');
          }
    };

    handleAddress(e) {
        this.setState({ address: e });
    };
      
    handleCredit(e) {
        this.setState({ creditCard: e });
    };

    toggleView() {
        console.log(this.state.cardView);
        if(this.state.cardView) {
            this.setState({ 
                cardView: false,
                classNew: "product-alt"
            });
        } else {
            this.setState({ 
                cardView: true,
                classNew: "product"
            });
        }  
    }

    

    render() {
        console.log(this.state.address)
        return(
            <div className="App">
                <section className="products">
                    <h1>Products</h1>
                    <button onClick={this.toggleView}>Toggle View</button>
                    <h2>Handguns</h2>
                    {this.state.handguns.map(x => (
                        <div key={x.id} className={this.state.classNew}>
                            <img src={x.imageUrl} />
                            <div className="p-info">
                                <h4>{x.title}</h4>
                                <p>{x.description}</p>
                                <p>{x.price}</p>
                                <button onClick={() => this.addToCart(x)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                    <h2>Rifles</h2>
                    {this.state.rifles.map(x => (
                        <div key={x.id} className="product">
                            <img src={x.imageUrl} />
                            <div className="p-info">
                                <h4>{x.title}</h4>
                                <p>{x.description}</p>
                                <p>{x.price}</p>
                                <button onClick={() => this.addToCart(x)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="cart">
                    <h1>Cart</h1>
                    <h2>Total: $ 
                        {this.state.cart.reduce(
                            (totalPrice, product) => (totalPrice += product.price * product.quantity), 
                            0
                        ).toFixed(2)}
                    </h2>
                    <div className="input-class">
                        <input 
                            placeholder="Address"
                            value={this.state.address}
                            onChange={e => this.handleAddress(e.target.value)}
                        />
                        <input 
                            placeholder="Credit Card Number"
                            value={this.state.creditCard}
                            onChange={e => this.handleCredit(e.target.value)}
                        />
                    </div>
                    <button className="check-btn" onClick={this.checkout}>Checkout</button>
                    {this.state.cart.map(e => (
                        <div key={e.id} className="product">
                            <img src={e.imageUrl} />
                            <div className="p-info">
                                <h4>{e.title}</h4>
                                <p>Quantity: {e.quantity}</p>
                                <p>{e.description}</p>
                                <p>{e.price}</p>
                                <button onClick={() => this.deleteFromCart(e.id)}>Remove from Cart</button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        )
    }
}