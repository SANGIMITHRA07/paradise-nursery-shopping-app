import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "./CartSlice";

const plants = [
  {
    id: 1,
    category: "Indoor Plants",
    name: "Snake Plant",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 2,
    category: "Indoor Plants",
    name: "Peace Lily",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 3,
    category: "Indoor Plants",
    name: "Spider Plant",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  },
  {
    id: 4,
    category: "Indoor Plants",
    name: "ZZ Plant",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1632207691144-ec55c8c1c1c6"
  },
  {
    id: 5,
    category: "Indoor Plants",
    name: "Rubber Plant",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 6,
    category: "Indoor Plants",
    name: "Monstera",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1614594575661-3a4a4f5c8d3b"
  },

  {
    id: 7,
    category: "Flowering Plants",
    name: "Rose Plant",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322"
  },
  {
    id: 8,
    category: "Flowering Plants",
    name: "Jasmine Plant",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e"
  },
  {
    id: 9,
    category: "Flowering Plants",
    name: "Hibiscus",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1597848212624-e19f35d0d5b3"
  },
  {
    id: 10,
    category: "Flowering Plants",
    name: "Orchid",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1566907225474-4c7b8f7a0c5c"
  },
  {
    id: 11,
    category: "Flowering Plants",
    name: "Anthurium",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1591958911259-bee2173bdccc"
  },
  {
    id: 12,
    category: "Flowering Plants",
    name: "Begonia",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1597055181300-3c8a6a6f2b1f"
  },

  {
    id: 13,
    category: "Succulents",
    name: "Aloe Vera",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 14,
    category: "Succulents",
    name: "Echeveria",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
  },
  {
    id: 15,
    category: "Succulents",
    name: "Jade Plant",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112"
  },
  {
    id: 16,
    category: "Succulents",
    name: "Haworthia",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc"
  },
  {
    id: 17,
    category: "Succulents",
    name: "Sedum",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
  },
  {
    id: 18,
    category: "Succulents",
    name: "String of Pearls",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Succulents"
  ];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-page">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2 className="category-title">
            {category}
          </h2>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div
                  className="product-card"
                  key={plant.id}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>₹{plant.price}</p>

                  <button
                    className="add-btn"
                    onClick={() =>
                      handleAddToCart(plant)
                    }
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;