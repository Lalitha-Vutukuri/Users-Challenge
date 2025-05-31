import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserList from "./Pages/UserList";
import { initialUsers } from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import UserForm from "./Pages/UserForm";

function App() {
  const [users, setUsers] = useState(initialUsers);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList users={users} />}></Route>
        <Route
          path="/adduser"
          element={<UserForm users={users} setUsers={setUsers} />}
        ></Route>
        <Route
          path="/user/:id"
          element={<UserDetails users={users} setUsers={setUsers} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
