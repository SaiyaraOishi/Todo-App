import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Dashboard from "./Dashboard";
import CreateTodo from './CreateTodo';
import {UserContextProvider} from "./Context.js";

function App() {
  return (
    <>
    <UserContextProvider>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/createtodo" element={<CreateTodo/>}/>
    </Routes>
    
    </BrowserRouter>
    </UserContextProvider>
    </>
  );
}

export default App;
