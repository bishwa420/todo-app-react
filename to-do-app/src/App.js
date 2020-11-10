import React from "react"


import ConditionalRenderingPractice from "./component/ConditionalRenderingPractice";


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
            </div>
        )
    }

}

export default App