import React, {Component} from "react"

class FormPractice extends Component{

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {

        const {name, value, type, checked} = event.target

        console.log("checked: " + checked)

        type === "checkbox" ? this.setState({isFriendly: checked})  :this.setState({[name]: value})
    }

    render() {
        return (
            <form>

                <input name={"firstName"} onChange={this.handleInputChange}/>

                <br/>

                <input name={"lastName"} onChange={this.handleInputChange}/>

                <br/>

                <label>
                <input type="checkbox"
                       checked={this.state.isFriendly}
                        onChange={this.handleInputChange}/>
                Is friendly?
                </label>

                <br/>
                <label>
                    <input
                        type="radio"
                        name={"gender"}
                        value={"male"}
                        onChange={this.handleInputChange}/>
                        Male
                </label>
                <label>
                    <input
                        type="radio"
                        name={"gender"}
                        value={"female"}
                        onChange={this.handleInputChange}/>Female
                </label>

                <br/>

                <label>
                    Favorite color:
                    <select value={this.state.favColor}
                            name={"favColor"}
                            onChange={this.handleInputChange}>
                        <option value={"blue"}>Blue</option>
                        <option value={"green"}>Green</option>
                        <option value={"red"}>Red</option>
                        <option value={"yellow"}>Yellow</option>
                    </select>
                </label>

                <h1>Name: {this.state.firstName} {this.state.lastName}</h1>
                <br/>
                <h3>Gender: {this.state.gender}</h3>

            </form>
        )
    }
}

export default FormPractice