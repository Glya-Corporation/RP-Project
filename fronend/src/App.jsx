/* eslint-disable no-undef */

import { HashRouter, Routes, Route } from "react-router-dom";
import Register from "./routes/register";
import LoadingScreen from "./components/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { getProvThunk } from "./store/slices/localizacion.slice";
import { useEffect } from "react";
function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProvThunk());
  }, []);
  return (
    <HashRouter>
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={""} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
