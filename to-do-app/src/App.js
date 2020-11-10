import React from "react"


import ConditionalRenderingPractice from "./component/ConditionalRenderingPractice"
import ConditionalRendering from "./component/ConditionalRendering"


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
                <ConditionalRenderingPractice/>
                <ConditionalRendering/>
            </div>
        )
    }

}

export default App