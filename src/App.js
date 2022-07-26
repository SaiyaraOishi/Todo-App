import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Dashboard from "./Dashboard";
import CreateTodo from './CreateTodo';
import {UserContextProvider} from "./Context.js";
import UpdateForm from './UpdateForm';

function App() {
  return (
    <>
    <UserContextProvider>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/createtodo" element={<CreateTodo/>}/>
      <Route path="/todo/:id" element={<UpdateForm />} />
    </Routes>
    
    </BrowserRouter>
    </UserContextProvider>
    </>
  );
}

export default App;
