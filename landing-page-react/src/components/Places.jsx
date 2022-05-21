import React from "react";
import CardDark from "./CardDark";

function Places() {
    return (
        <>
             <hr class="places-near-you-hr"/>
            <h1 class="featured-title places-near-you">
                Places near you
            </h1>
            <table className="featured">
                <tr>
                    <td>
                        <CardDark bldgName="Toto Cen" ratings="3,500" price="3,500" />
                    </td>
                    <td>
                        <CardDark bldgName="Pete Toy" ratings="5,500" price="6,500" />
                    </td>
                    <td>
                        <CardDark bldgName="Patring" ratings="500" price="2,000" />
                    </td>
                </tr>
            </table>
        </>
    ) 
}

export default Places;