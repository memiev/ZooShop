import React from "react";
import mainPhoto from "../assets/mainPhoto.jpg";

export const Home = () => {
    return (
        <div className="homeWrap">

            <div clasName="homePage">
                <h1>Welcome to Smile Pet</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ad itaque veritatis cumque autem nihil ab asperiores
                    possimus ducimus libero consequuntur unde, praesentium
                    reiciendis minima non ea voluptate porro consequatur
                    corporis adipisci veniam. Laborum quibusdam error cupiditate
                    a, maxime similique.Veritatis cumque autem nihil ab asperiores
                    possimus ducimus libero consequuntur unde, praesentium
                    reiciendis minima non ea voluptate porro consequatur
                    corporis adipisci veniam. Laborum quibusdam error cupiditate
                    a, maxime similique.
                </p>
            </div>

            <div className="mainPhoto">
                <img src={mainPhoto} alt="dog" />
            </div>

        </div>
    );
};
