import React from "react";
import { useParams } from "react-router-dom";

function UserDetails({ users }) {
  const { id } = useParams();
  console.log(id);
  console.log(users);
  const clickedUser = users[id];
  console.log(clickedUser);
  return (
    <div>
      <p>Name : {clickedUser.name}</p>
      <p>Username : {clickedUser.username}</p>
      <p>Email : {clickedUser.email}</p>
      <p>
        <b>Address</b> :{" "}
      </p>
      <p>Street : {clickedUser.address.street}</p>
      <p>Suite : {clickedUser.address.suite}</p>
      <p>City : {clickedUser.address.city}</p>
      <p>Zipcode : {clickedUser.address.zipcode}</p>
      <p>
        <b>Geo</b> :{" "}
      </p>
      <p>Lat : {clickedUser.address.geo.lat}</p>
      <p>Lng : {clickedUser.address.geo.lng}</p>

      <p>Phone : {clickedUser.phone}</p>
      <p>Website : {clickedUser.website}</p>
      <p>
        <b>Company</b> :{" "}
      </p>
      <p>Name : {clickedUser.company.name}</p>
      <p>CatchPhrase : {clickedUser.company.catchPhrase}</p>
      <p>bs : {clickedUser.company.bs}</p>
    </div>
  );
}

export default UserDetails;
