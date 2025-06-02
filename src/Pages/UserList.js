import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({ users, deleteUser }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => navigate("/add")}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "1rem" }}>
            <strong onClick={() => navigate(`/UserDetails/${user.id}`)}>
              {user.name}
            </strong>{" "}
            ({user.username}) - {user.email}
            <br />
            <button onClick={() => navigate(`/edit/${user.id}`)}>Update</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
