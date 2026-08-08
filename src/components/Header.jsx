import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { memo } from "react";

const Header = memo(function Header() {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="header__content">
        <Link className="logo" to="/">
          React Shop
        </Link>

        <Link className="cart-counter" to="/cart">
          Cart: {totalItems}
        </Link>
      </div>
    </header>
  );
});

export default Header;
