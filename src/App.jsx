import "./App.css";
import "./Circles.css";
import './Modal.css';
import React, { Component } from "react";
import Circle from "./Components/Circle";
import Modal from "./Components/Modal";

let circles = [
  { id: 1, value: 0, disabled: true, className: "circle one", active: false},
  { id: 2, value: 1, disabled: true, className: "circle two", active: false},
  { id: 3, value: 2, disabled: true, className: "circle three", active: false},
  { id: 4, value: 3, disabled: true, className: "circle four", active: false},
];

class App extends Component {
  state = {
    score: 0,
    start: false,
    startButton: false,
    endButton: true,
    disabled: true,
    value: "",
    activeNumber: 5,
    circles: circles,
    gameover: false,
    timeout: 1000,
    showModal: false

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
  
  deactivateCircles(){
    circles = this.state.circles
    this.state.circles.map((circle) => {
      return this.setState({
        circle: circle.active = false,

      });
    });
  }

  randomValue;
  rounds = 0;
  randomNumber = () => {
    
      this.rounds = this.rounds + 1;
      this.checkScores(this.rounds, this.misses)
      this.deactivateCircles()
      let activeNumber;

    switch (this.randomValue) {
      case 0:
        activeNumber = 0;
        this.setState({
          [circles]: (circles[0].active = true),
          activeNumber: 0
        });

        break;

        case 1:
          activeNumber = 1;
          this.setState({
            [circles]: (circles[1].active = true),
            activeNumber: 1
          });
          break;

          case 2:
            activeNumber = 2;
            this.setState({
              [circles]: (circles[2].active = true),
              activeNumber: 2
            });
            break;

            case 3:
              activeNumber = 3;
              this.setState({
                [circles]: (circles[3].active = true),
                activeNumber: 3
              });
              break;

              default:
                this.deactivateCircles()

              }
              function uniqueNumber() {
                let newNumber = Math.floor(Math.random(circles.length) * 4);

                while (newNumber === activeNumber) {
                  newNumber = Math.floor(Math.random(circles.length) * 4);
                }
                return newNumber;
              }
              this.randomValue = uniqueNumber();


             
              console.log(`active number ${activeNumber}`);
              console.log("round is " + this.rounds);

              clearInterval(this.intervalId);
    this.intervalId = setInterval(this.randomNumber, this.state.timeout)

    this.setState({

      timeout: this.state.timeout-10
    })



            }
            misses = 0;
  clickHandler = (e) => {
    if(+this.state.activeNumber === +e.target.value){
      this.setState({
        score: this.state.score + 10,
        value: "clicked",
      });
    }
    else{
      this.misses = this.misses + 1;
      if(this.misses >= 3){
        alert('game over')
        window.location.reload()
      }
    }
    console.log('misses ' + this.misses)
  };

  startHandler = (e) => {
    if (e.target.name === "start") {
      this.misses = 0;
      this.rounds = 0;
      this.setState({
        startButton: true,
        endButton: false,
        start: true,
      });
      this.disableAll()
      // clearInterval(this.intervalId);
        this.intervalId = setInterval(this.randomNumber, this.state.timeout)

    }
     else {
      

        // alert('Thanks for playing');
        this.disableAll()
        this.setState({
          showModal: true
        })
        // window.location.reload()

    }
  };

  checkScores(r, m){
    if(r - m > 4){
      this.disableAll()
      //  alert('good job');
       this.setState({
        showModal: true
      })
      //  window.location.reload()
    }

  }

  modalHandler = (e) => {
    e.preventDefault();
    // this.setState({
    //   // showModal: !this.state.showModal,
    // });
    window.location.reload()
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
          {this.state.showModal && (

        <Modal 
        score={this.state.score}
        click={this.modalHandler}
        />
          )}
          {/* {this.state.showModal && (
          <Modal
            click={this.modalHandler}
            {...this.state} // better than listing 
          />
        )} */}
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
