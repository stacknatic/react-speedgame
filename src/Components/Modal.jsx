import React from 'react';
import camera from '../camera.jpg'

const Modal = (props) => {
    return(
        <div className="modal-container">
      <div className="modal-box">
        <span className="modal-close-button" onClick={props.click}>x</span>
        <h2 id="game-score">score: {props.score}</h2>
        <p className="feedback">{props.feedback}</p>
        <div>
          <figure>

            <img className="camera" src={camera} alt="camera lens" />
            <figcaption>Photo by ShareGrid on Unsplash

            </figcaption>
          </figure>
        </div>


      </div>

    </div>
    )
}

export default Modal;