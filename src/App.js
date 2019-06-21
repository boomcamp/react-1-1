import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      cardView: false,
      address: "",
      creditCard: "",
      products: [],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            "Headgear commonly used by fishermen. Increases fishing skill marginally.",
          price: 12.99,
          imageUrl: "https://via.placeholder.com/150x150",
          qty: 1
        },
        {
          id: 2,
          title: "Metal Hat",
          description: "Uncomfortable, but sturdy.",
          price: 8.99,
          imageUrl: "https://via.placeholder.com/150x150",
          qty: 1
        }
      ],
      beachGear: [
        {
          id: 3,
          title: "Tent",
          description: "Portable shelter.",
          price: 32.99,
          imageUrl: "https://via.placeholder.com/150x150",
          qty: 1
        }
      ]
    };
  }

  addToCart(item) {
    let cartCopy = this.state.cart.map(product => Object.assign({}, product));
    let index = this.state.cart.findIndex(product => product.id === item.id);

    if (index === -1) {
      item = Object.assign({}, item, { qty: 1 });
      this.setState({ cart: [...this.state.cart, item] });
    } else {
      cartCopy[index].qty++;
      this.setState({ cart: cartCopy });
    }
  }

  handleAddressInput = e => {
    this.setState({ address: e.target.value });
  };

  handleCreditCardInput = e => {
    this.setState({ creditCard: e.target.value });
  };

  handleToggleView = () => {
    this.setState({ cardView: !this.state.cardView });
  };

  deleteFromCart(id) {
    let cartCopy = this.state.cart.map(product => Object.assign({}, product));
    let index = this.state.cart.findIndex(product => product.id === id);

    if (cartCopy[index].qty === 1) {
      cartCopy.splice(index, 1);
    } else if (cartCopy[index].qty > 1) {
      cartCopy[index].qty--;
    }

    this.setState({ cart: cartCopy });
  }

  checkout = () => {
    if (this.state.address.length > 0 && this.state.creditCard.length > 0) {
      this.setState({ cart: [] });
      alert("Purchase is complete!");
    } else {
      alert("Please fill out the required fields.");
    }
  };

  render() {
    return (
      <div className="App">
        <section className="products">
          <button onClick={() => this.handleToggleView()}>Toogle View</button>
          <h1>Products</h1>
          {this.state.products.map(item => (
            <div key={item.id} className="product">
              <div>
                <img src={item.imageUrl} alt="img" />
              </div>
              <div className="details">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => this.addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          <h1>Hats</h1>
          {this.state.hats.map(item => (
            
            <div key={item.id} className={this.state.cardView ? "product" : "product-list"}>
              <div>
                <img src={item.imageUrl} alt="img" />
              </div>
              <div className="details">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => this.addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          <h1>Beach Gears</h1>
          {this.state.beachGear.map(item => (
            <div key={item.id} className={this.state.cardView ? "product" : "product-list"}>
              <div>
                <img src={item.imageUrl} alt="img" />
              </div>
              <div className="details">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={() => this.addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="cart">
          <h1>Cart</h1>
          <h3>Quantity: {this.state.cart.length}</h3>
          <h3>
            Total: $
            {this.state.cart
              .reduce((totalPrice, product) => (totalPrice += product.price * product.qty), 0)
              .toFixed(2)}
          </h3>

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

          <button className="checkout" onClick={this.checkout}>
            Checkout
          </button>

          {this.state.cart.map(item => (
            <div key={item.id} className="product">
              <div>
                <img src={item.imageUrl} alt="img" />
              </div>
              <div className="details">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price} ({item.qty})</p>
                <button onClick={() => this.deleteFromCart(item.id)}>
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

export default App;
