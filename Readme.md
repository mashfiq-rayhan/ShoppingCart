### ✨ Elegant Context — Context + useReducer Demo 

A small demo shop built with React that demonstrates Context API usage to manage a shopping cart, component composition, and an imperative modal pattern.

![Home](./public/home.png)
![Cart](./public/cart1.png)
![Cart](./public/cart2.png)

#### Features
- 🛒 Add / remove items in a cart via Context
- ➕ Increment / ➖ Decrement item quantities
- 🪄 Imperative modal using `useImperativeHandle` for the cart
- 🧩 Simple, easy-to-follow component structure

#### Context API notes
- CartContext provides:
  - items: array of cart entries
  - addItemToCart(productId)
  - updateItemQuantity(productId, delta)
- The modal is controlled imperatively from Header via a ref to CartModal.
