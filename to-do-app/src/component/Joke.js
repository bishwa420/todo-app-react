import React from "react"

function Joke(props) {
    return (
        <ul>
            <li style={{display: props.question ? "" : "none"}}>Question: {props.question}</li>
            <li>Punch: {props.punch}</li>
        </ul>
    )
}

export default Joke