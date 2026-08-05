import { useNavigate } from "react-router-dom";
import "../styles/forgotPassword.css";
import { FiMail, FiArrowLeft } from "react-icons/fi";

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="forgot-page">
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>

      <div className="forgot-container">
        {/* <h2 className="logo">BrandForge</h2> */}

        <div className="forgot-card">
          <h1>Reset Your Password</h1>

          <p>
            Enter the email associated with your account
            <br />
            and we'll send you instructions to reset your
            <br />
            password.
          </p>

          <div className="input-box">
            <FiMail className="icon" />
            <input
              type="email"
              placeholder="Email Address"
            />
          </div>

          <button onClick={() => navigate("/check-email")}>Send Reset Link</button>

          <a href="/login" className="back-link">
            <FiArrowLeft />
            Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
}