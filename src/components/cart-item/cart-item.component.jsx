import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => {
  console.log("item 55555555555555: ", imageUrl);
  console.log("item 55555555555555: ", price);
  console.log("item 55555555555555: ", name);
  console.log("item 55555555555555: ", quantity);
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item'></img>
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x {price}</span>
      </div>
    </div>
  )
};
export default CartItem;
