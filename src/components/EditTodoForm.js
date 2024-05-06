import React, { useState } from 'react'
import TodoForm from './TodoForm';
export const EditTodoForm = ({ editTodo ,task}) => {
    const [value, setvalue] = useState("")
    const handlesubmit = e => {
        e.preventDefault();
        editTodo(value,task.id);
        setvalue('')
    }
    return (
        <form className='TodoForm' onSubmit={handlesubmit}>
            <input type='text' className='todo-input' value={value}
                placeholder='Update Task'
                onChange={(e) => setvalue(e.target.value)} />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}

export default TodoForm
