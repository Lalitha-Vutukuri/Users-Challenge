import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserList from "./Pages/UserList";
import { initialUsers } from "./Pages/Users";

function App() {
  const [users, setUsers] = useState(initialUsers);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList users={users} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
