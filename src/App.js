import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            beachGears: [
                {
                  id: 3,
                  title: "Tent",
                  description: "Portable shelter.",
                  price: 32.99,
                  imageUrl: "https://via.placeholder.com/150x150",
                  quantity: 0
                }
            ],
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
                }
            ],
            cart: [],
            address: '',
            creditCard: '',
            cardView: true,
        };
    }

    handleToggleView = function(cardView){
        if(this.state.cardView){
            this.setState({
                cardView: false
            })
        }
        else{
            this.setState({
                cardView: true
            })
        }
    }

    addToCart = function(product){
        console.log(product.quantity)
        if(product.quantity === 0){
            this.setState({
                quantity: Object.assign({}, product.quantity+=1),
                cart: [...this.state.cart, product]
            })     
        }
        else{
            this.setState({
                quantity: Object.assign({}, product.quantity+=1),
            })
        }
    }

    deleteFromCart = function(product){
        if(product.quantity === 1){
            let cartNew = this.state.cart.filter(item => item !== product)
            this.setState({
                cart: cartNew,
                quantity: Object.assign({}, product.quantity-=1)
            });
        }
        else{
            this.setState({
                quantity: Object.assign({}, product.quantity-=1)
            })
        }
    }

    checkOut = function(){
        if(this.state.address && this.state.creditCard){
            alert("Purchase is Complete!")
            this.setState({cart:[]})
        }
        else
            alert("Please fill out the required fields.")
    }

    addressInput = function(e){
        this.setState({
            address: e.target.value
        })
    }

    creditCardInput = function (e){
        this.setState({
            creditCard: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <section className="products">
                    <h1>PRODUCTS</h1>
                    <button onClick={()=>this.handleToggleView(this.state.cardView)}>Toggle View</button>
                    <h2 className="productTitle">Hats</h2>
                    {
                        this.state.hats.map(hat => (
                            <div key={hat.id} className="productList" style={{display: this.state.cardView ? 'flex' : 'block'}}> 
                                <img src={hat.imageUrl} alt="hat"/>
                                <div className="prodDetails">
                                    <h4>{hat.title}</h4>
                                    <p>{hat.description}</p>
                                    <p>{hat.price}</p>
                                    <button onClick={()=>this.addToCart(hat)}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                    <h2 className="productTitle">Beach Gear</h2>
                    {
                        this.state.beachGears.map(beachGear => (
                            <div key={beachGear.id} className="productList"> 
                                <img src={beachGear.imageUrl} alt="beachGear"/>
                                <div>
                                    <h4>{beachGear.title}</h4>
                                    <p>{beachGear.description}</p>
                                    <p>{beachGear.price}</p>
                                    <button onClick={()=>this.addToCart(beachGear)}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </section>
                
                <section className="cart">
                    <h1>Cart</h1>
                    <h2>
                        Total: $
                        {this.state.cart.reduce((total, cart) => (total=total+(cart.price*cart.quantity)), 0).toFixed(2)}
                    </h2>
                    <div>
                        <input type="text" placeholder="Address" className="address" value={this.address} onChange={(e)=>this.addressInput(e)}/>
                        <input type="text" placeholder="Credit Card #" className="creditCard" value={this.creditCard} onChange={(e)=>this.creditCardInput(e)}/>
                    </div>
                    <button onClick={()=>{this.checkOut()}}>Checkout</button>
                    {this.state.cart.map(cart => (
                        <div key={cart.id} className="cartList"> 
                            <img src={cart.imageUrl} alt="cart"/>
                            <div>
                                <h4>{cart.title}</h4>
                                <p>Quantity: {cart.quantity}</p>
                                <p>{cart.description}</p>
                                <p>{cart.price}</p>
                                <button onClick={()=>this.deleteFromCart(cart)}>Remove from Cart</button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        )
    }
}