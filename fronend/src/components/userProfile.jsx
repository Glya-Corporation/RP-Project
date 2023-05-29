/* eslint-disable */
// import React from "react";
// import ImageUpload from "./imageUpload";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserThunk } from "../store/slices/localizacion.slice";

// const UserProfile = () => {
//   const dispatch = useDispatch();
//   dispatch(getUserThunk(1));
//   const user = useSelector((state) => state.user);
//   console.log(user);
//   return (
//     <div>
//       <div className="info-section">
//         <div className="img-info">
//           <div className="content-img">
//             <img
//               src={
//                 user.imgProfile ||
//                 "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png"
//               }
//               alt=" imagen de perfil"
//             />
//           </div>
//           <ImageUpload />
//         </div>
//         <div className="user-info">
//           <h2>Información Personal</h2>
//           <p>usuario: {user.username || "usuario1"}</p>
//           <p>Email: {user.email || "email@gmail.com"} </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
