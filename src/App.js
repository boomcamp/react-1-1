import React, { Component } from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            products: [
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
            cart: []
        };
    }

    addToCart(item){
        this.setState(
            {
                cart: [...this.state.cart, item]
            }
        )
    }

    render(){
        return(
            <div className="App">
                <section className="products">
                    <h1>Products</h1>
                    {
                        this.state.products.map(
                            item => (
                                <div key={item.id} className="product">
                                    <img src={item.imageUrl} />
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                    <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                                </div>
                            )
                        )
                    }
                </section>
                <section className="cart">
                    <h1>Cart</h1>
                    {
                        this.state.cart.map(
                            item => (
                                <div key={item.id} className="product">
                                    <img src={item.imageUrl} />
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
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