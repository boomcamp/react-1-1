import React, { Component } from 'react';

import './App.css';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            gaming: [
                {
                    id: 1,
                    title: 'Mouse',
                    description: 'very nice mouse, good for gaming. you will become pro',
                    price: 399,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    q: 0,
                },
                {
                    id: 2,
                    title: 'keyboard',
                    description: 'very nice keyboard, good for gaming. you will become pro',
                    price: 399,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    q: 0,
                }
            ],
            music: [
                {
                    id: 3,
                    title: 'Kurtz Gitar',
                    description: 'amazing guitar owned by kurt',
                    price: 500,
                    imageUrl: 'https://via.placeholder.com/150x150',
                    q: 0,   
                }
            ],
            address: " ",
            creditCard: " ",
            toggle: false,
        }
        this.handleToggleView = this.handleToggleView.bind(this);
        this.checkOut = this.checkOut.bind(this);
        this.handleAdressInput = this.handleAdressInput.bind(this)
        this.handleCreditCardInput = this.handleCreditCardInput.bind(this)
    }

    addToCart(item){
        let item2 = this.state.cart.map(i=> Object.assign({}, i));
        let ind = this.state.cart.findIndex(prod => prod.id === item.id);

        if (ind === -1){
            item = Object.assign({}, item, {q:1});
            this.setState({ cart : [...this.state.cart,item]});
        } else {
            item2[ind].q++;
            this.setState({cart: item2});
        }
    }
    checkOut(){
        if ((this.state.cart != '')&&(this.state.creditCard != ' ') && (this.state.address != ' ')){
            this.setState({
                cart: []
            })
            alert('purchase was a success!');
        } else {
            alert('fill out details or check if cart is empty');
        }
    }

    removeProduct(id){
        let cartCopy = this.state.cart.map(product => Object.assign({}, product));
        let index = this.state.cart.findIndex(product => product.id === id);
    
        if (cartCopy[index].q === 1) {
          cartCopy.splice(index, 1);
        } else if (cartCopy[index].q > 1) {
          cartCopy[index].q--;
        }
        this.setState({ cart: cartCopy });
    }

    handleAdressInput(e){
        this.setState({address: e.target.value})
    }
    handleCreditCardInput(e){
        this.setState({creditCard: e.target.value })
    }
    handleToggleView(){
        this.setState({toggle: !this.state.toggle})
        if (this.state.toggle == true){
            
        }
    }
    render(){
let product = ["products"];
if (this.state.toggle){
    product.push('card');
}
        return (
            <div className="App">
                <section className={product.join(' ')}>
                    <h1>Products</h1>
                    <button className="btn" onClick={this.handleToggleView}>Toggle View</button>
                    <h2>Gaming</h2>
                 {
                     this.state.gaming.map(item => (
                        <div key={item.id} className="product">
                            <img src={item.imageUrl} />
                            <div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <button onClick={()=> this.addToCart(item)}>Add to Cart</button>
                            </div>
                        </div>   
                     ))
                 }
                 <h2>Music</h2>
                 {
                     this.state.music.map(item => (
                        <div key={item.id} className="product">
                            <img src={item.imageUrl} />
                            <div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <button onClick={()=> this.addToCart(item)}>Add to Cart</button>
                            </div>
                        </div>   
                     ))
                 }
                </section>

                <section className="cart">
                    <h1>Cart</h1>
                    {
                        this.state.cart.map(item => (
                        <div key={item.id} className="product">
                            <img src={item.imageUrl} />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <p>{item.q}</p>
                            <button onClick={()=> this.removeProduct(item.id)}>remove product</button>
                          </div> 
                        ))
                    }
                    <h2>Total $
                    {
                        this.state.cart.reduce((totalPrice, product ) => (totalPrice += product.price), 0)
                    }
                    </h2>
                    <h2>Quantity: 
                    {
                    
                    }
                    </h2>
                    <div>
                        <input placeholder="Address" value={this.state.address} onChange={this.handleAdressInput}></input>
                        <input placeholder="credit card" value={this.state.creditCard} onChange={this.handleCreditCardInput}></input>
                    </div>
                    <button className="btn" onClick={this.checkOut}>Checkout</button>
                </section>
            </div>
        )
        
    }
}