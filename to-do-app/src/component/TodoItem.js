import React from "react"

import '../style/styles.css'


class TodoItem extends React.Component{

    constructor() {
        super()
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox"
                       id={this.props.data.key}
                       name={this.props.data.name}
                       value={this.props.data.value}
                       checked={this.props.data.checked}
                       onChange={() => this.props.handleChange(this.props.data.key)}/>
                <label htmlFor={this.props.data.key}>{this.props.data.name}</label>
            </div>
        )
    }
}


export default TodoItem