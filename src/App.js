import React, { Component } from 'react'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'

export class App extends Component {
    constructor(){
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
              },
            ],
          };
    }

    addToCart=(item)=>{

        if(item.quantity === 0){
            this.setState({
                quantity: Object.assign({}, item.quantity+=1),
                cart: [...this.state.cart, item]
            })
        }else{
            this.setState({
                quantity: Object.assign({}, item.quantity+=1)
            })
        }
        
    }

    checkout=()=>{
        if(this.state.address === '' && this.state.address === ''){
            return alert("Please fill out the required fields.");
        }
        this.setState({
            cart: []
        });

        alert("Purchase is complete!");
    }

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

    removefromCart=(e)=>{
        this.state.cart.map((item,index)=>{
            if(item.id === e){
                if(item.quantity >= 2){
                    this.setState(
                        {
                            quantity: Object.assign({}, item.quantity-=1)
                        }
                    )
                }else{
                    this.setState({
                        cart: this.state.cart.splice(index,1)
                    })
                }   
            }
        });

    }

    toggleView=(e)=>{


        document.querySelectorAll('.item-container').forEach(element=>{

            if(this.state.cardView){
                element.style.display = 'flex';
                this.setState({
                    cardView : false
                })
            }else{
                element.style.display = 'block';
                this.setState({
                    cardView : true
                })
            }
        })
    }

    render() {
        return (
            <div className="App">
                <section className="products">
                    <h1>Products</h1>
                    <button onClick={()=>this.toggleView()}>Toggle View</button>
                    <ProductsList products = {[this.state.hats,this.state.beachGear]} 

                    keyRef={['Hats', 'Beach Gear']}

                    addtocart ={this.addToCart} 

                
                    />
                </section>

                <section className="cart">
                    <h1>Cart</h1>

                    <Cart setAddress={this.handleAddressInput} setccard={this.handleCreditCardInput} checkout={this.checkout} cart={this.state.cart} removefc={this.removefromCart}/>
                </section>
            </div>
        )
    }
}

export default App
