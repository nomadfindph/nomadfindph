import React, { Component } from "react";
import './favorites.css';

function FavoritesData(props) {
    return (
        <div className="favorites-data">
            <div>
                <img className="img" src={props.image} />
                <div className="favorite-details">
                    <p className="name"><strong>{props.name}</strong></p>
                    <p className="stars">{props.stars}</p>
                    <p className="price"><strong>{props.price}</strong></p>
                    <button className="transact">Transact</button>
                </div>
            </div>
            <div className="favorite-desc">
                <p>{props.description}</p>
                <p><strong>Location:</strong> {props.location}</p>
                <p><strong>Landlord:</strong> {props.landlord}</p>
            </div>
        </div>
    )
}

export default FavoritesData;