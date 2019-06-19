import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			cart: [],
			address: '',
			creditCard: '',
			cardView: true,
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
				}
			]
		}
	};

	addToCart(item) {
		let cartItem = this.state.cart.map(product => Object.assign({}, product));
		let i = this.state.cart.findIndex(product => product.id === item.id);

		
		if(i === -1){
			item = Object.assign({}, item, {quantity: 1});
			this.setState({
				cart: [...this.state.cart, item]
			});
		}
		else {
			cartItem[i].quantity++;
			this.setState({ cart: cartItem });
		}
	}

	deleteFromCart(id) {
		let cartItem = this.state.cart.map(product => Object.assign({}, product));
		let i = this.state.cart.findIndex(product => product.id === id);

		
		if(cartItem[i].quantity === 1){
			cartItem.splice(i, 1);
		}
		else if(cartItem[i].quantity > 1) {
			cartItem[i].quantity--;
		}

		this.setState({
			cart: cartItem
		});
	}

	checkout = () => {
	// checkout() {
		// this.setState({ cart: [] });
		if(this.state.address.length > 0 && this.state.creditCard.length > 0){
			this.setState({ cart: [] });
			alert('Purchase is complete!');
		}
		else {
			alert('Please fill out the required fields.');
		}
	};	

	handleAddressInput = e => {
		this.setState({ address: e.target.value });
	};

	handleCreditCardInput = e => {
		this.setState({ creditCard: e.target.value });
	}


	render() {
		return (
			<div className="App">
				<section className="products">
					<h1>Products</h1>
					<h2>Hats</h2>
					{this.state.hats.map(item => (
						<div key={item.id} className="product">
							<div className="product-info">
								<img src={item.imageUrl} />
								<h4>{item.title}</h4>
								<p>Qty: {item.quantity}</p>
								<p>{item.description}</p>
								<p>{item.price}</p>
								<button onClick={() => this.addToCart(item)}>Add to Cart</button>
							</div>
						</div>
					))}

					<h2>Beach Gear</h2>
					{this.state.beachGear.map(item => (
						<div key={item.id} className="product">
							<img src={item.imageUrl} />
							<div className="product-info">
								<h4>{item.title}</h4>
								<p>Qty: {item.quantity}</p>
								<p>{item.description}</p>
								<p>{item.price}</p>
								<button onClick={() => this.addToCart(item)}>Add to Cart</button>
							</div>
						</div>
					))}
				</section>
				
				<section className="cart">
					<h1>Cart</h1>
					<h2>
						Total $
						{this.state.cart.reduce(
							(totalPrice, product) => (totalPrice += (product.price * product.quantity)), 0
						)}
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
								<p>Qty: {item.quantity}</p>
								<p>{item.description}</p>
								<p>{item.price}</p>

								<button onClick={() => this.deleteFromCart(item.id)}> Delete from Cart </button>

							</div>
						</div>
					))}
				</section>			
			</div>
		)
	}

}