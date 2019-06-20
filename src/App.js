import React, { Component } from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            coins: [
                {
                    id: 1,
                    imageUrl: 'http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png',
                    title: 'BTC - Bitcoin',
                    price: 9166.00,
                    description: 'A PRICY BITCOIN',
                    quantity: 1
                },
                {
                    id: 2,
                    imageUrl: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png',
                    title: 'ETH - Etherium',
                    price: 268.66,
                    description: 'ETHER',
                    quantity: 1
                },
                {
                    id: 3,
                    imageUrl: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/XRP-512.png',
                    title: 'XRP - Ripple',
                    price: 0.44,
                    description: 'IT IS RIPPLE',
                    quantity: 1
                },
                {
                    id: 4,
                    imageUrl: 'http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png',
                    title: 'BNB - Binance Coin',
                    price: 35.34,
                    description: 'FROM BINANCE',
                    quantity: 1
                }
            ],
            cart: [],
            others: [
                {
                    id: 5,
                    imageUrl: 'https://cdn0.iconfinder.com/data/icons/business-finance-line-art-1/128/currency-litecoin-ol-512.png',
                    title: 'LTC - Litecoin',
                    price: 137.40,
                    description: 'LITE',
                    quantity: 0
                },
                {
                    id: 6,
                    imageUrl: 'https://cdn2.iconfinder.com/data/icons/cryptocurrency-2-line/128/eos_EOS_coin_cryptocurrency_digital_crypto_currency-512.png',
                    title: 'EOS',
                    price: 6.90,
                    description: 'Same name with title....',
                    quantity: 0
                }
            ],
            address: "",
            creditCard: "",
            cardView: true
        };
        // didnt realize i put this on the addToCart
        this.checkout = this.checkout.bind(this);
        this.handleAddressInput = this.handleAddressInput.bind(this);
        this.handleCreditCardInput = this.handleCreditCardInput.bind(this);
        this.handleToggleView = this.handleToggleView.bind(this);
    }

    addToCart(product){
        let cpyCart = [...this.state.cart];
        let index = this.state.cart.findIndex(p => p.id === product.id);
        if(index === -1){ 
            product = Object.assign({}, product, { quantity: 1 });
                this.setState({
                    cart: [...this.state.cart, product]
                })
        }else{
            cpyCart[index].quantity++;
            this.setState({
                cart: cpyCart,
            });
        }

    }

    removeFromCart(product){
        let cpyCart = [...this.state.cart];
        let index = this.state.cart.findIndex(p => p.id === product.id);

        if(cpyCart[index].quantity === 1){
            cpyCart = cpyCart.filter(cart => cart.id !== cpyCart[index].id);
        }else{
            cpyCart[index].quantity -= 1;
        }
        this.setState({
            cart: cpyCart
        });
    }

    checkout = () => {
        if (this.state.address !== '' && this.state.creditCard !== '') {
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

    handleToggleView(){
        if(this.state.cardView){
            this.setState({
                cardView: false
            });
        }else{
            this.setState({
                cardView: true
            });
        }
    } 

    render(){
        if(this.state.cardView){
            return(
                <div className="App">
                    <section className="products">
                        <button onClick={this.handleToggleView}>Toggle View</button>
                        <h1>Products</h1>
                        <h2>Coins</h2>
                        {
                            this.state.coins.map(
                                item => (
                                    <div key={item.id} className="product">
                                        <img src={item.imageUrl} />
                                        <div className="product-info">
                                            <h4>Name: {item.title}</h4>
                                            <p>Description: {item.description}</p>
                                            <p>Price: ${item.price}</p>
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
                                            <h4>Name: {item.title}</h4>
                                            <p>Description: {item.description}</p>
                                            <p>Price: ${item.price}</p>
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
                                (totalPrice, product) => (totalPrice += product.price * product.quantity),0
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
                                            <h4>Name: {item.title}</h4>
                                            <p>Description: {item.description}</p>
                                            <p>Price: ${item.price}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <button onClick={() => this.removeFromCart(item)}>Remove Item</button>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </section>
                </div>
            )
        }else{
            return(
                <div className="App">
                    <section className="products-reverse">
                        <button onClick={this.handleToggleView}>Toggle View</button>
                        <h1>Products</h1>
                        <h2>Coins</h2>
                        {
                            this.state.coins.map(
                                item => (
                                    <div key={item.id} className="product-reverse">
                                        <img src={item.imageUrl} />
                                        <div className="product-info">
                                            <h4>Name: {item.title}</h4>
                                            <p>Description: {item.description}</p>
                                            <p>Price: ${item.price}</p>
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
                                    <div key={item.id} className="product-reverse">
                                        <img src={item.imageUrl} />
                                        <div className="product-info">
                                            <h4>Name: {item.title}</h4>
                                            <p>Description: {item.description}</p>
                                            <p>Price: ${item.price}</p>
                                            <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </section>
                    <section className="cart-reverse">
                        <h1>Cart</h1>
                        <h2>Total: $
                        {
                            this.state.cart.reduce(
                                (totalPrice, product) => (totalPrice += product.price * product.quantity),0
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
                                    <div key={item.id} className="product-reverse">
                                        <img src={item.imageUrl} />
                                        <div className="product-info">
                                            <h4>Name: {item.title}</h4>
                                            <p>Description: {item.description}</p>
                                            <p>Price: ${item.price}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <button onClick={() => this.removeFromCart(item)}>Remove Item</button>
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
        
}

export default App;