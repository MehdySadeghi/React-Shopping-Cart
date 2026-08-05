# React Shopping Cart

A shopping cart application built with React that demonstrates modern state management using the Context API and `useReducer`. Users can browse products, add them to a cart, update quantities, remove items, and view the total price through a simple and responsive interface.

This project was built as part of my React learning journey to practice managing shared state without relying on external state management libraries.

---

## Live Demo

https://react-shopping-sitee.netlify.app/
Open with a VPN if you are in Iran

---


## Features

- Browse a list of available products
- Add products to the shopping cart
- Increase and decrease item quantities
- Remove individual items from the cart
- Clear the entire cart
- Calculate the total number of items
- Calculate the total cart price
- Shared state management using Context API
- Complex state management with `useReducer`
- Client-side routing with React Router
- Responsive and clean user interface

---

## Built With

- React
- React Router
- Context API
- useReducer
- JavaScript (ES6+)
- CSS3
- Vite

---

## Project Structure

```text
src/
│
├── components/
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
│
├── context/
│   └── CartContext.jsx
│
├── pages/
│   └── HomePage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/MehdySadeghi/React-Shopping-Cart.git
```

Navigate to the project directory

```bash
cd React-Shopping-Cart
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

---

## What I Learned

Building this project helped me strengthen my understanding of:

- Context API
- useReducer
- Shared state management
- Reducer patterns and actions
- Immutable state updates
- React Router
- Component composition
- Custom Hooks
- Passing data through context instead of props
- Organizing React applications into reusable components

---

## Future Improvements

Planned improvements include:

- Persist cart data with Local Storage
- Product categories
- Product search
- Product filtering
- Product images
- Checkout page
- Order summary
- Toast notifications
- Dark mode
- Backend integration

---

## Author

**Mehdy Sadeghi**

GitHub:
https://github.com/MehdySadeghi

---

## License

This project is licensed under the MIT License.
