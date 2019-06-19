import React, {Component} from 'react';
import './App.css';
export default class App extends Component{
    constructor(){
        super();
        this.state = {

          address: '',
          creditCard: '',
            // products: [
            //     {
            //         id: 1,
            //         imageUrl: 'https://via.placeholder.com/150x150',
            //         title: 'fancy hat',
            //         price: 12.99,
            //         description: 'has a feather in it.'
            //       },
            //       {
            //         id: 2,
            //         imageUrl: 'https://via.placeholder.com/150x150',
            //         title: 'fancy car',
            //         price: 15750.45,
            //         description: 'goes vroom vroom.'
            //       },
            //       {
            //         id: 3,
            //         imageUrl: 'https://via.placeholder.com/150x150',
            //         title: 'simple rock',
            //         price: 5.00,
            //         description: 'it is a rock'
            //       },
            // ],

            cart: [],
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
                  price: 312.99,
                  imageUrl: 'https://via.placeholder.com/150x150',
                },
              ],
            shirts: [
                {
                  id: 4,
                  title: 'Vans',
                  description: '100% Cotton',
                  price: 42.99,
                  imageUrl: 'https://cdn.ccs.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/v/a/vans-classic-boys-t-shirt-burgundy-white.1506704118.jpg',
                },
                {
                  id: 5,
                  title: 'Diamond',
                  description: 'Get your shine on!',
                  price: 95.99,
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRny4ePV2vAA6tXlqsHPRijmvOxtdHXYB7CLgdrOxOAsCT1YBKg',
                },
                {
                  id: 6,
                  title: 'Ethnies',
                  description: 'Polyester',
                  price: 54.99,
                  imageUrl: 'https://cdn-internetfusion.global.ssl.fastly.net/extremepie.com/545219.jpg?width=500&pad=0,0&bg-color=ffffff',
                },
                
              ],
            
        }
    }

    addToCart(item){
        this.setState({
            cart: [...this.state.cart, item]
        })
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
      this.setState({ address: e.target.value});
    };

    handleCreditCardInput = e => {
      this.setState({ creditCard: e.target.value});
    };

    render(){
        return(
            <div className ="App">
                <section className="products">
                <h1>Products</h1>
                  <h2>Hats</h2>
                  {this.state.hats.map(item => (
                    <div key={item.id} className="product">
                      <img src={item.imageUrl} />
                      <div className="product-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                      <button onClick ={() => this.addToCart(item)}>Add To Cart</button>
                      </div>
                    </div>
                  ))}

                  <h2>Beach Gear</h2>
                  {this.state.beachGear.map(item => (
                    <div key={item.id} className="product">
                      <img src={item.imageUrl} />
                      <div className="product-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                      <button onClick ={() => this.addToCart(item)}>Add To Cart</button>
                      </div>
                    </div>
                  ))}

                <h2>Shirts</h2>
                  {this.state.shirts.map(item => (
                    <div key={item.id} className="product">
                      <img src={item.imageUrl} />
                      <div className="product-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                      <button onClick ={() => this.addToCart(item)}>Add To Cart</button>
                      </div>
                    </div>
                  ))}


                </section>

                <section className="cart">
                    <h1>Cart</h1>
                    <h2>
                      Total: $
                      {this.state.cart.reduce(
                        (totalPrice, product) => (totalPrice += product.price),
                        0
                      )}
                      </h2>

                        <div className="inputs">
                          <input
                            placeholder="address"
                            value={this.state.address}
                            onChange={this.handleAddressInput}
                          />
                          <input
                            placeholder ="credit card number"
                            value={this.state.creditCard}
                            onChange = {this.handleCreditCardInput}
                          />
                        </div>

                      <button onClick={this.checkout}>CheckOut</button>
                    {this.state.cart.map(item => (
                        <div key={item.id} className="product">
                        <img src={item.imageUrl} />
                        <div className="product-info">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        </div>
                    </div>
                    ))
                        
                    }
                </section>
            </div>
        )
    };

}