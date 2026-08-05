import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div>
        <h3>{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>

      <button
        className="button button--primary"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
