import React from "react"

import '../style/styles.css'

function TodoList() {
    return (
        <div className="TodoList">
            <input type="checkbox" id="swimming" name="swimming" value="swimming"/>
            <label htmlFor="swimming">Swimming</label>
            <br/>
            <input type="checkbox" id="meditation" name="meditation" value="meditation"/>
            <label htmlFor="meditation">Meditation</label>
            <br/>
            <input type="checkbox" id="drinking" name="drinking" value="drinking"/>
            <label htmlFor="drinking">Drinking</label>
            <br/>
        </div>
    )
}

export default TodoList