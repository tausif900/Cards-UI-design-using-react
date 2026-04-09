import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({ todoItems , onDeleteClick}) => {
    return (
        <>
            <div className="items-container">
                {todoItems.map((i) => (
                    <TodoItem 
                    key={i.name}
                    todoname={i.name} todoDate={i.dueDate} onDeleteClick={onDeleteClick}/>
                ))}
            </div>
        </>
    )
}

export default TodoItems
