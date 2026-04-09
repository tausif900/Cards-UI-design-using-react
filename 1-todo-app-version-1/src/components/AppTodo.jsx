import React, { useRef, useState } from 'react'
import { IoIosAdd } from "react-icons/io";

function AppTodo({ onNewItem }) {
    const todoNameElement = useRef();
    const todoDateElement = useRef();
    const handleAddItem = (e) => {
        e.preventDefault();
        const todoName = todoNameElement.current.value;
        const todoDate = todoDateElement.current.value;
        todoNameElement.current.value = ''
        todoDateElement.current.value = ''
        onNewItem(todoName, todoDate)
    }
    return (
        <>
            <div className="container">
                <form className="row kg-row" onSubmit={handleAddItem}>
                    <div className="col-6">
                        <input type="text"
                            ref={todoNameElement}
                            placeholder="Enter Todo here"
                        />
                    </div>
                    <div className="col-4">
                        <input type="date"
                            ref={todoDateElement}
                        />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-success kg-button"><IoIosAdd /></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AppTodo
