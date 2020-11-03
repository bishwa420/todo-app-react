import React from "react"

import Header from "./component/Header"
import TodoItem from "./component/TodoItem"

function App() {
  return (
      <div className="todo-list">
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
      </div>
  )
}

export default App