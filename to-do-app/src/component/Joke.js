import React from "react"

class Joke extends React.Component{

    render() {
        return (
            <ul>
                <li style={{display: this.props.question ? "" : "none"}}>Question: {this.props.question}</li>
                <li>Punch: {this.props.punch}</li>
            </ul>
        )
    }
}

export default Joke