import React, { Component } from 'react';
import './App.css';


export default class App extends Component {
    constructor(){
        super();
        this.state = {
            cart: [],
            cats: [
                {
                  id: 1,
                  title: "Bruce",
                  description:
                    'Nice Companion for those who travel.',
                  price: 12.99,
                  imageUrl: 'https://loremflickr.com/cache/resized/6038_6268980771_070a2baebd_q_150_150_nofilter.jpg',
                },
                {
                  id: 2,
                  title: 'Tamoola',
                  description: 'A little grumpy, but cute.',
                  price: 18.99,
                  imageUrl: 'https://loremflickr.com/cache/resized/7800_46578196025_573fa28009_q_150_150_nofilter.jpg',
                },
                {
                    id: 3,
                    title: 'Big Boi',
                    description: 'Your bright friend who eats your fries.',
                    price: 83.99,
                    imageUrl: 'https://loremflickr.com/cache/resized/2089_2205467836_817efe625d_q_150_150_nofilter.jpg',
                  },
              ],
              dogs: [
                {
                  id: 1,
                  title: "Cookie",
                  description:
                    'A party pooper but great for long walks.',
                  price: 12.99,
                  imageUrl: 'https://loremflickr.com/cache/resized/65535_47942418853_ba3c606912_q_150_150_nofilter.jpg',
                },
                {
                  id: 2,
                  title: 'Sausage',
                  description: 'Loves eating sandals.',
                  price: 18.99,
                  imageUrl: 'https://loremflickr.com/cache/resized/7837_33290814938_28e0017075_q_150_150_nofilter.jpg',
                },
                {
                    id: 3,
                    title: 'Akon',
                    description: 'will dig at your backyard for bones.',
                    price: 83.99,
                    imageUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80',
                  },
              ],
              toggleView: false,
              address: '',
              creditCard: '',
        };
    }

    addToCart(item) {
        this.setState({
          cart: [...this.state.cart, item],
        });
      }
    
      emptyCart() {
        this.setState({
          cart: [],
          address: '',
          creditCard: '',
        });
      }
    
    switchView(){
        this.setState({
            toggleView: !this.state.toggleView
          });
    }

   handleAddressInput = e => {
    this.setState({ address: e.target.value });
    };

    handleCreditCardInput = e => {
    this.setState({ creditCard: e.target.value });
    };
    render(){
        return(
            <div className="App">
                 <section className="products" >
                    <h1>Products</h1>
                    <button onClick={() => this.switchView()}>Switch View</button>
                    <h2>Cats</h2>
                    {this.state.cats.map(item => (
                        <div key={item.id} className='product' style={{display: this.state.toggleView ? 'flex' : 'block' }}>
                            <img src={item.imageUrl} alt={item.id}/>
                            <div className='productInfo'>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                    <h2>Dogs</h2>
                    {this.state.dogs.map(item => (
                        <div key={item.id} className='product'  style={{display: this.state.toggleView ? 'flex' : 'block' }}>
                            <img src={item.imageUrl}/>
                            <div className='productInfo'>
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
                    <h2> Total: ${this.state.cart.reduce((totalPrice, product) => (totalPrice += product.price),0)}
                    </h2>
                    <div>
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
                    <button onClick={() => {
                        if (this.state.address.length > 0 && this.state.creditCard.length > 0) {
                            alert('Purchase is complete!');
                            this.emptyCart();
                          } else {
                            alert('Please fill out the required fields.');
                          }
                        }}>Checkout</button>
                    {this.state.cart.map(item => (
                          <div key={item.id} className='product'  style={{display: this.state.toggleView ? 'flex' : 'block' }}>
                          <img src={item.imageUrl}/>
                          <div className='productInfo'>
                            <h4>{item.title}</h4>
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