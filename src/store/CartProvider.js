import CartContext from "./cart-context";
function CartProvider(props) {
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
}

export default CartProvider;
