import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

export default function Product(props) {
  const { item, addToCart } = props;

  return (
    <div class="product">
      <div className="product-photo">
          <img src={item.imageUrl} height="180" width="200" />
      </div>
      <div className="details">
        <Text isHeader={true} text={item.title} />
        <Text isHeader={false} text={item.price} />
        <Text isHeader={false} text={item.description} />
        <button className="btn-add"  onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
  addToCart: PropTypes.func.isRequired,
};