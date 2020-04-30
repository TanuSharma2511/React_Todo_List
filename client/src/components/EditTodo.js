import React , {useContext,useState,useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import "../Edit.css";
import ShowTodo from "./ShowTodo";
import { set } from 'mongoose';


export default function EditTodo(props) {
  const [todo_item,setTodo] = useState("");
     console.log(props.location.state.todo_item.todo_item);
    var todo_id = props.match.params.id;
    const {editTodo,status} = useContext(GlobalContext);
  
useState(() =>{
  setTodo(props.location.state.todo_item.todo_item)
})

    const onChange = e =>{
      setTodo(e.target.value);
   }
    const onSubmit = async(e) => {
            
      e.preventDefault();
  
      const newTodo = {
       todo_item
      }
   await editTodo(newTodo,todo_id);
  //  alert("Todo Updated");     
    }
    return (
        <React.Fragment>

          <div class="containers">
          <p>To edit an existing Todo in your todo List , Cick the Edit Todo Button</p>
        <button type="button" class="btn btn1 btn-default btn-lg text-center" data-toggle="modal" data-target="#myModal">Edit Todo</button>
      </div>

      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
          {status ? <div class="alert alert-success">Todo Item updated successfully</div> : null}
          <form action="/add_todo" class="form-horizontal" method="post" role="form">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Edit Todo</h4>
            </div>
            <div class="modal-body">
               
                    <div class="form-group">
                        <div class="col-md-9">
                            <input type="text-box" class="form-control"  name="todo_name" placeholder="Enter Your Todo Item" onChange={onChange} value={todo_item} />     
                       </div>
                    </div>
                   
            </div>
           
            <div class="modal-footer">
                
                <button type="submit" onClick={onSubmit}>Edit Todo</button>
            </div>
            </form> 
          </div>
          </div>
          </div>
       
        </React.Fragment>
    )
}
