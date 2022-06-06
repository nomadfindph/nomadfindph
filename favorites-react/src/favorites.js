import React, { Component } from "react";
import FavoritesData from "./favorites-data";
import './favorites.css';
import hotels from "./favorite-hotels";

function getHotelsFavoriteData(hotel) {
  return <FavoritesData
    key={hotel.id}
    image={hotel.image}
    name={hotel.name}
    stars={hotel.stars}l
    price={hotel.price}
    description={hotel.description}
    location={hotel.location}
    landlord={hotel.landlord}
  />
}

function Favorites() {
  return (
    <>
    <hr />
    <div className="favorites-section">
      <h1>Favorites</h1>
      {hotels.map(getHotelsFavoriteData)}
    </div>
    </>
  )
}

export default Favorites;