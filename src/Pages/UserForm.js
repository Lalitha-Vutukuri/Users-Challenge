import React from "react";
import { useForm } from "react-hook-form";

function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <label htmlFor="Name">Name : </label>
        <input
          type="text"
          {...register("Name", { required: true, minLength: 3 })}
        />
        {errors.Name && <span style={{ color: "red" }}>Name is required</span>}
        <br />
        <label htmlFor="Username">Username : </label>
        <input
          type="text"
          {...register("Username", { required: true, minLength: 5 })}
        />
        {errors.Username && (
          <span style={{ color: "red" }}>Username is required</span>
        )}
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          {...register("Email", {
            required: true,
            pattern: { value: /\S+@\S+\.\S+/ },
          })}
        />
        {errors.Email && (
          <span style={{ color: "red" }}>Email is required</span>
        )}
        <br />
        <label htmlFor="Address">
          Address <br />
          <label htmlFor="Street">Street :</label>
          <input type="text" {...register("Street", { required: true })} />
          {errors.Street && (
            <span style={{ color: "red" }}>Street name is required</span>
          )}
          <br />
          <label htmlFor="Suite">Suite :</label>
          <input type="text" {...register("Suite", { required: true })} />
          {errors.Suite && (
            <span style={{ color: "red" }}>Suite name is required</span>
          )}
          <br />
          <label htmlFor="City">City :</label>
          <input type="text" {...register("City", { required: true })} />
          {errors.City && (
            <span style={{ color: "red" }}>City name is required</span>
          )}
          <br />
          <label htmlFor="Zipcode">Zipcode :</label>
          <input type="text" {...register("Zipcode", { required: true })} />
          {errors.Zipcode && (
            <span style={{ color: "red" }}>Zipcode is required</span>
          )}
          <br />
        </label>
        <label htmlFor="Geo">
          Geo <br />
          <label htmlFor="Lat">Lat : </label>
          <input type="number" {...register("Lat", { required: true })} />
          {errors.Lat && (
            <span style={{ color: "red" }}>Latitude is required</span>
          )}
          <br />
          <label htmlFor="Lng">Lng : </label>
          <input type="number" {...register("Lng", { required: true })} />
          {errors.Lng && (
            <span style={{ color: "red" }}>Longitude is required</span>
          )}
          <br />
          <label htmlFor="Phone">Phone : </label>
          <input type="number" {...register("phone", { required: true })} />
          {errors.Phone && (
            <span style={{ color: "red" }}>Phone Number is required</span>
          )}
          <br />
        </label>
        <label htmlFor="Company">
          {" "}
          Company : <br />
          <label htmlFor="CName">Name : </label>
          <input type="text" {...register("CName", { required: true })} />
          {errors.CName && (
            <span style={{ color: "red" }}>Company Name is required</span>
          )}
          <br />
          <label htmlFor="CatchPharse">CatchPharse : </label>
          <input type="text" {...register("CatchPharse", { required: true })} />
          {errors.CatchPharse && (
            <span style={{ color: "red" }}>CatchPharse is required</span>
          )}
          <br />
          <label htmlFor="bs">bs : </label>
          <input type="text" {...register("bs", { required: true })} />
          {errors.bs && <span style={{ color: "red" }}>bs is required</span>}
          <br />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
