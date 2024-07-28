import React from 'react';
import { useTodo } from './TodoContext';

export function TodoList() {
    const { todos, removeTodo } = useTodo();

    return (
        <ul className="border border-indigo-600">
            {todos.map((todo, index) => (
                <li key={index} className="flex items-center justify-between">
                    {todo}
                    <button
                        className="hover:text-red-500"
                        onClick={() => removeTodo(index)}
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
}