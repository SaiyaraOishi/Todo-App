import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateTodo from "./components/CreateTodo";
import { Provider } from "react-redux";
import store, {persistor} from "./redux/store";
import UpdateTodo from "./components/UpdateTodo";
import ViewTodo from "./components/ViewTodo";
import {PersistGate} from "redux-persist/integration/react";


function App() {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createtodo" element={<CreateTodo />} />
          <Route path="/todo/update/:id" element={<UpdateTodo />} />
          <Route path="/todo/view/:id" element={<ViewTodo />} />
        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>

  );
}

export default App;
