import React, {Component} from 'react';
import './App.css';

export default class App extends Component{
    constructor(){
        super();

        this.state = {

            address: '',
            creditCard: '',
            cardView: true,

            cart: [],

            shirts: [{
                id:1, imageUrl:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550688238-theory-1550688225.jpg", title:"Shirt", price:45, description:"Gray, thin and very affordable", quantity: 0
                },
                {
                id:2, imageUrl:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550688238-theory-1550688225.jpg", title:"Shirt", price:45, description:"Gray, thin and very affordable", quantity: 0
                }],

            pants: [{
                id:3, imageUrl:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550688238-theory-1550688225.jpg", title:"Shirt", price:45, description:"Gray, thin and very affordable", quantity: 0
                }]
        }

        this.addToCart = this.addToCart.bind(this);
        this.checkout = this.checkout.bind(this);
        this.handleAddressInput = this.handleAddressInput.bind(this);
        this.handleCreditCardInput = this.handleCreditCardInput.bind(this);
    }

    addToCart(item) {
        let cartCopy = this.state.cart.map(product => Object.assign({}, product));
        let index = this.state.cart.findIndex(product => product.id === item.id);
    
        if (index === -1) {
          item = Object.assign({}, item, { quantity: 1});
          this.setState({ cart: [...this.state.cart, item] });
        } else {
          cartCopy[index].quantity++;
          this.setState({ cart: cartCopy });
        }
      }

    checkout(){
        if(this.state.address && this.state.creditCard){
            this.setState({ cart: [] });
            alert("Purchase is complete!");
            this.setState({ address: ''});
            this.setState({ creditCard: ''});
        }
        else{
            alert("Please fill out the required fields!");
        }
        
    }

    handleAddressInput(event){
        this.setState({address: event});
    }

    handleCreditCardInput(event){
        this.setState({creditCard: event})
    }

    deleteFromCart(item){
        let cartCopy = this.state.cart.map(product => Object.assign({}, product));
        let index = this.state.cart.findIndex(product => product.id === item.id);
    
        if (this.state.cart[index].quantity > 1) {
            cartCopy[index].quantity--;
            this.setState({ cart: cartCopy });
        } else if(this.state.cart[index].quantity === 1) {
          cartCopy.splice(index, 1);
          this.setState({ cart: cartCopy });
        }
    }

    handleToggleView(){
        if(this.state.cardView === true){
            this.setState({ cardView: false});
        }
        else{
            this.setState({ cardView: true});
        }
        console.log(this.state.cardView);
    }

    render(){
        return (
            <div className="App">
                <section className="products">
                    <button onClick={() => this.handleToggleView()}>Toggle View</button>
                <h1> Products</h1>
                <h2>Shirts</h2>
                {
                    this.state.shirts.map(product => (
                        <div key={product.id} className={this.state.cardView ? "product" : "product-list"}>
                            <img src={product.imageUrl} alt=""/>
                            <div className="product-info">
                                <h4>{product.title}</h4>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <button onClick={() => this.addToCart(product)}> Add to cart </button>
                            </div>
                            
                        </div>
                    ))
                    
                }

                <h2>Pants</h2>
                {
                    this.state.pants.map(product => (
                        <div key={product.id} className={this.state.cardView ? "product" : "product-list"}>
                            <img src={product.imageUrl} alt=""/>
                            <div className="product-info">
                                <h4>{product.title}</h4>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <button onClick={() => this.addToCart(product)}> Add to cart </button>
                            </div>
                            
                        </div>
                    ))
                    
                }
                </section>

                <section className="cart">
                <h1> Cart </h1>
                <h2> 
                    Total $ {this.state.cart.reduce((totalPrice, product) => 
                    (totalPrice += product.price * product.quantity), 0 )}
                </h2>
                <div className="inputs">
                    <input type="text" placeholder="Address" value={this.state.address} onChange={e => this.handleAddressInput(e.target.value)}></input>
                    <input type="text" placeholder="Credit Card" value={this.state.creditCard} onChange={e => this.handleCreditCardInput(e.target.value)}></input>
                </div>
                <button onClick={this.checkout}>Checkout</button>

                {
                    this.state.cart.map(item => (
                        <div key={item.id} className="product">
                            <img src={item.imageUrl} alt=""/>
                            <div className="product-info">
                                <h1>{item.quantity}</h1>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <button onClick={() => this.deleteFromCart(item)}>Remove from Cart</button>
                            </div>
                            
                        </div>
                    ))
                }
                </section>
            </div>
            
        )
    }
}