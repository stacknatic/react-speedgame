import React from 'react';


const Circle = (props) => {
  if(props.active===true){
    return(
      <button className={`${props.className} ${props.active ? "active" : ""}`} disabled={false} onClick={props.clickHandler} id={props.id} value={props.value}> 
        
      <p>{props.value}</p>
   
  </button>
    ) 
  } else{

    return (
  
      <button className={props.className} disabled={props.disabled} onClick={props.clickHandler} id={props.id} value={props.value}>
          
          <p>{props.value}</p>
       
      </button>
    );
  }
};



export default Circle;