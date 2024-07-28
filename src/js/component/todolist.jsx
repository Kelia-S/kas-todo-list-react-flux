import React, { useState } from "react";


export function Todolist() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
  
    // Function to handle input change
    const handleChangeTask = (ev) => {
        setTask(ev.target.value);
    };
  
    // Function to handle adding a task
    const handleEnter = (ev) => {
        if (ev.key === "Enter" && task.trim() !== "") {
            setTodos([task.trim(),...todos]);
            setTask(""); // Clear input after adding task
        }
    };
  
    // Function to handle removing a task
    const handleRemoveTask = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
  
    return (
        <div className="max-w-md mx-auto mt-8">
            <h2 className= "border border-indigo-600 text-center italic font-serif text-5xl">To do list</h2>
            <div className="flex gflex flex-col md:flex-ro border border-indigo-600">
                <input
                    type="text"
                    value={task}
                    onChange={handleChangeTask}
                    onKeyDown={handleEnter}
                    placeholder="What needs to be done?"
                />
            </div>
            <ul className= "border border-indigo-600">
                {todos.map((todo, index) => (
                    <li key={index} className="flex items-center justify-between">
                        {todo}
                        <button className="hover:text-red-500" onClick={() => handleRemoveTask(index)}>X</button>
                    </li>
                ))}
            </ul>

        </div>
    );
  }