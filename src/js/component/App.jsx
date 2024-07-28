import React from 'react';
import { TodoProvider } from './TodoContext';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export function App() {
    return (
        <TodoProvider>
            <div className="max-w-md mx-auto mt-8">
                <h2 className="border border-indigo-600 text-center italic font-serif text-5xl">
                    To do list
                </h2>
                <TodoInput />
                <TodoList />
            </div>
        </TodoProvider>
    );
}
export default App;
