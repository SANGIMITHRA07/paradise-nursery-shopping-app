import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./CartSlice";

import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>

        <h2>Your cart is empty.</h2>

        <Link to="/plants">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div
          className="cart-item"
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.name}
          />

          <div>
            <h2>{item.name}</h2>

            <p>
              Unit Price: ₹{item.price}
            </p>

            <p>
              Total: ₹
              {item.price * item.quantity}
            </p>

            <div className="quantity-controls">
              <button
                onClick={() =>
                  dispatch(
                    decreaseQuantity(item.id)
                  )
                }
              >
                −
              </button>

              <span>
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch(
                    increaseQuantity(item.id)
                  )
                }
              >
                +
              </button>
            </div>

            <br />

            <button
              className="delete-btn"
              onClick={() =>
                dispatch(
                  removeFromCart(item.id)
                )
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>
          Total Cart Amount: ₹{totalAmount}
        </h2>

        <button
          className="checkout-btn"
          onClick={handleCheckout}
        >
          Checkout
        </button>

        <Link to="/plants">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartItem;