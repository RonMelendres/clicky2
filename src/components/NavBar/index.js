import React from "react";
import "./NavBarStyle.css";
// import App from "../../App";

function NavBar(props) {
    return (
        <div className="container">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">

                <div>FE: Three Houses Click Game</div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="nav">
                        <li className="nav-item" onClick={props.handleIncrement}>
                            Score: {props.score} |
                        </li>
                        <li className="nav-item" onClick={props.handleIncrement}>
                            | Top Score: {props.highScore}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar
