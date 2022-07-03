import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
