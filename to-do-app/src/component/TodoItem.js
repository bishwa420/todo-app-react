import React from "react"

import '../style/styles.css'

function TodoItem(props) {

    return (
        <div className="todo-item">
            <input type="checkbox"
                   id={props.data.id}
                   name={props.data.name}
                   value={props.data.value}
                    checked={props.data.checked}/>
            <label htmlFor={props.data.id}>{props.data.name}</label>
        </div>
    )
}

export default TodoItem