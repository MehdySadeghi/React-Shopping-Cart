import { useCart } from "../context/CartContext";

function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  return (
    <button
      className="button button--primary"
      onClick={() => addToCart(product)}
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
