import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

import { useSelector } from "react-redux";

import "./App.css";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <h2>Paradise Nursery</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/about">About Us</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature into your home with our beautiful collection of
          indoor plants.
        </p>

        <Link to="/plants">
          <button className="get-started-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;