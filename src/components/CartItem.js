import React from 'react';

export default function CartItem(props) {
  const { item } = props;

  return (
    <div className="content">
        <div className="product-photo">
            <img src={item.imageUrl} height="150" width="180" />
        </div>
        <div className="details">
            <p>Product Name: {item.title}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>{item.description}</p>
            <button className="btn-remove" onClick={() => this.deleteFromCart(item.id)}> Remove from Cart </button>
        </div>
    </div>
  );
}

