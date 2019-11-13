    import React, { Component } from 'react'
    
    export class ProductShow extends Component {
        render() {

            console.log(this.props.keys);
            return (
                <div>
                    <div className='type-container'><h1 className='type'>{this.props.keys}</h1>
                    {
                        this.props.product.map(item=>{
                            return <div key={item.id} className='item-container' >
                                <img alt='' src={item.imageUrl}/>
                                <div className='detailsContainer'>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                    <button onClick={()=>this.props.addtocart(item)}>Add to Cart</button>
                                </div>

                            </div>
                    })}
                    </div>
                </div>
            )
        }
    }
    
    export default ProductShow
    