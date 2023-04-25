import "./App.css";
import "./Circles.css";
import React, { Component } from "react";
import Circle from "./Components/Circle";

let circles = [
  { id: 1, value: 1, disabled: true, className: "circle one", active: false},
  { id: 2, value: 2, disabled: true, className: "circle two", active: false},
  { id: 3, value: 3, disabled: true, className: "circle three", active: false},
  { id: 4, value: 4, disabled: true, className: "circle four", active: false},
];

class App extends Component {
  state = {
    score: 0,
    start: false,
    startButton: false,
    endButton: true,
    disabled: true,
    value: "",
    circles: circles

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
  // disableOthers(){
  //   circles = this.state.circles
  //   this.state.circles.map((circle) => {
  //     return this.setState({
  //       [circle]: (circle.disabled = true),
      
  //     });
  //   });
  // }
  deactivateCircles(){
    circles = this.state.circles
    this.state.circles.map((circle) => {
      return this.setState({
        circle: circle.active = false,
      
      });
    });
  }
 
 

  randomValue;
  randomNumber = () => {
    this.deactivateCircles()
    let button;
    // this.disableAll()
    // let newNumber = Math.floor(Math.random(circles.length) * 4);
    
    

    switch (this.randomValue) {
      case 0:
        button = 0;
        this.setState({
          // [circles]: (circles[0].disabled = false),
          [circles]: (circles[0].active = true),
          
          
        });
      
        break;

      case 1:
        button = 1;
        this.setState({
          // [circles]: (circles[1].disabled = false),
          [circles]: (circles[1].active = true),
          
        });
       
        break;

      case 2:
        button = 2;
        this.setState({
          // [circles]: (circles[2].disabled = false),
          [circles]: (circles[2].active = true),
          
        });
     
        break;

      case 3:
        button = 3;
        this.setState({
          // [circles]: (circles[3].disabled = false),
          [circles]: (circles[3].active = true),
          
        });
       
        break;

      default:
        // active = 5;
        // this.setState.disabled = true;
      }
      function uniqueNumber() {
        let newNumber = Math.floor(Math.random(circles.length) * 4);
       
        while (newNumber === button) {
          newNumber = Math.floor(Math.random(circles.length) * 4);
        }
        return newNumber;
      }
      this.randomValue = uniqueNumber();
      
      console.log(`active number ${button}`);
      // console.log(`randomValue ${this.randomValue}`);
    
    }
    


  clickHandler = (e) => {
    e.target.disabled = true;
    // e.target.className = "circle active";
    this.setState({
      score: this.state.score + 10,
      value: "clicked",
      // disabled: true
    });
    console.log(e.target.value);
  };
  startHandler = (e) => {
    if (e.target.name === "start") {
      this.setState({
        startButton: true,
        endButton: false,
        start: true,
      });
      this.disableAll()
      clearInterval(this.intervalId);
        this.intervalId = setInterval(this.randomNumber, 1000)
      
    }
     else {
      this.deactivateCircles()
       
       this.setState({
         endButton: true,
         startButton: false,
         start: false,
        });

        this.disableAll();
        clearInterval(this.intervalId);

    }
  };

  Button = () => {
    return (
      <div className="buttons">
        <button
          name="start"
          disabled={this.state.startButton}
          onClick={this.startHandler}
        >
          Start
        </button>
        <button
          name="off"
          disabled={this.state.endButton}
          onClick={this.startHandler}
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
              active={circle.active}
              value={circle.value}
              id={circle.id}
              clickHandler={this.clickHandler}
              disabled={circle.disabled}

              className={circle.className}

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
