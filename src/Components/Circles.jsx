import React from 'react';


const Circle = (props) => {
    return (
        <button className='circle' onClick={props.clickHandler}>{props.number}</button>
    )

}

const Circles = (props) => {
    const circles = [

        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
       

    ]
    return(
        <div>
            {circles.map((circle) => <Circle key={circle.id} number={circle.id} clickHandler={props.clickHandler}/>)}

        </div>
    )
}

export default Circles;