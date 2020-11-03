import React from "react"

import '../style/styles.css'

function TodoItem(props) {

    return (
        <div className="todo-item">
            <input type="checkbox" id={props.id} name={props.name} value={props.value}/>
            <label htmlFor={props.id}>{props.name}</label>
        </div>
    )
}

export default TodoItem