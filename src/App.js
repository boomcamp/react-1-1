import React, { Component } from 'react';
import './App.css';
export default class App extends Component {

    constructor() {
      super();
      this.state = {
        
        shirt: [
          {
            id: 1,
            imageUrl: 'https://via.placeholder.com/150x150',
            title: 'asdfsdafasd',
            price: 12.99,
            description: 'dipisicing elit. Quasi libero nemo dolorem soluta laborum, sequi natus quisquam consequuntur, iusto repellendus ab ',
            quantity: 1 ,

          },
          {
            id: 2,
            imageUrl: 'https://via.placeholder.com/150x150',
            title: 'asdfsdfasdfsadfsa',
            price: 12.99,
            description: 'has a feather in it.',
            quantity: 1 ,
            
          },
          {
            id: 3,
            imageUrl: 'https://via.placeholder.com/150x150',
            title: 'asd',
            price: 12.99,
            description: 'has a feather in it.',
            quantity: 1 ,
            
          },
         
          
          

        ],
        hats: [
          {
            id: 1,
            title: "Fisherman's Hat",
            description:
              'Headgear commonly used by fishermen. Increases fishing skill marginally.',
            price: 12.99,
            imageUrl: 'https://via.placeholder.com/150x150',
            quantity: 1 ,
            
          },
          {
            id: 2,
            title: 'Metal Hat',
            description: 'Uncomfortable, but sturdy.',
            price: 8.99,
            imageUrl: 'https://via.placeholder.com/150x150',
            quantity: 1 ,
            
          },
        ],

        cart: [],
        address: '',
        creditCard: '',
      };
    }

   

    addToCart(item) {
      let checkCart = new Set( this.state.cart);

      
      if(checkCart.has(item)){
        let newItem = item;
        newItem.quantity += 1;
        console.log(newItem);
      
      }
      else{
        this.setState({
          cart: [...this.state.cart, item],
        
        });
      }

      

    }
    
    checkout = () => {
      if (this.state.address.length > 0 && this.state.creditCard.length > 0) {
        this.setState({ cart: [] });
        alert('Purchase is complete!');
      } else {
        alert('Please fill out the required fields.');
      }
    }

    handleAddressInput = (e) => {
      this.setState({address: e.target.value})
    
    }
  
    handleCreditCardInput = (e) => {
      this.setState({ creditCard: e.target.value });
    }
   

    render(){
      
      return (
        <div className="App">
          
          <section className="products">
            <h4 className="section-title no-margin">Products</h4>
            <br/>
            <button>Toggle View</button>
      
            <h4 className="section-title">T-shirts</h4>
            {
              this.state.shirt.map( element => (
                <div key={element.id} className="product">
                  <img src={element.imageUrl} />
                  <div className="product-description">
                    <h4>{element.title}</h4>
                    <br/>  
                    <p>{element.description}</p>
                    <p>$ {element.price}</p>

                    <button onClick={() => this.addToCart(element)}>Add to Cart</button>
                  </div>
                </div>
              ))
            }
            <h4 className="section-title">Hats</h4>
            {
              this.state.hats.map( element => (
                <div key={element.id} className="product">
                  <img src={element.imageUrl} />
                  <div className="product-description">
                    <h4>{element.title}</h4>
                    <br/>  
                    <p>{element.description}</p>
                    <p>$ {element.price}</p>

                    <button onClick={() => this.addToCart(element)}>Add to Cart</button>
                  </div>
                </div>
              ))
            }
         
          </section>
          <section className="cart">
            <h4 className="section-title no-margin white-color">Cart</h4>
            <br/>
            <div className="inputs">
            <input
              placeholder="address"
              value={this.state.address}
              onChange={this.handleAddressInput}
            />
            <input
              placeholder="credit card number"
              onChange={this.handleCreditCardInput}
            />
          </div>
            <h4 className="section-title white-color">
              Total : $
             
              {this.state.cart.reduce( (totalPrice , item) => ( 
                totalPrice += item.price
                ) , 0)}
            </h4>
           
            <button className="section-title" onClick={this.checkout}>Checkout</button>
            <br/><br/>
            <div className="cart-item-container">
            {
              this.state.cart.map( element => (
                <div key={element.id} className="cart-item">
                  <img src={element.imageUrl} />
                  <div className="cart-description">
                    <h4>{element.title} </h4>
                    <br/>
                    <p>{element.description}</p>
                    <br/>
                    <p>$ {element.price} | <b>Quantity</b> : {element.quantity}</p>
                   
                    {/* <button onClick={() => this.addToCart(element)}>Add to Cart</button> */}
                  </div>
                </div>

              ))
            }
            </div>

          </section>
        </div>
      );
     
    }

}