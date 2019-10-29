import React from "react";
import "./CharacterStyle.css";

function CharacterCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <span onClick={() => props.guessCharacter(props.id)} className="guess">
                x
            </span>

        </div>
    );
}

export default CharacterCards;

