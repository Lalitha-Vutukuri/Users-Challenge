import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <button>Add User</button>
      {users.map((user) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </div>
  );
};

export default UserList;
