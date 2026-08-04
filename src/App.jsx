import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/start";
import Login from "./pages/login";
import Splash from "./pages/splash";
import Signup from "./pages/signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;