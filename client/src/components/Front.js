import React from 'react';
import "../App.css";
import {Link} from "react-router-dom";

export default function Front() {
    return (
        <React.Fragment>
            <div class="container container-inverse">
          <div class="text text-center">
              Todo List help you reminding your task or work that one wants to get done or that need to get done. It acts as a memory aid - that one needs or intends to accomplish.
             <div> <Link class="btn" to={`/add-todo`}>Add Todo</Link></div>
          </div>
      </div>
        </React.Fragment>
    )
}
