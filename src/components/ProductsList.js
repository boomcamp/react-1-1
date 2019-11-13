import React, { Component } from 'react'
import ProductShow from './ProductShow'

export class ProductsList extends Component {
    render() {

        console.log(this.props);

        return (
            <div>
                {
                    this.props.products.map((product, index)=>{
                        return <ProductShow key={index} keys={this.props.keyRef[index]} product={product} addtocart={this.props.addtocart}/>
                    })
                }
            </div>
        )
    }
}

export default ProductsList
