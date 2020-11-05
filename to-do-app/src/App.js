import React from "react"

import Joke from "./component/Joke"
import TodoItem from "./component/TodoItem"
import JokeData from "./component/JokeData"
import productData from "./component/ProductData"
import Product from "./component/Product"

function App() {
    const jokeData = JokeData.map(d => <Joke key = {d.id} question = {d.question} punch = {d.punch}/>)
    const pd = productData.map(d => <Product key = {d.id}
                                                      name = {d.name}
                                                        description = {d.description}
    price = {d.price}/>)
  return (
      <div className="todo-list">
          {jokeData}
          {pd}
          <TodoItem
              id = "swimming"
              name = "swimming"
              value = "swimming"/>
          <TodoItem
              id = "singing"
              name = "singing"
              value = "singing"/>
          <TodoItem
              id = "playing"
              name = "playing"
              value = "playing"/>
          <TodoItem
              id = "dancing"
              name = "dancing"
              value = "dancing"/>
      </div>
  )
}

export default App