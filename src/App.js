import React, { Component } from 'react';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            cart: [],
            houses: 
            [
                {
                    id: 1,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'House & Lot',
                    price: 100,
                    description: 'With furnitures inside',
                }
            ],
            cars: 
            [
                {
                    id: 2,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'Red Car',
                    price: 90,
                    description: 'With free 1 gallon of gas',
                }
            ],
            humans: 
            [
                {
                    id: 3,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'Wife',
                    price: 10,
                    description: 'Have 4 babies',
                }
            ],
        };
    }

    addToCart(product){
        this.setState({
            cart: [...this.state.cart, product]
        })
    }

    render(){
        return(
            <div className="App">
            <div className="column">
              <section className="products">
                <h1>Products</h1>
                <h2>Houses</h2>
                {
                    this.state.houses
                        .map(p =>( 
                            <div key={p.id} className="product">
                                <div className="App">
                                    <div className="column">
                                        <img src={p.imageUrl} alt="product" />
                                    </div>
                                    <div className="column">
                                        <h4>{p.title}</h4>
                                        <p>{p.description}</p>
                                        <p>{p.price}</p>
                                        <button onClick={() => this.addToCart(p)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                }

                <h2>Cars</h2>
                {
                    this.state.cars
                        .map(p =>( 
                            <div key={p.id} className="product">
                                <div className="App">
                                    <div className="column">
                                        <img src={p.imageUrl} alt="product" />
                                    </div>
                                    <div className="column">
                                        <h4>{p.title}</h4>
                                        <p>{p.description}</p>
                                        <p>{p.price}</p>
                                        <button onClick={() => this.addToCart(p)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                }

                <h2>Humans</h2>
                {
                    this.state.humans
                        .map(p =>( 
                            <div key={p.id} className="product">
                                <div className="App">
                                    <div className="column">
                                        <img src={p.imageUrl} alt="product" />
                                    </div>
                                    <div className="column">
                                        <h4>{p.title}</h4>
                                        <p>{p.description}</p>
                                        <p>{p.price}</p>
                                        <button onClick={() => this.addToCart(p)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                }
              </section>
            </div>
                
              <div className="column bg-black">
                <section className="cart">
                    <h1>Cart</h1>
                    {
                    this.state.cart
                        .map(cartItem =>( 
                            <div key={cartItem.id} className="product">
                                <div className="App">
                                    <div className="column">
                                        <img src={cartItem.imageUrl} alt="product" />
                                    </div>
                                    <div className="column">
                                        <h4>{cartItem.title}</h4>
                                        <p>{cartItem.description}</p>
                                        <p>{cartItem.price}</p>
                                        <button onClick={() => this.addToCart(cartItem)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                }
                </section>
              </div>
            </div>
          )
    }
}