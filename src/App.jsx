import './App.css';
import './Circles.css';
import React, { Component } from 'react';
import Circle from './Components/Circle';

class App extends Component {
  
  state ={
    score: 0,
    start: false,
    startButton: false,
    endButton: true,
    disabled: true,
    value: '',
    circles: [
      {id: 1, value:5},
      {id: 2, value:6},
      {id: 3, value:7},
      {id: 4, value:9}
    ]
  };

  randomNumber = () => {
    this.setState({
      circles: [
        {id: 1, value:3},
        {id: 2, value:6},
        {id: 3, value:7},
        {id: 4, value:9}
      ]
    })
  }

  clickHandler = (e) => {
    e.target.className='circle active'
    this.setState({
      score: this.state.score+10,
      value: 'clicked',
      disabled: true
      
    });
    console.log(e.target.value)

    
    // e.target.disabled = true
  }
  powerHandler = (e) => {
    if(e.target.name==='start'){
      this.setState({
        startButton: true,
        endButton: false,
        start: true,
        disabled: false,

      })
      console.log('on')
      console.log(this.state.circles[0].value)

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
        <div className='buttons'>
  
        <button name="start" disabled={this.state.startButton}onClick={this.powerHandler}>Start</button>
        <button name="off" disabled={this.state.endButton} onClick={this.powerHandler}>End</button>
        </div>
  
      )
    } 
  
  Circles = () => {
    return(

      this.state.circles.map((circle) => {
        return (
          <div key={circle.id}>

            <Circle 
            value={circle.value}
            id={circle.id}
            clickHandler={this.clickHandler}
            disabled={this.state.disabled}
            />
            </div>
        )
      })
    )

  }
  
 
  render(){
    

    return (
      
      <div>

      <div className="App">
        <h1>Speedgame</h1>
        <p>Score: <span>{this.state.score}</span></p>


      </div>
      <div className='circles-container'>
        <this.Circles 
        />
        

      </div>
        <this.Button />
      </div>
    );
  }
}

export default App;
