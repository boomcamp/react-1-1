import React, { Component } from 'react'

export class Cart extends Component {

    render() {
        return (
            <div>

                <div className='totalCost'> 
                    <h1>Total $ {
                        this.props.cart.reduce((total,item)=>{
                                return total += item.price * item.quantity;
                            },0)
                    }</h1>
                </div>

                <div className="inputFields">
                    <input type='text' placeholder='address' onChange={this.props.setAddress}/>
                    <input type='text' placeholder='creditCard number' onChange={this.props.setccard}/>
                </div>

                <button onClick={this.props.checkout}>Checkout</button>

                 {this.props.cart.map(item => (
                    <div key={item.id} className="product item-container">
                            <img alt='' src={item.imageUrl} />
                        <div className='detailsContainer'>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                            <button onClick={()=>this.props.removefc(item.id)}>Remove From Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Cart
