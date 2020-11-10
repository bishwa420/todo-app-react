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
                       key = {this.props.data.key}
                       id={this.props.data.id}
                       name={this.props.data.name}
                       value={this.props.data.value}
                       checked={this.props.data.completed}
                       onChange={() => this.props.handleChange(this.props.data.id)}/>
                <label htmlFor={this.props.data.key}
                       style={this.props.data.completed ? {color: 'green'} : {color: 'red'}}>
                    {this.props.data.name}</label>
            </div>
        )
    }
}


export default TodoItem