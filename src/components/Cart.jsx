import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { state, totalItems, totalPrice, clearCart } = useCart();

  return (
    <aside className="cart">
      <div className="cart__header">
        <h2>Your Cart</h2>
        <span>{totalItems} items</span>
      </div>

      {state.cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {state.cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>

          <div className="cart-summary">
            <div>
              <span>Total</span>
              <strong>${totalPrice}</strong>
            </div>

            <button className="button button--danger" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;
