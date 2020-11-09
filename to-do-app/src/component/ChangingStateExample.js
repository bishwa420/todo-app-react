import React, {Component} from "react"

class ChangingStateExample extends Component{

    constructor() {
        super()
        this.state = {
            count: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(
            prevState => {
                return {
                    count: prevState.count + 1
                }
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default ChangingStateExample