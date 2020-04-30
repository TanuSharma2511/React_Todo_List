import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from "axios";

// Initial state
const initialState = {
  todos: [],
  error: null,
  loading: true,
  status:false
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
 async function deleteTodo(id) {
    try {
      await axios.delete(`http://localhost:4000/${id}`);

      dispatch({
        type: 'DELETE_TODO',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TODO_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function viewTodo() {
    try {
      const res = await axios.get('http://localhost:4000/');
      
      dispatch({
        type: 'VIEW_TODO',
        payload: res.data,
       
      });
    } catch (err) {
      dispatch({
        type: 'TODO_ERROR',
        payload: err
      });
    }
  }

async function editTodo(todo,id) {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post(`http://localhost:4000/edit/${id}`,todo,config);
    console.log(res.data.success);
    dispatch({
      type: 'EDIT_TODO',
      payload: res.data,
      status:res.data.success
    });
  } catch (err) {
    dispatch({
      type: 'TODO_ERROR',
      payload: err
    });
  }

  }

 async function addTodo(todo) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('http://localhost:4000/', todo, config);
   
    console.log(res);
    dispatch({
      type: 'ADD_TODO',
      payload: todo,
      status:res.data.success
    });
  } catch (err) {
    dispatch({
      type: 'TODO_ERROR',
      payload: err
    });
  }
  }

  return (<GlobalContext.Provider value={{
    todos: state.todos,
    error: state.error,
    loading: state.loading,
    status:state.status,
    deleteTodo,
    addTodo,
    viewTodo,
    editTodo
  }}>
    {children}
  </GlobalContext.Provider>);
}