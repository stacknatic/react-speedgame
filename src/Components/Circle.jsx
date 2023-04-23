import React from 'react';


const Circle = (props) => {
  return (

    <button className='circle' disabled={props.disabled} onClick={props.clickHandler} id={props.id} value={props.value}>
        
        <p>{props.value}</p>
     
    </button>
  );
};



export default Circle;