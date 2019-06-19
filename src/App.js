import React, { Component } from 'react';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            address: '',
            creditCard: '',
            cart: [],
            houses: 
            [
                {
                    id: 1,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    title: 'House & Lot',
                    price: 100,
                    quantity: 0,
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
                    quantity: 0,
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
                    quantity: 0,
                    description: 'Have 4 babies',
                }
            ],
        };
        this.checkout = this.checkout.bind(this);
        this.handleAddressInput = this.handleAddressInput.bind(this);
        this.handleCreditCardInput = this.handleCreditCardInput.bind(this);
    }

    addToCart(product){
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
    checkout(){
        if(this.state.address !== '' || this.state.creditCard !== ''){ 
            this.setState({
                cart: [],
            })
            alert('Purchase is complete!');
        }else{
            alert('Please Insert required fields!');
        }
    }
    handleAddressInput(e){
        this.setState({
            address: e.target.value,
        })
    }
    handleCreditCardInput(e){
        this.setState({
            creditCard: e.target.value,
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
                                        <p>{p.quantity}</p>
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
                    <h2>Total $
                    {this.state.cart.reduce(
                        (totalPrice, product) => (totalPrice += product.price * product.quantity),0
                    )}
                    </h2>
                    <div className="App">
                        <div className="column">
                            <input type="text" placeholder="address" onChange={this.handleAddressInput} value={this.state.address}/>
                        </div>
                        <div className="column">
                            <input type="text" placeholder="credit card number" onChange={this.handleCreditCardInput} value={this.state.creditCard}/>
                        </div>
                    </div>
                    <button onClick={this.checkout}> Checkout </button>

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
                                        <p>{cartItem.quantity}</p>
                                        <p>{cartItem.price}</p>
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