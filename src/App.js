import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    monsters: [
      { name: "Frankenstain", age: 100 },
      { name: "Dracula", age: 1000 },
      { name: "Zombie", age: 500 }
    ]
  };
  render() {
    return (
      <div className="App">
        {this.state.map(monster => (
          <h1>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
