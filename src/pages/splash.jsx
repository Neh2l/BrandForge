import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Start from "../pages/start";
import "../styles/splash.css";

function Splash() {
  const navigate = useNavigate();
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const animation = setTimeout(() => {
      setExit(true);
    }, 2300);

    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => {
      clearTimeout(animation);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className={`splash ${exit ? "exit" : ""}`}>
      <Start />
    </div>
  );
}

export default Splash;