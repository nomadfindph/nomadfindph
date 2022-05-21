import React from "react";
import Card from "./Card";

function Featured() {
    return (
        <div className="featured-section">
            <hr class="featured-hr"/>
            <h1 class="featured-title">
                Featured
            </h1>
            <table className="featured">
                <tr>
                    <td><Card bldgName="Kenshin" ratings="2500" price="2,500"/></td>
                    <td><Card bldgName="Lola Yam" ratings="5000" price="7,500"/></td>
                    <td><Card bldgName="F&M" ratings="500" price="1,500"/></td>
                </tr>
            </table>
        </div>
    )
}

export default Featured;