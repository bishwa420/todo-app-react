import React, {Component} from "react"

class AirlineFormPracticeUiComponent extends Component{

    render() {
        return (
            <div>
                <h1>Airline booking website</h1>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={this.props.data.firstName}
                        onChange={this.props.handleChange}/>
                </label>
                <br/>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={this.props.data.lastName}
                        onChange={this.props.handleChange}/>
                </label>

                <br/>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={this.props.data.age}
                        onChange={this.props.handleChange}
                    />
                </label>

                <br/>
                <label>
                    Gender:
                    <input
                        type = "radio"
                        name="gender"
                        value="male"
                        checked={this.props.data.gender === "male"}
                        onChange={this.props.handleChange}/>
                    Male
                </label>
                <label>
                    <input
                        type = "radio"
                        name="gender"
                        value="female"
                        checked={this.props.data.gender === "female"}
                        onChange={this.props.handleChange}/>
                    Female
                </label>

                <br/>

                <label>
                    Destination:
                    <select name="location" onChange={this.props.handleChange}>
                        <option value="UAE">UAE</option>
                        <option value="UBE">UBE</option>
                        <option value="UCE">UCE</option>
                    </select>
                </label>

                <br/>

                <label>
                    Diet restrictions:
                    <input
                        type="checkbox"
                        name="vegetarian"
                        checked={this.props.data.vegetarian}
                        onChange={this.props.handleChange}/> Veg
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="nonVegetarian"
                        checked={this.props.data.nonVegetarian}
                        onChange={this.props.handleChange}/> Non-veg
                </label>
            </div>
        )
    }
}

export default AirlineFormPracticeUiComponent