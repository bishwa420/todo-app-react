import React from "react"

import '../style/styles.css'

class TodoItem extends React.Component{

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox"
                       id={this.props.data.id}
                       name={this.props.data.name}
                       value={this.props.data.value}
                       checked={this.props.data.checked}/>
                <label htmlFor={this.props.data.id}>{this.props.data.name}</label>
            </div>
        )
    }
}

export default TodoItem