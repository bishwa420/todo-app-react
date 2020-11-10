import React, {Component} from "react"

class ConditionalRenderingPractice extends Component{

    constructor() {
        super()
        this.state = {
            logInInfo: "You're logged out"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        this.setState(prevState => {

            let logInInfo = "You're logged out"
            if(prevState.logInInfo === "You're logged out")
                logInInfo = "You're logged in"
            return {
                logInInfo: logInInfo
            }
        }, () => console.log("State updated successfully"))
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.logInInfo}
                </h1>
                <button onClick={this.handleClick}>
                    {this.state.logInInfo === "You're logged out" ? "Login" : "Logout"}
                </button>
            </div>
        )
    }
}

export default ConditionalRenderingPractice