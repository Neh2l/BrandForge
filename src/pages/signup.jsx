import "../styles/signup.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

function Signup() {
  return (
    <div className="signup-container">

      {/* Left Side */}

      <div className="left-side">

        <div className="brand">
          <img src={logo} alt="logo" />

          <h2>
            <span className="brand-dark">Brand</span>
            <span className="brand-blue">Forge</span>
          </h2>
        </div>

        <h1>
          From First <br />
          Spark <br />
          to Global <br />
          Brand.
        </h1>

        <p>
          The definitive path for entrepreneurs.
          We don't just build brands; we forge legacies.
          Join the elite network where ideas meet execution.
        </p>

        <div className="roadmap-card">

          <h3>Brand Roadmap</h3>

          <div className="step active">

            <div className="number">01</div>

            <div>
              <h4>Concept Validation</h4>
              <span>Market analysis & positioning</span>
            </div>

          </div>

          <div className="step">

            <div className="number gray">02</div>

            <div>
              <h4>Supplier Sourcing</h4>
              <span>Logistics & manufacturing</span>
            </div>

          </div>

          <button className="strategy-btn">
            View Full Strategy
          </button>

        </div>

      </div>

      {/* Right Side */}

      <div className="right-side">

        <h1>Create Account</h1>

        <p className="subtitle">
          Begin your journey to effortless power.
        </p>

        <div className="progress">

          <div className="active">Vision</div>

          <div>Forge</div>

          <div>Launch</div>

        </div>

        <form>

          <label>Full Name</label>

          <div className="input-box">

            <FaUser />

            <input
              type="text"
              placeholder="Jane Doe"
            />

          </div>

          <label>Work Email</label>

          <div className="input-box">

            <FaEnvelope />

            <input
              type="email"
              placeholder="jane@company.com"
            />

          </div>

          <label>Password</label>

          <div className="input-box">

            <FaLock />

            <input
              type="password"
              placeholder="****"
            />

            <FaEyeSlash className="eye" />

          </div>

          <small>
            Must be at least 8 characters long.
          </small>

          <div className="terms">

            <input type="checkbox" />

            <span>
              I agree to the
              <a href="/"> Terms of Service </a>
              and
              <a href="/"> Privacy Policy</a>
            </span>

          </div>

          <button className="signup-btn">
            Start Forging Your Brand →
          </button>

        </form>

        <p className="signin">
          Already forging your path?
          <Link to="/login"> Sign In</Link>
        </p>

        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

        <div className="socials">

          <button>
            <FaGoogle />
            Google
          </button>

          <button>
            <FaGithub />
            GitHub
          </button>

        </div>

      </div>

    </div>
  );
}

export default Signup;