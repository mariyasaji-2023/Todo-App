import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
    const [value, setvalue] = useState("")
    const handlesubmit = e => {
        e.preventDefault();
        addTodo(value);
        setvalue('')
    }
    return (
        <form className='TodoForm' onSubmit={handlesubmit}>
            <input type='text' className='todo-input' value={value}
                placeholder='What is the task today?'
                onChange={(e) => setvalue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add task</button>
        </form>
    )
}

export default TodoForm
