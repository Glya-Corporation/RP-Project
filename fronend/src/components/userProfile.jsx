/* eslint-disable */
import React from "react";
import ImageUpload from "./imageUpload";
import { useSelector } from "react-redux";

const UserProfile = () => {
  // const user = useSelector(state => state.user)

  let user = {
    username: "elias",
    email: "elias@gmail.com",
    dni: 42342343,
    imgProfile: null,
  };

  return (
    <div>
      <div className="info-section">
        <div className="img-info">
          <div className="content-img">
            <img
              src={
                user.imgProfile ||
                "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png"
              }
              alt=" imagen de perfil"
            />
          </div>
          <ImageUpload />
        </div>
        <div className="user-info">
          <h2>Información Personal</h2>
          <p>usuario: {user.username}</p>
          <p>Dni: {user.dni}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
