import React from 'react';


const Circle = (props) => {
    return (
        <button className='circle' name={props.id} onClick={(e) => props.clickHandler(e)} disabled={props.disabled}>{props.number}</button>
    )

}

// let intervalId = setInterval(timer, timeout)
// const timer = (props) => {
//     const start = props.start
//   if (start === true) {
//     for (const each of symbolsArray) {
//       each.disabled = false
//     }
//     startLabel.style.display = 'none'
//     endLabel.style.display = 'block'

//     end.checked = false
//     shuffle()
//     clearInterval(intervalId)
//     timeout -= 5

//     intervalId = setInterval(timer, timeout)

//     rounds++
//   } else if (end.checked === true) {
//     if (rounds >= 1) {
//       modalContainer.classList.add('visible')
//       gameScore.textContent = `You took ${point} shots.`
//       feedbackMessage()
//     }
//     endLabel.style.display = 'none'
//     startLabel.style.display = 'block'

//     clearInterval(intervalId)
//     score.textContent = point

//     for (const each of symbolsArray) {
//       each.disabled = true
//     }
//     rounds = 0
//     point = 0
//   }

//   if (rounds - point >= 4) {
//     end.checked = true
//     start.checked = false
//     clearInterval(intervalId)
//     // fastShutter.playbackRate = 1
//     timeout = 1000
//     slowShutter.play()
//     for (const each of symbolsArray) {
//       each.disabled = true
//     }
//     endLabel.style.display = 'none'
//     startLabel.style.display = 'block'

//     modalContainer.classList.add('visible')

//     gameScore.textContent = `You took ${point} shots.`

//     feedbackMessage()

//     score.textContent = 0

//     rounds = 0
//     point = 0
//   }
// }

const Circles = ({...props}) => {
    const circles = [

        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
       

    ]
    return(

        <div className='circles-container'>
            {circles.map((circle) => <Circle key={circle.id} number={circle.id} clickHandler={props.clickHandler} id={circle.id} disabled={props.disabled}/>)}

        </div>
    )
}

export default Circles;