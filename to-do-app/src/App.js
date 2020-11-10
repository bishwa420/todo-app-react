import React from "react"


import ConditionalRendering from "./component/ConditionalRendering";


class App extends React.Component{

    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <h1>Loading...</h1> : <ConditionalRendering/>}
            </div>
        )
    }

}

export default App