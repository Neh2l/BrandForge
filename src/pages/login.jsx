import "../styles/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle, FaApple } from "react-icons/fa";
import Img from "../assets/logo.png"
function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="logo-box" onClick={()=>navigate("/")}>
        <img src={Img} alt="logo" className="logo" />
      </div>

      <h1 link to="/">BrandForge</h1>
      <p className="subtitle">
        Sign in to continue to your workspace.
      </p>

      <div className="login-card">
        <label>Email address</label>

        <div className="input-box">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="name@company.com"
          />
        </div>

        <div className="password-header">
          <label>Password</label>
          {/* <a href="/">Forgot password?</a> */}
          <Link to="/forgotPassword" className="forgot-link">
            Forgot password?
          </Link>
        </div>

        <div className="input-box">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="••••••••"
          />
        </div>

        <div className="remember">
          <input type="checkbox" />
          <span>Remember me for 30 days</span>
        </div>

        <button className="login-btn">Sign In</button>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-buttons">
          <button>
            <FaGoogle />
            Google
          </button>

          <button>
            <FaApple />
            Apple
          </button>
        </div>
      </div>

     <p className="signup">
  Don't have an account? <Link to="/signup">Sign up</Link>
</p>
    </div>
  );
}

export default Login;