import { memo } from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = memo(function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div>
        <h3>{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>

      <AddToCartButton product={product} />
    </article>
  );
});

export default ProductCard;
