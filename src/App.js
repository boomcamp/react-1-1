import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor () {
        super ();
        this.state = {
            cart: [],
            cardView: true,
            address: "",
            creditCard: "",
            hats: [
                {
                id: 1,
                title: "Fisherman's Hat",
                description:
                    'Headgear commonly used by fishermen. Increases fishing skill marginally.',
                price: 12.99,
                imageUrl: 'https://via.placeholder.com/150x150',
                quantity: 0
                },
                {
                id: 2,
                title: 'Metal Hat',
                description: 'Uncomfortable, but sturdy.',
                price: 8.99,
                imageUrl: 'https://via.placeholder.com/150x150',
                quantity: 0
                },
            ],
            beachGear: [
                {
                id: 3,
                title: 'Tent',
                description: 'Portable shelter.',
                price: 32.99,
                imageUrl: 'https://via.placeholder.com/150x150',
                quantity: 0
                },
            ],
        };
    }

    addToCart(item) {
         let updatingqtty = this.state.cart.map(product => Object.assign({}, product));
         let index = this.state.cart.findIndex(product => product.id === item.id);
         if(index != -1){
            updatingqtty[index].quantity++;
            this.setState(
            {
                  cart: updatingqtty
            });
         } else{
            item = Object.assign({}, item, { quantity: 1 });
            this.setState({ cart: [...this.state.cart, item] });
         }
        
    }

    checkout = () => {
        if (this.state.address.length > 0 && this.state.creditCard.length > 0) {
            this.setState({ cart: [] });
            alert('Purchase is complete!');
        } else {
            alert('Please fill out the required fields.');
        }
    };
    
    handleAddressInput = e => {
        this.setState({ address: e.target.value });
    };
      
      handleCreditCardInput = e => {
        this.setState({ creditCard: e.target.value });
    };

    removeCart = (id) =>{
        let deletinggqtty = this.state.cart.map(product => Object.assign({}, product));
        let index = this.state.cart.findIndex(product => product.id === id);
        
        if(deletinggqtty[index].quantity === 1 ){
            deletinggqtty.splice(index, 1);
            this.setState({ cart: deletinggqtty });
        } else if(deletinggqtty[index].quantity > 1 ){
            deletinggqtty[index].quantity--;
            this.setState({ cart: deletinggqtty });
           
        }
    };

    handleToggleView = () => {
        this.setState({ cardView: !this.state.cardView });
        console.log(this.state.cardView);
    };


    render () {
        return (
            <div className="App">
                <section className="products">
                    <h1>Products</h1>
                    <div className="div">
                        <button onClick={this.handleToggleView}>Toggle View</button>
                    </div>
                    
                    <h2>Hats</h2>
                    {this.state.hats.map(item => (
                        <div key={item.id} className={this.state.cardView ? "product": "product-list"}>
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

                    <h2>Beach Gear</h2>
                    {this.state.beachGear.map(item => (
                        <div key={item.id} className={this.state.cardView ? "product": "product-list"}>
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
                    <h2>
                        Total: $
                        {this.state.cart.reduce(
                        (totalPrice, product) => (totalPrice += product.price * product.quantity),
                        0
                        ).toFixed(2)}
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

                    {this.state.cart.map(item => (
                        <div key={item.id} className="product">
                        <img src={item.imageUrl} />
                        <div className="product-info">
                        <h4>{item.title}</h4>
                        <p>quantity: {item.quantity}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <button onClick={() => this.removeCart(item.id)}>Remove from Cart</button>
                        </div>
                        </div>
                        )
                        )
                    }
                </section>
            </div>
        );
    }

}

export default App;