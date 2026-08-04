import "../styles/start.css";
import logo from "../assets/logo.png";

function Start() {
  return (
    <div className="start">
      <div className="logo-card">
        <img src={logo} alt="BrandForge Logo" />

        <h1 className="logo-text">
          <span className="brand-start">Brand</span>
          <span className="forge-start">Forge</span>
        </h1>
      </div>
    </div>
  );
}

export default Start;