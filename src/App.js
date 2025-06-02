import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import UserList from "./Pages/UserList";
import UserForm from "./Pages/UserForm";
import { initialUsers } from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const navigate = useNavigate();

  const addUser = (newUser) => {
    newUser.id = Date.now();
    setUsers([...users, newUser]);
    navigate("/");
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    navigate("/");
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<UserList users={users} deleteUser={deleteUser} />}
      />
      <Route path="/add" element={<UserForm saveUser={addUser} />} />
      <Route
        path="/edit/:id"
        element={<UserForm users={users} saveUser={updateUser} />}
      />
      <Route path="/UserDetails/:id" element={<UserDetails users={users} />} />
    </Routes>
  );
};

export default App;
