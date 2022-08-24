import Login from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateTodo from "./components/CreateTodo";
import {Provider} from "react-redux";
import store from "./redux/store";


function App() {
  return (
   <>
   <Provider store={store}>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/createtodo" element={<CreateTodo/>}/>
   </Routes>
   </BrowserRouter>
   </Provider>
   </>
  );
}

export default App;
