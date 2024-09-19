import { border } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BsGoogle} from "react-icons/bs"

function Login({ setLogin, setIsLogin, isLogin }) {
  // const [showThis, setShowThis] = useState(true);

  const overlay = {
    display: "grid",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100vh",
    width: "100vw",
    background: "rgba(0,0,0,0.25)",
    zIndex: 1000,
    // display: "grid",
    placeItems: "center",
    alignItems:"center",
    // justifyContent:"center"
  };

  const [loginState, setLoginState] = useState({ email: "", password: "" });
  // console.log(loginState);
  console.log("state:", loginState);
  function handleLogin() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const curUser = users.filter(
      (us) =>
        us.email === loginState.email && us.password === loginState.password
    );
    if (curUser.length) {
      alert("congatulations!");
      setIsLogin(false);
      setLogin(false);
      // setShowThis(false);
      // console.log("loginState:", login);
      localStorage.setItem("loggedInUser", JSON.stringify(loginState));
    } else {
      alert("wrong credentials!");
      setIsLogin(false);
    }
  }

  return isLogin ? (
    <div style={overlay}>
      <div
        style={{
          width: "35%",
          background: "white",
          position: "relative",
          borderRadius: "4px",
          padding: "1rem",
        }}
      >
        <span
          onClick={(e) => {
            setLogin(true);
            setIsLogin(false);
          }}
          style={{ position: "absolute", right: "1rem", top: "1rem" }}
        >
          X
        </span>
        <h1
          style={{
            color: "tomato",
            textAlign: "left",
            fontSize: "28px",
            marginBottom: "1.5rem",
          }}
        >
          Log In / Sign Up
        </h1>
        <input
          style={{
            display: "block",
            paddingBottom: "0.7rem",
            border: "none",
            outline: "none",
            marginBottom: "1rem",
            borderBottom: "1px solid gray",
            width: "100%",
          }}
          value={loginState.email}
          type="text"
          name="email"
          onChange={(e) =>
            setLoginState((p) => ({ ...p, [e.target.name]: e.target.value }))
          }
          placeholder="Enter Mobile Number or Email"
        />
        <input
          onChange={(e) =>
            setLoginState((p) => ({ ...p, [e.target.name]: e.target.value }))
          }
          style={{
            display: "block",
            paddingBottom: "0.7rem",
            border: "none",
            outline: "none",

            borderBottom: "1px solid gray",
            width: "100%",
          }}
          name="password"
          type="password"
          value={loginState.password}
          placeholder="Enter Password"
        />
        <button
          onClick={handleLogin}
          style={{
            display: "block",
            width: "100%",
            marginTop: "1rem",
            height: "2.5rem",
            background: "tomato",
            color: "white",
            border: "none",
          }}
        >
          Continue
        </button>
        <button
          style={{
            display: "block",
            width: "100%",
            marginTop: "5px",
            height: "2.5rem",
            background: "tomato",
            color: "white",
            border: "none",
          }}
          onClick={() => {
            setIsLogin(false);
          }}
        >
          Sign Up
        </button>
        <p
          style={{
            background: "white",
            padding: "1rem 1rem",
            width: "fit",
            textAlign: "center",
            position: "relative",
            marginTop:"-2px"
          }}
        >
          Or Login via
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button
            style={{
              padding: "1rem  15%",
              height: "40px",
              background: "#486FA4",
              border: "none",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-10px",
              borderRadius: "3px",
            }}
          >
            {" "}
            <img
              style={{ marginLeft: "-20px" }}
              src="https://im1.dineout.co.in/images/uploads/misc/2020/Jan/10/facebook-16.png"
              alt="logo"
            />{" "}
            Facebook
          </button>
          <button
            style={{
              padding: "1rem  15%",
              height: "40px",
              color: "grey",
              background: "white",
              marginTop: "-10px",
            }}
          >
            <BsGoogle/>
            mail
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Login;
