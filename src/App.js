import React, { Component } from "react";
import Characters from "./components/CharacterCards";
// import Shuffle from "./components/Shuffle";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";
import characters from "./characters.json";

class App extends Component {
    state = {
        characters,
        score: 0,
        highScore: 0,
        alert: 0,
        success: 0,
        guessedCharacters: []
    };

    guessCharacter = id => {
        let guessedCharacters = this.state.guessedCharacters;
        let score = this.state.score;
        let highScore = this.state.highScore;
        this.setState({
            alert: 0
        });

        if (guessedCharacters.indexOf(id) === -1) {
            guessedCharacters.push(id);
            console.log(guessedCharacters);
            this.handleIncrement();
            this.shuffleCharacters();
        } else if (this.state.score === 12) {
            this.setState({
                success: 1,
                score: 0,
                guessedCharacters: []
            });
        } else {
            this.setState({
                score: 0,
                guessedCharacters: []
            });
            this.setState({
                alert: 1
            });
        };
        if (score > highScore) {
            this.setState({
                highScore: score
            });
        };
    }

    handleIncrement = () => {
        this.setState({
            score: this.state.score + 1
        });
    };

    shuffleCharacters = () => {
        this.characters = characters;
        this.count = function () {
            return this.characters.length;
        }
        for (var i = this.characters.length - 1; i >= 0; i--) {
            var randIndex = Math.floor(Math.random() * (i + 1));
            var tempCharacter = this.characters[i];
            this.characters[i] = this.characters[randIndex];
            this.characters[randIndex] = tempCharacter;
        }
        this.setState({
            characters
        });
    };

    render() {
        return (
            <div className="container">

                <NavBar
                    score={this.state.score}
                    highScore={this.state.highScore}
                    handleIncrement={this.handleIncrement}
                />
                <br></br>
                <br></br>

                <Jumbotron />

                <Wrapper>

                    {this.state.characters.map(character => (
                        <Characters
                            guessCharacter={this.guessCharacter}
                            id={character.id}
                            key={character.id}
                            // name={character.name}
                            image={character.image} 
                        />
                    ))}

                </Wrapper>
            </div>
        );
    }
}

export default App;