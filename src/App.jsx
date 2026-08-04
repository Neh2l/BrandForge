import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/start";
import Login from "./pages/login";
import Splash from "./pages/splash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;