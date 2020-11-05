import React from "react"

import Joke from "./component/Joke"
import TodoItem from "./component/TodoItem"
import JokeData from "./component/JokeData"

function App() {
  const jokeData = JokeData.map(d => <Joke key = {d.id} question = {d.question} punch = {d.punch}/>)
  return (
      <div className="todo-list">
          {jokeData}
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