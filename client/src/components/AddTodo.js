import React , {useState,useContext} from 'react';
import "../Add.css";
import { GlobalContext } from '../context/GlobalState';
import ShowTodo from './ShowTodo';
import {toast} from "react-toastify";

toast.configure();


export default function AddTodo() {
    const [todo_item,setTodo]=useState("");

    const { addTodo , status} = useContext(GlobalContext);
    const onChange = e =>{
       setTodo(e.target.value);
    }

    const onSubmit = async(e) => {
        e.preventDefault();
    
        const newTodo = {
         todo_item
        }
    
    await addTodo(newTodo);
    
     setTodo("");
      // alert("Item Added");
      // console.log(status);
   
      }
    return (
        <React.Fragment>
            <div class="containers">
          <p>To add a new Todo in your todo List , Cick the Add Todo Button</p>
        <button type="button" class="btn btn1 btn-default btn-lg text-center" data-toggle="modal" data-target="#myModal">Add Todo Item</button>
      </div>

      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
          {status ? <div class="alert alert-success">Todo Item added successfully</div> : null}
          <form action="/add_todo" class="form-horizontal" method="post" role="form">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Add new Todo</h4>
            </div>
            <div class="modal-body">
               
                    <div class="form-group">
                        <div class="col-md-9">
                            <input type="text-box" class="form-control"  name="todo_name" placeholder="Enter Your Todo Item" onChange={onChange} value={todo_item} />     
                       </div>
                    </div>
                   
            </div>
           
            <div class="modal-footer">
                
                <button type="submit" onClick={onSubmit}>Add a Todo</button>
            </div>
            </form> 
          </div>
          </div>
          </div>
       
        {/* {status}?<ShowTodo />:<AddTodo /> */}
        


        </React.Fragment>
    )
}
