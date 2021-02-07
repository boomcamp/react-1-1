import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

export default function CartItem(props) {
  const { item } = props;

  return (
    <div className="content">
        <div className="product-photo">
            <img src={item.imageUrl} height="150" width="180" />
        </div>
        <div className="details">
            <Text isHeader={true} text={item.title} />
            <Text isHeader={false} text={item.price} />
            <Text isHeader={false} text={item.quantity} />
            <Text isHeader={false} text={item.description} />
            <button className="btn-remove" onClick={() => this.deleteFromCart(item.id)}> Remove from Cart </button>
        </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
};
