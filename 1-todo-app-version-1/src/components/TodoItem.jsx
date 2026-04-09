import React from 'react'
import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ todoname, todoDate, onDeleteClick }) => {
    return (
        <div className='container'>
            <div className='row kg-row'>
                <div className='col-6'>{todoname}</div>
                <div className='col-6'>{todoDate}</div>
                <div className='col-2'>
                    <button type='button' className='btn btn-danger kg-button' onClick={() => onDeleteClick(todoname)}><MdDeleteForever /></button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
