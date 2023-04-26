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
    showModal: false,
    misses: 0,
    rounds: 1,
    feedback: ''

  };

  feedback = () => {
    let score = this.state.score
    if(score <= 10){
      this.setState({
        feedback: 'Common, you can definitely do better.'
      })
    }
    else if(score > 10 && score < 70){
      this.setState({
        feedback: 'Not bad'
      })
    }
    else if(score > 70 && score < 120){
      this.setState({
        feedback: 'Good shots'
      })
    }
    else{
      this.setState({
        feedback: 'Nice and steady! Paparazzi style'
      })
    }
   

    
  }

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
    // circles = this.state.circles
    this.state.circles.map((circle) => {
      return this.setState({
        circle: circle.active = false,

      });
    });
  }

  randomValue;
  // rounds = 0;
  randomNumber = () => {
    // this.setState({
    //   rounds: this.state.rounds + 1
    // })
    
      // this.state.rounds = this.state.rounds + 1;
      // this.checkScores(this.rounds, this.misses)
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

              clearInterval(this.intervalId);
    this.intervalId = setInterval(this.randomNumber, this.state.timeout)

    this.setState({

      timeout: this.state.timeout-20,
      rounds: this.state.rounds + 1
    })
    this.checkScores(this.state.rounds, this.state.misses)



            }
            // misses = 0;
  clickHandler = (e) => {
   
    if(+this.state.activeNumber === +e.target.value){
      this.setState({
        active: false,
        score: this.state.score + 10,
        // value: "clicked",
      });
      
    }
    else{
      this.setState({

        misses: this.state.misses + 1
      })
      if(this.state.misses >= 2){
        // alert('game over')
        // this.randomNumber = null
        // clearInterval(this.intervalId)
        // this.feedback()
        // this.setState({
         
        //   showModal: true,
        //   endButton: true,
        //   disable: false 
        // })

        this.feedback()
        this.setState({
            startButton: true,
            endButton: true,
            start: false,
            // timeout: 0,
            // misses: 0,
            // rounds: 0,
            showModal: true
            // disable: true
          });
          clearInterval(this.intervalId)
          this.deactivateCircles()
          this.disableAll()
      }
    }
  };

  startHandler = (e) => {
    if (e.target.name === "start") {
      // this.misses = 0;
      // this.rounds = 0;
      this.setState({
        startButton: true,
        endButton: false,
        start: true,
        misses: 0,
        rounds: 0
      });
      this.disableAll()
      clearInterval(this.intervalId);
        this.intervalId = setInterval(this.randomNumber, this.state.timeout)

    }
     else {
      

        // alert('Thanks for playing');
        clearInterval(this.intervalId)
        this.setState({
          startButton: false,
          endButton: true,
          // start: false,
          // disable: true
        });
        this.deactivateCircles()
        this.disableAll()
        this.feedback()
        this.setState({
          showModal: true
        })

    }
  };

  checkScores(r, m){
    if(r - m >= 3){
      this.feedback()
      this.setState({
          startButton: true,
          endButton: true,
          start: false,
          // timeout: 0,
          // misses: 0,
          // rounds: 0,
          showModal: true
          // disable: true
        });
        clearInterval(this.intervalId)
        this.deactivateCircles()
        this.disableAll()
     
      // this.setState({
      //   showModal: true
      // })
      
    }

  }

  modalHandler = (e) => {
    e.preventDefault();
    // clearInterval(this.intervalId)
    
    this.setState({
      showModal: !this.state.showModal,
      start: false,
      endButton: true,
      misses: 0,
      rounds: 0,
      score: 0,
      timeout: 1000,
      startButton: false


    });

  };

  Button = () => {
    return (
      <div className="buttons">
        <button 
          className={`start-button ${this.state.start ? "hide" : ""}`}
          // className="start-button"
          name="start"
          disabled={this.state.startButton}
          onClick={this.startHandler}
        >
          Start
        </button>
        <button 
          className={`end-button ${!this.state.start ? "hide" : ""}`}
          // className="end-button"
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
        feedback = {this.state.feedback}
        />
          )}
         
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
