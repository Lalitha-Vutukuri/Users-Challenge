import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UserForm = ({ saveUser, users = [] }) => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { id } = useParams();
  const editing = Boolean(id);

  useEffect(() => {
    if (editing) {
      const user = users.find((u) => u.id === parseInt(id));
      if (user) {
        setValue("id", user.id);
        setValue("name", user.name);
        setValue("username", user.username);
        setValue("email", user.email);
        setValue("street", user.address.street);
        setValue("city", user.address.city);
      }
    }
  }, [editing, id, setValue, users]);

  const onSubmit = (data) => {
    const user = {
      id: editing ? parseInt(data.id) : undefined,
      name: data.name,
      username: data.username,
      email: data.email,
      address: {
        street: data.street,
        suite: "",
        city: data.city,
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
    };
    saveUser(user);
    reset();
  };

  return (
    <div>
      <h2>{editing ? "Update User" : "Add User"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("id")} />
        <div>
          <label>Name:</label>
          <input {...register("name", { required: true })} />
        </div>
        <div>
          <label>Username:</label>
          <input {...register("username", { required: true })} />
        </div>
        <div>
          <label>Email:</label>
          <input {...register("email", { required: true })} />
        </div>
        <div>
          <label>Street:</label>
          <input {...register("street", { required: true })} />
        </div>
        <div>
          <label>City:</label>
          <input {...register("city", { required: true })} />
        </div>
        <button type="submit">{editing ? "Update" : "Add"} User</button>
      </form>
    </div>
  );
};

export default UserForm;
