import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <article className="cart-item">
      <div className="cart-item__info">
        <h3>{item.title}</h3>
        <p>${item.price * item.quantity}</p>
      </div>

      <div className="quantity-controls">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </div>

      <button className="remove-button" onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </article>
  );
}

export default CartItem;
