/* eslint-disable no-undef */
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Register from "./routes/register";
import User from "./routes/user";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id/profile" element={<User />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
