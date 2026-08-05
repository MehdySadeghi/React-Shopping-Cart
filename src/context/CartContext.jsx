import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
  },
  {
    id: 2,
    title: "Keyboard",
    price: 80,
  },
  {
    id: 3,
    title: "Mouse",
    price: 40,
  },
  {
    id: 4,
    title: "Monitor",
    price: 800,
  },
];

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "item/added": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    }

    case "item/removed":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "item/quantityIncreased":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "item/quantityDecreased": {
      const item = state.cart.find((item) => item.id === action.payload);

      if (!item) return;

      if (item.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      }

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };
    }

    case "cart/cleared":
      return { ...state, cart: [] };

    default:
      throw new Error("Unknown Error");
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  function addToCart(product) {
    dispatch({
      type: "item/added",
      payload: product,
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "item/removed",
      payload: id,
    });
  }

  function increaseQuantity(id) {
    dispatch({ type: "item/quantityIncreased", payload: id });
  }

  function decreaseQuantity(id) {
    dispatch({ type: "item/quantityDecreased", payload: id });
  }

  function clearCart() {
    dispatch({ type: "cart/cleared" });
  }

  return (
    <CartContext.Provider
      value={{
        products,
        state,
        totalPrice,
        totalItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside the cart provider");
  return context;
}

export { CartProvider, useCart };
