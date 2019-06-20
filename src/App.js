import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            cart: [],
            products: [],
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
        }
    }

    addToCart(item) {
        this.setState({
            cart: [...this.state.cart, item]
        })
    }

    render() {
        return (
            <div className="App">
                <section className="products">
                    <h1>Products</h1>
                        {this.state.products.map(item => (
                            <div key={item.id} className="product">
                                <div>
                                    <img src={item.imageUrl} alt="img"/>
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                    <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                                </div>
                            </div>
                        ))}

                    <h1>Hats</h1>
                        {this.state.hats.map(item => (
                            <div key={item.id} className="product">
                                <img src={item.imageUrl}  alt="img"/>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                        
                    <h1>Hats</h1>
                        {this.state.hats.map(item => (
                            <div key={item.id} className="product">
                                <img src={item.imageUrl}   alt="img"/>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                </section>
                

                <section className="cart">
                    <h1>Cart</h1>
                        {this.state.cart.map(item => (
                            <div key={item.id} className="product">
                                <img src={item.imageUrl} />
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                </section>
            </div>
        );
    }
}

export default App;

