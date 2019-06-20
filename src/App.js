import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
        cardView: true,
      cart: [],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            "Headgear commonly used by fishermen. Increases fishing skill marginally.",
          price: 12.99,
          imageUrl: "https://via.placeholder.com/150x150",
          quantity: 0
        },
        {
          id: 2,
          title: "Metal Hat",
          description: "Uncomfortable, but sturdy.",
          price: 8.99,
          imageUrl: "https://via.placeholder.com/150x150",
          quantity: 0
        }
      ],
      shirt: [
        {
          id: 3,
          title: "Boom Shirt",
          description:
            "Boomsourcing Official Shirt. Increases programming skills",
          price: 19.99,
          imageUrl: "https://via.placeholder.com/150x150",
          quantity: 0
        }
      ],
      address: "",
      creditCard: ""
    };
  }
  addToCart(product) {
    let cartCopy = this.state.cart.map(prod => Object.assign({}, prod));
    let findIndex = this.state.cart.findIndex(prod=> prod.id === product.id);
    if (findIndex === -1) {
        product = Object.assign({}, product, { quantity: 1 });
        this.setState({ cart: [...this.state.cart, product] });
      } else {
        cartCopy[findIndex].quantity++;
        this.setState({ cart: cartCopy });
      }
  }
  deleteProd(id) {
    let cartCopy = this.state.cart.map(prod => Object.assign({}, prod));
    let findIndex = this.state.cart.findIndex(prod => prod.id === id);

    if (cartCopy[findIndex].quantity === 1) {
      cartCopy.splice(findIndex, 1);
    } else if (cartCopy[findIndex].quantity > 1) {
      cartCopy[findIndex].quantity--;
    }

    this.setState({ cart: cartCopy });
  }
  checkOut = () => {
      if(this.state.address.length > 0 && this.state.creditCard.length > 0){
        this.setState({
            cart: [],
            address: '',
            creditCard: '',
          });
          alert("Purchase is complete!");
      }
    else{
        alert("Please fill out the required fields");
    }
    
  };
  handleAddressInput=(e)=>{
      
    this.setState({
        address: e.target.value
    });
  }
  handleCreditCardInput=(e)=>{
    this.setState({
        creditCard: e.target.value
    });
  }
  handleToggleView = () => {
    this.setState({ cardView: !this.state.cardView });
  };
  render() {
    return (
      <div className="App">
        <section className="products">
          <h1>Products</h1>
          <button onClick={this.handleToggleView}>Toggle View</button>
          <h2>Hats</h2>
          {this.state.hats.map(prod => (
            <div key={prod.id}  className={this.state.cardView ? "product" : "product-list"}>
              <img src={prod.imageUrl} />
              <div className="prod-details">
                <h4>{prod.title}</h4>
                <p>{prod.description}</p>
                <p>{prod.price}</p>
                <button onClick={() => this.addToCart(prod)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
          <h2>Shirts</h2>
          {this.state.shirt.map(prod => (
            <div key={prod.id} className={this.state.cardView ? "product" : "product-list"}>
                
              <img src={prod.imageUrl} />
              <div className="prod-details">
                <h4>{prod.title}</h4>
                <p>{prod.description}</p>
                <p>{prod.price}</p>
                <button onClick={() => this.addToCart(prod)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="cart">
          <h1>Cart</h1>

          <h2>
            Total: $
            {this.state.cart.reduce(
              (totalPrice, prod) =>   (totalPrice += prod.price * prod.quantity),
              0.0
            )}
          </h2>
          <div className="payment">
            <input
              type="text"
              className="address"
              value={this.state.address}
              onChange={this.handleAddressInput}
              required
            />{" "}
            <input
              type="text"
              className="car-no"
              value={this.state.creditCard}
              onChange={this.handleCreditCardInput}
              required
            />
          </div>
          <button onClick={this.checkOut}>Check Out</button>
          {this.state.cart.map(prod => (
            <div key={prod.id} className="cart-product">
              <img src={prod.imageUrl} />
              <div className="prod-details">
                <h4>{prod.title}</h4>
                <p>{prod.description}</p>
                <p>{prod.quantity}</p>
                <p>{prod.price}</p>
                <button onClick={() => this.deleteProd(prod.id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
