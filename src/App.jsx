import "./App.css";
import "./Circles.css";
import React, { Component } from "react";
import Circle from "./Components/Circle";

const circles = [
  { id: 1, value: 3, disabled: true },
  { id: 2, value: 6, disabled: true },
  { id: 3, value: 7, disabled: true },
  { id: 4, value: 9, disabled: true },
];

class App extends Component {
  state = {
    score: 0,
    start: false,
    startButton: false,
    endButton: true,
    disabled: true,
    value: "",
    circles: circles,
  };

  disableAll = () => {
    if (this.state.start === true) {
      this.state.circles.map((circle) => {
        return this.setState({
          circle: (circle.disabled = true),
        });
      });
    } else {
      this.state.circles.map((circle) => {
        return this.setState({
          circle: (circle.disabled = false),
        });
      });
    }
  };
  disableOthers() {
    this.state.circles.map((circle) => {
      return this.setState({
        circle: (circle.disabled = true),
      });
    });
  }

  randomNumber = () => {
    let active = 0;
    this.disableOthers()


    switch (uniqueNumber()) {
      case 0:
        active = 0;
        // circles[0].disabled=false
        this.setState({
          [circles]: (circles[0].disabled = false),
        });
        // this.disableAll()
        console.log("value is " + this.state.circles[0].value);

        break;
      case 1:
        active = 1;
        // circles[1].disabled=false

        this.setState({
          [circles]: (circles[1].disabled = false),
        });
        // this.disableAll()

        console.log("value is " + this.state.circles[1].value);

        break;

      case 2:
        active = 2;
        // circles[2].disabled=false

        this.setState({
          [circles]: (circles[2].disabled = false),
        });
        // this.disableAll()
        console.log("value is " + this.state.circles[2].value);

        break;

      case 3:
        active = 3;
        // circles[3].disabled=false

        this.setState({
          [circles]: (circles[3].disabled = false),
        });
        // this.disableAll()
        console.log("value is " + this.state.circles[3].value);

        break;

      default:
        // this.disableAll()
        active = 5;
        this.setState.disabled = true;
      }
      function uniqueNumber() {
        let newNumber = Math.floor(Math.random(circles.length) * 4);
        while (newNumber === active) {
          newNumber = Math.floor(Math.random(circles.length) * 4);
          console.log("trying");
        }
        return newNumber;
      }
      let randomValue = uniqueNumber();
      
      console.log(`active number ${active}`);
      console.log(`randomValue ${randomValue}`);
    
    }
    


  clickHandler = (e) => {
    e.target.disabled = true;
    e.target.className = "circle active";
    this.setState({
      score: this.state.score + 10,
      value: "clicked",
      // disabled: true
    });
    console.log(e.target.value);
  };
  powerHandler = (e) => {
    if (e.target.name === "start") {
      this.setState({
        startButton: true,
        endButton: false,
        start: true,
      });
      console.log("on");
      // this.randomNumber();
      clearInterval(this.intervalId);
        this.intervalId = setInterval(this.randomNumber, 3000)

    

      
    }
     else {
      this.setState({
        endButton: true,
        startButton: false,
        start: false,
      });
      this.randomNumber();
      this.disableAll();

      console.log("off");
    }
  };

  Button = () => {
    return (
      <div className="buttons">
        <button
          name="start"
          disabled={this.state.startButton}
          onClick={this.powerHandler}
        >
          Start
        </button>
        <button
          name="off"
          disabled={this.state.endButton}
          onClick={this.powerHandler}
        >
          End
        </button>
      </div>
    );
  };

  render() {
    const Circles = () => {
      const circles = this.state.circles.map((circle) => {
        return (
          <div key={circle.id}>
            <Circle
              value={circle.value}
              id={circle.id}
              clickHandler={this.clickHandler}
              disabled={circle.disabled}
            />
          </div>
        );
      });
      return circles;
    };

    return (
      <div>
        <div className="App">
          <h1>Speedgame</h1>
          <p>
            Score: <span>{this.state.score}</span>
          </p>
        </div>
        <div className="circles-container">
          <Circles />
        </div>
        <this.Button />
      </div>
    );
  }
}

export default App;
