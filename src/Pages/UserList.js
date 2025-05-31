import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({ users }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/adduser")}>Add User</button>
      {users.map((user) => (
        <li key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
          {user.username}
        </li>
      ))}
    </div>
  );
};

export default UserList;
