import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({ images: {} });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortniteapi.io/v1/items/get?id=${match.params.id}&lang=en`,
      {
        method: "GET",
        headers: {
          Authorization: "865ca1b5-90d8ed6a-b17bca70-8100099d",
        },
      }
    );
    const item = await fetchItem.json();
    setItem(item.item);
    console.log(item);
  };
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>rareté : {item.rarity}</p>
      <p>prix du bail : {item.price}</p>
      <img src={item.images.icon} alt="{item.images.icon}" />
    </div>
  );
}

export default ItemDetail;
