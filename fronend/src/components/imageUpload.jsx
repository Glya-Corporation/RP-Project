/* eslint-disable */
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateUserThunk } from "../store/slices/user.slice";

// function ImageUpload() {
//   const user = useSelector((state) => state.user);

//   const dispatch = useDispatch();

//   const uploadImg = (e) => {
//     e.preventDefault();
//     const id = user.id;
//     const imgProfile = "imagen data";

//     dispatch(updateUserThunk(id, imgProfile));
//   };
//   return (
//     <form onSubmit={uploadImg}>
//       <input type="file" id="imput-img" style={{ display: "none" }} />
//       <button type="button">
//         <label htmlFor="imput-img" id="labelarchivo">
//           Selecciona un archivo
//         </label>
//       </button>
//       <button type="submit">guardar cambios</button>
//     </form>
//   );
// }

// export default ImageUpload;
