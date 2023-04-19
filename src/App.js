import './App.css';
import './Circles.css';
import React, { Component } from 'react';
import Circles from './Components/Circles';



class App extends Component {
  Button = () => {
      return(
        <div>
  
        <button>Start</button>
        <button>End</button>
        </div>
  
      )
  }

  clickHandler = () => {
    console.log('i was clicked')
  }
  render(){

    return (
      <div className="App">
        <h1>Speedgame</h1>
        <p>Score: <span>0</span></p>
        <div className='circles-container'>

        <Circles clickHandler={this.clickHandler}/>
        </div>
        <this.Button />
       
      </div>
    );
  }
}

export default App;
