import React, {Component} from "react"
import TodoItem from "./TodoItem"
import todoItemData from "./todoItemData"

class ConditionalRendering extends Component{

    constructor() {
        super()
        this.state = {
            todos: todoItemData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {

        console.log('handle change method called')
        const updatedTodos = this.state.todos.map(todo => {

            console.log('todo.id: ' + todo.id + ' id: ' + id)
            if(todo.id === id) {
                todo.completed = !todo.completed
                console.log('id: ' + id + ' completed: ' + todo.completed)
            }
            return todo
        })
        this.setState({
            todos: updatedTodos
        }, () => console.log('state: ' + JSON.stringify(this.state.todos)))
    }


    render() {
        const todoData = this.state.todos.map(d => <TodoItem
            key = {d.id}
            data = {d}
            handleChange = {this.handleChange}/>)
        return (
            <div className="todo-list">
                {todoData}
            </div>
        );
    }
}

export default ConditionalRendering