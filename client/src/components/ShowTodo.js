import React,{useState , useContext,useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import TodoItem from './TodoItem';
import "../Show.css";


export default function ShowTodo() {
    const { todos, viewTodo } = useContext(GlobalContext);

    useEffect(() => {
      viewTodo();
    }, []);
  
    return (
        <React.Fragment>
          
             <div class="row text-center" >
                <h1>Todo List</h1>
                <br />
                <div class="wrapper">
                <table class="table table-stripped table-primary">
                    <thead>
                        <tr class="head">
                            <th class="head1">Todo Item</th>
                            <th class="head2">Action</th>
                            <th class="head3"></th>
                        </tr>
                    </thead>
                    <tbody>
                     {todos.map(todo_item => (<TodoItem key={todo_item._id} todo_item={todo_item} />))}
                    </tbody>
                </table>
                </div>
                </div>

        </React.Fragment>
    )
}
