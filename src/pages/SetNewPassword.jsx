import "../styles/setNewPassword.css";
import {
  FiLock,
  FiEye,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";

export default function SetNewPassword() {
  return (
    <section className="resetPasswordScreen">
      <div className="resetGlow resetGlowTop"></div>
      <div className="resetGlow resetGlowBottom"></div>

      <div className="passwordCard">

        <div className="brandIcon">
          <img src="../assets/logo.png" alt="logo" />
        </div>

        <h3 className="brandTitle">BrandForge</h3>

        <h1 className="passwordHeading">
          Set New <br /> Password
        </h1>

        <p className="passwordText">
          Your identity is your power. Choose a strong
          password to protect your vision.
        </p>

        {/* Password */}

        <div className="fieldWrapper">
          <label>New Password</label>

          <div className="passwordInput">
            <FiLock />
            <input
              type="password"
              placeholder="••••••••"
            />
            <FiEye className="eyeIcon" />
          </div>
        </div>

        {/* Strength */}

        <div className="strengthWrapper">
          <div className="strengthFill"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <span className="strengthLabel">Weak</span>

        {/* Confirm */}

        <div className="fieldWrapper">
          <label>Confirm New Password</label>

          <div className="passwordInput">
            <FiLock />
            <input
              type="password"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button className="updatePasswordBtn">
          Update Password
          <FiArrowRight />
        </button>

        <a href="/login" className="backLoginLink">
          <FiArrowLeft />
          Back to Sign In
        </a>

      </div>
    </section>
  );
}