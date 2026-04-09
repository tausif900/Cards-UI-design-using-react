import AppName from "./components/AppName"
import AppTodo from "./components/AppTodo"
import './App.css'
import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"
import { useState } from "react"
import WelcomeMsg from "./components/WelcomeMsg"

function App() {
  const [todoItems, setTodoItems] = useState([])
  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDate
    }];
    setTodoItems(newTodoItems)
  }
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMsg />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>

    </>
  )
}

export default App
