import React from 'react';
import {Link} from "react-router-dom";
import "../App.css";

export default function Navbar() {
    return (
        <React.Fragment>
            <div class="head">
             <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <li class="navbar-brand"><Link to={`/`}>Todo Application</Link></li>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li><Link to={`/show-todo`}>Show Todo List</Link></li>
            <li><Link to={`/add-todo`}>Add Todo Item</Link></li>
           
          </ul>
        </div>
      </nav>
      </div>
        </React.Fragment>
    )
}
