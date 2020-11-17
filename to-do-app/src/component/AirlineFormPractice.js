import React, {Component} from "react"
import AirlineFormPracticeUiComponent from "./AirlineFormPracticeUiComponent";

class AirlineFormPractice extends Component{

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            vegetarian: "",
            nonVegetarian: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {

        const {name, value, type, checked} = event.target

        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name] : value})
    }

    render() {
        return (
            <AirlineFormPracticeUiComponent
                data = {this.state}
                handleChange = {this.handleChange}/>
        )
    }
}

export default AirlineFormPractice