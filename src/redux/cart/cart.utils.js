export const addItemToCart = (cartItems, cartItemToAdd) => {
  console.log("cartItems: ", cartItems);
  console.log("cartItemToAdd: ", cartItemToAdd);
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItem){
    console.log("Not existing");
    return cartItems.map(cartItem => (
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity : cartItem.quantity + 1}: cartItem
    ));
  }
  console.log("existing");
  return [...cartItems, {...cartItemToAdd, quantity: 1}];
}
