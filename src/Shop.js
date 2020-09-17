import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      " https://fortniteapi.io/v1/items/upcoming?lang=en",
      {
        method: "GET",
        headers: {
          Authorization: "865ca1b5-90d8ed6a-b17bca70-8100099d",
        },
      }
    );
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };
  return (
    <div>
      <h1>Shop page</h1>

      {items.map((item) => (
        <Link to={`/shop/${item.id}`}>
          <h1 key={item.id}>{item.name}</h1>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
