import "../styles/start.css";
import logo from "../../public/logo.png";

function Start() {
  return (
    <div className="start">
      <div className="logo-card">
        <img src={logo} alt="BrandForge Logo" />

        <h1 className="logo-text">
          <span className="brand">Brand</span>
          <span className="forge">Forge</span>
        </h1>
      </div>
    </div>
  );
}

export default Start;