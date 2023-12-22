import "./navigation.css";
import Logo from "../../assets/logo.png"
const Navigation = () => {
  return (
    <>
      <div className="navbar flex">
        <div className="left-section">
          <img className="header-logo" src={Logo} alt="Logo" />
        </div>
        <div className="right-section">
          <button className="register-btn">Đăng ký</button>
          <button className="login-btn">Đăng nhập</button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
