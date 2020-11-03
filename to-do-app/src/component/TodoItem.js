import React from "react"

import '../style/styles.css'

function TodoItem() {

    return (
        <div className="todo-item">
            <input type="checkbox" id="swimming" name="swimming" value="swimming"/>
            <label htmlFor="swimming">Swimming</label>
        </div>
    )
}

export default TodoItem