import React, { Component } from 'react'

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			address: '',
			creditCard: '',
			hats: [
				{
					id: 1,
					title: "Fisherman's Hat",
					description:
						"Headgear commonly used by fishermen. Increases fishing skill marginally.",
					price: 12.99,
					imageUrl: "https://via.placeholder.com/150x150",
					quantity: 0,
				},
				{
					id: 2,
					title: "Metal Hat",
					description: "Uncomfortable, but sturdy.",
					price: 8.99,
					imageUrl: "https://via.placeholder.com/150x150",
					quantity: 0,
				}
			],
			beachGear: [
				{
					id: 3,
					title: "Tent",
					description: "Portable shelter.",
					price: 32.99,
					imageUrl: "https://via.placeholder.com/150x150",
					quantity: 0,
				}
			],
			shirts: [],
			pants: [],
			cart: [],
		};
	}

	addToCart = (item) => {
		// if(this.state.cart.find(ite => ite.id === item.id)){
		// 	let id = this.state.cart.findIndex(ite => ite.id === item.id)
		// 	it.quantity += 1;
		// 	console.log(it)
		// 	this.setState({
		// 		cart : it
		// 	})
		// }
		// else{
		// 	item.quantity = 1;
		// 	console.log(item);
		// 	this.setState({
		// 		cart: this.state.cart.concat(item)
		// 	})
		// }
		let cartCopy = this.state.cart.map(product => Object.assign({}, product));
		console.log(cartCopy)
		let i = this.state.cart.findIndex(ite => ite.id === item.id)
		console.log(i);
		if(i === -1){
			item.quantity = 1;
			this.setState({
				cart: this.state.cart.concat(item)
			})
		}
		else{
			cartCopy[i].quantity++;
      		this.setState({ cart: cartCopy });
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

	handleAddressInput = (e) => {
		this.setState({address: e.target.value})
	}

	handleCreditCardInput = (e) => {
		this.setState({creditCard: e.target.value})
	}

	render(){
		return (
			<div className='App'>
				<section className='products'>
					<h1>Products</h1>
					<h2>Hats</h2>
					{this.state.hats.map(item => (
						<div key={item.id} className='product'>
							<img src={item.imageUrl} alt=''/>
							<h4>{item.title}</h4>
							<p>{item.description}</p>
							<p>{item.price}</p>
							<button onClick={() => this.addToCart(item)}>Add to Cart</button>
						</div>
					))}

					<h2>Beach Gear</h2>
					{this.state.beachGear.map(item => (
						<div key={item.id} className='product'>
							<img src={item.imageUrl} alt=''/>
							<h4>{item.title}</h4>
							<p>{item.description}</p>
							<p>{item.price}</p>
							<button onClick={() => this.addToCart(item)}>Add to Cart</button>
						</div>
					))}
				</section>

				<section className='cart'>
					<h1>Cart</h1>
					<h2>
						Total: $
						{this.state.cart.reduce(
							(totalPrice, product)=> (totalPrice += product.price * product.quantity), 0
						)}
					</h2>
					
					<div className='input'>
						<input
							placeholder='address'
							value={this.state.address}
							onChange={this.handleAddressInput}
						/>
						<input
							placeholder='credit card number'
							value={this.state.creditCard}
							onChange={this.handleCreditCardInput}
						/>
					</div>

					<button onClick={this.checkout}>Checkout</button>
					{this.state.cart.map(item => (
						<div key={item.id} className='product'>
							<img src={item.imageUrl} alt=''/>
							<div className="product-info">
								<h4>{item.title}</h4>
								<p>{item.quantity}</p>
								<p>{item.description}</p>
								<p>{item.price}</p>
							</div>
						</div>
					))}
				</section>
			</div>
		)
	}
}