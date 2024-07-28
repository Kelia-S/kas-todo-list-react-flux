import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
    todos: [],
};

// Action types
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// Reducer function
const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { todos: [action.payload, ...state.todos] };
        case REMOVE_TODO:
            return { todos: state.todos.filter((_, index) => index !== action.payload) };
        default:
            return state;
    }
};

// Create Context
const TodoContext = createContext();

// Context Provider
export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = (todo) => {
        dispatch({ type: ADD_TODO, payload: todo });
    };

    const removeTodo = (index) => {
        dispatch({ type: REMOVE_TODO, payload: index });
    };

    return (
        <TodoContext.Provider value={{ todos: state.todos, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

// Custom hook to use the TodoContext
export const useTodo = () => {
    return useContext(TodoContext);
};