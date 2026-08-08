import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";

function ProductList() {
  const { products } = useCart();

  return (
    <section className="products-section">
      <h2>Products</h2>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
