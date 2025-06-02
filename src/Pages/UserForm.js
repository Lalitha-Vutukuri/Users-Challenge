import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UserForm = ({ saveUser, users = [] }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
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
        setValue("suite", user.address.suite);
        setValue("city", user.address.city);
        setValue("zipcode", user.address.zipcode);
        setValue("lat", user.address.geo.lat);
        setValue("lng", user.address.geo.lng);
        setValue("phone", user.phone);
        setValue("website", user.website);
        setValue("cname", user.company.name);
        setValue("catchPhrase", user.company.catchPhrase);
        setValue("bs", user.company.bs);
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
          {errors.name && (
            <span style={{ color: "red" }}>Name is Required</span>
          )}
        </div>
        <div>
          <label>Username:</label>
          <input {...register("username", { required: true })} />
          {errors.username && (
            <span style={{ color: "red" }}>username is Required</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input {...register("email", { required: true })} />
          {errors.email && (
            <span style={{ color: "red" }}>Email is Required</span>
          )}
        </div>
        <label>Address</label>
        <div>
          <label>Street:</label>
          <input {...register("street", { required: true })} />
          {errors.street && (
            <span style={{ color: "red" }}>Street is Required</span>
          )}
        </div>
        <div>
          <label>Suite:</label>
          <input {...register("suite", { required: true })} />
          {errors.suite && (
            <span style={{ color: "red" }}>Suite is Required</span>
          )}
        </div>
        <div>
          <label>City:</label>
          <input {...register("city", { required: true })} />
          {errors.city && (
            <span style={{ color: "red" }}>City is Required</span>
          )}
        </div>
        <div>
          <label>Zipcode:</label>
          <input {...register("zipcode", { required: true })} />
          {errors.zipcode && (
            <span style={{ color: "red" }}>Zipcode is Required</span>
          )}
        </div>
        <label>Geo</label>
        <div>
          <label>Lat:</label>
          <input {...register("lat", { required: true })} />
          {errors.lat && (
            <span style={{ color: "red" }}>Latitude is Required</span>
          )}
        </div>
        <div>
          <label>Lng:</label>
          <input {...register("lng", { required: true })} />
          {errors.lng && (
            <span style={{ color: "red" }}>Longititude is Required</span>
          )}
        </div>
        <div>
          <label>Phone:</label>
          <input {...register("phone", { required: true })} />
          {errors.phone && (
            <span style={{ color: "red" }}>Phone is Required</span>
          )}
        </div>
        <div>
          <label>Website:</label>
          <input {...register("website", { required: true })} />
          {errors.website && (
            <span style={{ color: "red" }}>Website is Required</span>
          )}
        </div>
        <label>Company</label>
        <div>
          <label>Company Name:</label>
          <input {...register("cname", { required: true })} />
          {errors.cname && (
            <span style={{ color: "red" }}>Company name is Required</span>
          )}
        </div>
        <div>
          <label>CatchPhrase:</label>
          <input {...register("catchPhrase", { required: true })} />
          {errors.catchPhrase && (
            <span style={{ color: "red" }}>CatchPhrase is Required</span>
          )}
        </div>
        <div>
          <label>BS:</label>
          <input {...register("bs", { required: true })} />
          {errors.bs && <span style={{ color: "red" }}>BS is Required</span>}
        </div>
        <button type="submit">{editing ? "Update" : "Add"} User</button>
      </form>
    </div>
  );
};

export default UserForm;
