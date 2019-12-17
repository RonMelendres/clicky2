import React from "react";
import "./CharacterStyle.css";

function CharacterCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img onClick={() => props.guessCharacter(props.id)} className="guess" alt={props.name} src={props.image} />
            </div>
            

        </div>
    );
}

export default CharacterCards;

/* <span onClick={() => props.guessCharacter(props.id)} className="guess">
                x
            </span> */
