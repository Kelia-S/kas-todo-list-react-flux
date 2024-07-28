import React, { useState } from 'react';
import { useTodo } from './TodoContext';

export function TodoInput() {
    const [task, setTask] = useState('');
    const { addTodo } = useTodo();

    const handleChangeTask = (ev) => {
        setTask(ev.target.value);
    };

    const handleEnter = (ev) => {
        if (ev.key === 'Enter' && task.trim() !== '') {
            addTodo(task.trim());
            setTask(''); // Clear input after adding task
        }
    };

    return (
        <div className="flex flex-col md:flex-row border border-indigo-600">
            <input
                type="text"
                value={task}
                onChange={handleChangeTask}
                onKeyDown={handleEnter}
                placeholder="What needs to be done?"
            />
        </div>
    );
}