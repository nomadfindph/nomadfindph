import React from "react";

function CardDark(props) {
    return (
        <>
            <div class="bldg-item featured-item-1">
                    <button type="button" class="btn add-to-favorites btn-outline-warning">Add to favorites</button>
                </div>
                <p class="bldg-details-drk">
                    <span class="bldg-name">
                        {props.bldgName}
                    </span>
                    <br/>
                    ★★★★☆ {props.ratings} ratings
                    <br/>
                    <span class="price">₱{props.price}/mo.</span> 
                    <br/>
                    <button type="button" class="btn interested-drk btn-outline-secondary">Interested</button>
                </p>
        </>
    )
}

export default CardDark;