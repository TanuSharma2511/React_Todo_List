import React from 'react';
import Navbar  from './components/Navbar';
import Front  from './components/Front';
import AddTodo  from './components/AddTodo';
import ShowTodo  from './components/ShowTodo';
import EditTodo  from './components/EditTodo';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <Router>
         <Navbar />
         <Route path ="/" exact component={Front} />
         <Route path ="/add-todo" exact component={AddTodo} />
         <Route path ="/show-todo" exact component={ShowTodo} />
         <Route path ="/edit-todo/:id" exact  component={EditTodo} />
   </Router> 
   </GlobalProvider>
  );
}

export default App;
