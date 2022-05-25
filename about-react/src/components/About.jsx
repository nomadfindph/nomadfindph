import React from "react";

function About() {
    return(
        <>
           <div class="about-page">
    <h1>
        About Us
    </h1>
    <h2>
        OUR STORY
    </h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ac ut consequat semper viverra nam libero justo. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. 
        Bibendum at varius vel pharetra vel turpis nunc eget lorem. Aliquet porttitor lacus luctus accumsan tortor posuere. 
        Tempor nec feugiat nisl pretium fusce id velit. Cras adipiscing enim eu turpis egestas pretium aenean. Pretium fusce id velit ut. 
        Lectus magna fringilla urna porttitor rhoncus dolor purus non. Eu consequat ac felis donec et odio pellentesque diam volutpat. 
        Varius vel pharetra vel turpis nunc eget lorem dolor sed. Aliquam ultrices sagittis orci a scelerisque purus.
         Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris.
    </p>

    <table>
        <tr>
            <td class="sean-image">
                <img id="sean-image" src={require('./images/defaultProfilePic.jpg')} alt="Sean"/>
                <p>
                    <span class="sean-span"> Sean </span>
                    <br/>
                    Position
                </p> 
            </td>

            <td class="steven-image">
                <img id="steven-image" src={require('./images/defaultProfilePic.jpg')} alt="Steven"/>
                <p>
                    <span class="steven-span"> Steven </span>
                    <br/>
                    Position
                </p> 
            </td>

            <td class="gabriel-image">
                <img id="gabriel-image" src={require('./images/defaultProfilePic.jpg')} alt="Gabriel"/>
                <p>
                    <span class="gabriel-span"> Gabriel </span>
                    <br/>
                    Position
                </p> 
            </td>

            <td class="joshua-image">
                <img id="joshua-image" src={require('./images/defaultProfilePic.jpg')} alt="Joshua"/>
                <p>
                    <span class="joshua-span"> Joshua </span>
                    <br/>
                    Position
                </p> 
            </td>

        </tr>
    </table>
</div>
        </>
    )
}

export default About;