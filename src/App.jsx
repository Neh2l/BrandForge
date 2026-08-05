import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/start";
import Login from "./pages/login";
import Splash from "./pages/splash";
import Signup from "./pages/signup"
import ForgotPassword from "./pages/forgotPassword";
import CheckEmail from "./pages/CheckEmail";
import SetNewPassword from "./pages/SetNewPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/start" element={<Start />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;