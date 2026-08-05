import "../styles/CheckEmail.css";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function CheckEmail() {
  const navigate = useNavigate();
  return (
    <div className="check-page">
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>

      <div className="check-card">
        {/* <h2 className="logo">BrandForge</h2> */}

        <div className="icon-box">
          <FiCheckCircle />
        </div>

        <h1>Check Your Email</h1>

        <p>
          We've sent a password reset link to your email address.
          <br />
          Please check your inbox and follow the instructions.
        </p>

        <button onClick={() => navigate("/set-new-password")}>Open Email Client</button>

        <p className="resend">
          Didn't receive the email?{" "}
          <span>Resend Email</span>
        </p>
      </div>
    </div>
  );
}