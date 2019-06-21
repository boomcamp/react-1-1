import React from 'react';

export default function Product(props) {
  const { item, addToCart } = props;

  return (
    <div class="product">
      <div className="product-photo">
          <img src={item.imageUrl} height="180" width="200" />
      </div>
      <div className="details">
        <h4>{item.title}</h4>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <button className="btn-add"  onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}
