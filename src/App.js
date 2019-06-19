import React, { Component } from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            coins: [
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
            cart: [],
            others: [
                {
                    id: 5,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'LTC - Litecoin',
                    price: 137.40,
                    description: 'LITE'
                },
                {
                    id: 6,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'EOS',
                    price: 6.90,
                    description: 'Same name with title....'
                }
            ],
            address: "",
            creditCard: ""
        };
    }

    addToCart(item){
        this.setState(
            {
                cart: [...this.state.cart, item]
            }
        )
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

    render(){
        return(
            <div className="App">
                <section className="products">
                    <h1>Products</h1>
                    <h2>Coins</h2>
                    {
                        this.state.coins.map(
                            item => (
                                <div key={item.id} className="product">
                                    <img src={item.imageUrl} />
                                    <div className="product-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <p>{item.price}</p>
                                        <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                                    </div>
                                </div>
                            )
                        )
                    }
                    <h3>Other Coins</h3>
                    {
                        this.state.others.map(
                            item => (
                                <div key={item.id} className="product">
                                    <img src={item.imageUrl} />
                                    <div className="product-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <p>{item.price}</p>
                                        <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                                    </div>
                                </div>
                            )
                        )
                    }
                </section>
                <section className="cart">
                    <h1>Cart</h1>
                    <h2>Total: $
                    {
                        this.state.cart.reduce(
                            (totalPrice, product) => (totalPrice += product.price),0
                        )
                    }
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
                    {
                        this.state.cart.map(
                            item => (
                                <div key={item.id} className="product">
                                    <img src={item.imageUrl} />
                                    <div className="product-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            )
                        )
                    }
                </section>
            </div>
        )
    }
}

export default App;