import React, {Component} from "react"

class FormPractice extends Component{

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {

        const {name, value} = event.target
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form>

                <input name={"firstName"} onChange={this.handleInputChange}/>

                <input name={"lastName"} onChange={this.handleInputChange}/>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default FormPractice