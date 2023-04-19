import './App.css';
import './Circles.css';
import React, { Component } from 'react';
import Circles from './Components/Circles';



class App extends Component {
  
  state ={
    score: 0,
    start: false,
    startButton: false,
    endButton: true,
    disabled: true,
    circle1: '',
    circle2: '',
    circle3: '',
    circle4: ''
  };
  clickHandler = (e) => {
    this.setState({
      score: this.state.score+10
    
    });
    console.log(e.target.name)
    // e.target.disabled = true
  }
  powerHandler = (e) => {
    if(e.target.name=='start'){
      this.setState({
        startButton: true,
        endButton: false,
        start: true,
        disabled: false
        // stop: false
      })
      console.log('on')
    } else{
      this.setState({
        endButton: true,
        startButton: false,
        start: false,
        disabled: true
        

      })
      console.log('off')
    }
    
    
  }
  Button = () => {
      return(
        <div>
  
        <button name="start" disabled={this.state.startButton}onClick={this.powerHandler}>Start</button>
        <button name="off" disabled={this.state.endButton} onClick={this.powerHandler}>End</button>
        </div>
  
      )
  }

  render(){

    return (
      <div className="App">
        <h1>Speedgame</h1>
        <p>Score: <span>{this.state.score}</span></p>

        <Circles clickHandler={this.clickHandler} disabled={this.state.disabled}/>
        <this.Button />
       
      </div>
    );
  }
}

export default App;
