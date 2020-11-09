import React from "react"

import Joke from "./component/Joke"
import TodoItem from "./component/TodoItem"
import JokeData from "./component/JokeData"
import productData from "./component/ProductData"
import Product from "./component/Product"
import todoItemData from "./component/todoItemData"
import ChangingStateExample from "./component/ChangingStateExample"

/*
function App() {
    const jokeData = JokeData.map(d => <Joke key = {d.id}
                                             question = {d.question}
                                             punch = {d.punch}/>)
    const pd = productData.map(d => <Product key = {d.id}
                                             name = {d.name}
                                             description = {d.description}
                                             price = {d.price}/>)


  return (
      <div className="todo-list">
          {todoData}
      </div>
  )
}
*/

class App extends React.Component{

    constructor() {
        super();
        this.state = {
            name: "Bishwajit Purkaystha",
            age: "21",
            loggedIn: false,
            todoData: todoItemData.map(d => <TodoItem data = {d} />)
        }
        this.handleMouseOverOnImage = this.handleMouseOverOnImage.bind(this);
    }

    handleMouseOverOnImage() {
        console.log("Image is hovered...")
    }

    render() {
        //const todoData = todoItemData.map(d => <TodoItem data = {d}/>)
        return (
            <div className="todo-list">
                <ChangingStateExample/>
                <img src="https://www.fillmurray.com/200/100"
                    onMouseOver={this.handleMouseOverOnImage}/>
                <br/><br/>
                <h1>You are logged {this.state.loggedIn ? "in" : "out"}</h1>
                <h3>Name is: {this.state.name}, age is: {this.state.age} old</h3>
                {this.state.todoData}
            </div>
        );
    }

}

export default App