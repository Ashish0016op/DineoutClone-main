import "../Navbar/Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
// import LoginButton from "./LoginButton";
import UserProfile from "./UserProfile";
import { useEffect } from "react";
function Navbar(props) {
  const { setLogin, login } = props;
  var isAuth = localStorage.getItem("loginKey");
  console.log(login, setLogin);
  useEffect(() => {}, []);
  //   console.log("login", props.login);

  return (
    <div className="navbar">
      <div className="navrootdiv">
        <div
          style={{
            width: "100px",
            marginRight: "20px",
            cursor: "pointer",
            marginTop: "3px",
          }}
        >
          <NavLink to="/">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
              className="navLogo"
              alt="navlogo"
            />
          </NavLink>
        </div>
        <div className="navDropMenu">
          <img src="https://cdn-icons-png.flaticon.com/512/64/64665.png" />
          <select className="navdropdown">
            <option value="del">Delhi</option>
            <option value="mum">Mumbai</option>
            <option value="kol">Kolkata</option>
            <option value="goa">Goa</option>
          </select>
        </div>
        <div className="navAnchor">
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="/bookatable" className="navlink">
            Book a Table
          </NavLink>
          <NavLink to="/dineoutpay" className="navlink">
            Dineout Pay
          </NavLink>
          <NavLink to="/events" className="navlink">
            Events
          </NavLink>
          <NavLink to="/blog" className="navlink">
            Blog
          </NavLink>
        </div>
        <button style={{background:"tomato",color:"white",width:"110px",borderRadius:"4px",border:"none",fontSize:"medium",alignItem:"center",marginRight:"10px"}} id="loginbtn">Login</button>
        {/* {isAuth ? (
          <UserProfile />
        ) : (
          <LoginButton setLogin={setLogin} login={login} />
        )} */}
      </div>
    </div>
  );
}
export default Navbar;
