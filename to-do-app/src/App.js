import React from "react"

import Joke from "./component/Joke"
import TodoItem from "./component/TodoItem"

function App() {
  return (
      <div className="todo-list">
          <Joke question="How do you do?" punch="Fine!"/>
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