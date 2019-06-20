import React, { Component } from 'react';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cardView: true,
            cart: [],
            shoes: [
                {
                    id: 1,
                    title: "Men Cowhide Loafers Black Round Toe Lace Up",
                    description: 'A pair of round-toe grey sneakers, has regular styling, lace-up detail, synthetic upper, cushioned footbed.',
                    price: 20.34,
                    imageUrl: 'https://images.voonik.com/71845882/casual-shoes-for-men-sneakers-for-men-designer-shoe-original.jpg?1527147786',
                    quantity: 0
                }, 
                {
                    id: 2,
                    title: "Lars Smart Slip",
                    description: "This product is made from PU material from the outside and is finished in attractive colors.  These stylish penny loafers can be worn anywhere from formal to casual.",
                    price: 13.32,
                    imageUrl: 'http://www.unze.com.pk/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/G/S/GS6034_1.jpg',
                    quantity: 0
                }, 
                {
                    id: 3,
                    title: "Men Red velvet Loafers Shoes",
                    description: 'Headgear commonly used by fishermen. Increases fishing skill marginally.',
                    price: 15.24,
                    imageUrl: 'https://rukminim1.flixcart.com/image/714/857/jfea93k0/shoe/f/h/f/zws508red-11-ziesha-red-original-imaencfgygqfcmwg.jpeg?q=50',
                    quantity: 0
                }
            ],
            beachGear: [
              {
                id: 4,
                title: "Tent",
                description: "Portable shelter.",
                price: 32.99,
                imageUrl: 'https://via.placeholder.com/150x150',
              }
            ],
            address: "",
            creditCard: ""
        };
    }
    
    addToCart(item) {

        let cartCopy = this.state.cart.map(product => Object.assign({}, product));
        let idx = this.state.cart.findIndex(product => product.id === item.id);
    
        if (idx === -1) {
            item = Object.assign({}, item, { quantity: 1 });
            this.setState({ 
              cart: [...this.state.cart, item] 
            });
        } else {
            cartCopy[idx].quantity++;
            this.setState({ cart: cartCopy });
        }
    };

    deleteFromCart(id) {
        let cartCopy = this.state.cart.map(product => Object.assign({}, product));
        let idx = this.state.cart.findIndex(product => product.id === id);

        if(cartCopy[idx].quantity === 1) {
            cartCopy.splice(idx, 1);
        } else if (cartCopy[idx].quantity > 1) {
            cartCopy[idx].quantity--;
        }
        this.setState({ cart: cartCopy });
    }

    checkout = () => {
        if (this.state.address.length > 0 && this.state.creditCard.length > 0) {
            this.setState({ cart: [] });
            alert('Purchase is complete');
        } else {
            alert('Please fill out the required fields.');
        }
    };

    handleAddressInput = e => {
        this.setState({ address: e.target.value });
    }

    handleCreditCardInput = e => {
        this.setState({ creditCard: e.target.value });
    }

    handleToggleView = () => {
        this.setState({ cardView: !this.state.cardView});
    }

    render() {
        return(
            <div className="App">
                <section className="products">
                    <h1>Products</h1>
                    <button onClick={this.handleToggleView}>Toggle View</button>
                    <h2>Shoes</h2>
                    {this.state.shoes.map(item => (
                        <div key={item.id} className={this.state.cardView ? "product" : "product-list"}>
                            <img src={item.imageUrl} alt={item.title}/>
                            <div className="product-info">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}

                    <h2>BeachGears</h2>
                    {this.state.beachGear.map(item => (
                        <div key={item.id} className={this.state.cardView ? "product" : "product-list"}>
                            <img src={item.imageUrl} alt={item.title}/>
                            <div className="product-info">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="cart">
                    <h1>Cart</h1>
                    <h2>Total $
                        {this.state.cart.reduce(
                            (totalPrice, product) => (totalPrice += product.price * product.quantity),
                            0
                            )
                            .toFixed(2)
                        }
                    </h2>
                    <div>
                        <input 
                            placeholder="address"
                            value = {this.state.address}
                            onChange = {this.handleAddressInput}
                        />
                        <input 
                            placeholder="credit card number"
                            value = {this.state.creditCard}
                            onChange = {this.handleCreditCardInput}
                        />
                    </div>

                    <button onClick={this.checkout}>Checkout</button>

                    {this.state.cart.map(item => (
                        <div key={item.id} className="product">
                            <img src={item.imageUrl} alt={item.title}/>
                            <div className="product-info">
                                <h4>{item.title}</h4>
                                <p>Quantity: {item.quantity}</p>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <button onClick= {() => this.deleteFromCart(item.id)}>Remove from cart</button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}