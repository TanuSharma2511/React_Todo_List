import React,{useState , useContext,use} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Link} from "react-router-dom";
import "../Show.css";
// import {toast} from "react-toastify";

// toast.configure();

export default function TodoItem({todo_item}) {
    const { deleteTodo } = useContext(GlobalContext);
    return (
        <React.Fragment>
         <tr>
             <td>{todo_item.todo_item}</td>
             <td><button class="btn btn-danger btn-xs" onClick={() => deleteTodo(todo_item._id)}>Delete</button></td>
             <td><Link class="btn btn-primary btn-xs" to={{
             pathname: `/edit-todo/${todo_item._id}`,
             state: {
             todo_item: todo_item
             }
             }}>Edit</Link></td>
             
         </tr>
        </React.Fragment>
    )
}
