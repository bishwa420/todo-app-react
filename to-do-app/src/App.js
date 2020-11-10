import React from "react"

import TodoItem from "./component/TodoItem"
import todoItemData from "./component/todoItemData"


class App extends React.Component{

    constructor() {
        super()
        this.state = {
            todos: todoItemData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {

        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoData = this.state.todos.map(d => <TodoItem
            key = {d.key}
            data = {d}
            handleChange = {this.handleChange}/>)
        return (
            <div className="todo-list">
                {todoData}
            </div>
        );
    }

}

export default App