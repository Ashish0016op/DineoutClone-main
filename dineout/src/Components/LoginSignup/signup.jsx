import { border } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Signup({ setLogin, setIsLogin, isLogin }) {
  const [showSignup, setShowSignUp] = useState(true);
  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100vh",
    width: "100vw",
    background: "rgba(0,0,0,0.25)",
    zIndex: 1000,
    display: isLogin ? "none" : "grid",
    placeItems: "center",
  };

  const [signupState, setSignupState] = useState({
    email: "",
    password: "",
    name: "",
  });
  console.log("sign:", signupState);
  const userArr = [];
  const handelState = (e) => {
    setSignupState({
      ...signupState,
      [e.target.name]: e.target.value,
    });
  };

  function handleSignup() {
    // alert("hi");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const curUser = users.filter((us) => us.email === signupState.email);
    console.log("curr", curUser, typeof curUser);
    if (curUser.length) {
      alert("This email is already registered.");
    } else {
      alert("Congratulations! Sign Up successfull");
      setIsLogin(true);
      userArr.push(signupState);
      console.log("arr:", userArr);
      localStorage.setItem("users", JSON.stringify(userArr));
    }
  }

  return showSignup ? (
    <div style={overlay}>
      <div
        style={{
          height: "15rem",
          width: "35%",
          background: "white",
          position: "relative",
          borderRadius: "3px",
          padding: "2rem",
        }}
      >
        <span
          onClick={(e) => setShowSignUp(false)}
          style={{ position: "absolute", right: "1rem", top: "1rem" }}
        >
          X
        </span>
        <h1
          style={{
            color: "tomato",
            textAlign: "left",
            fontSize: "28px",
            marginTop: "-10px",
          }}
        >
          Sign Up
        </h1>
        <input
          name="name"
          style={{
            display: "block",
            paddingBottom: "0.7rem",
            border: "none",
            outline: "none",
            borderBottom: "1px solid gray",
            width: "100%",
          }}
          onChange={(e) => handelState(e)}
          type="text"
          placeholder="Enter your full name"
        />{" "}
        <br />
        <input
          name="email"
          style={{
            display: "block",
            paddingBottom: "0.7rem",
            border: "none",
            outline: "none",
            borderBottom: "1px solid gray",
            width: "100%",
          }}
          onChange={(e) => handelState(e)}
          type="email"
          placeholder="Enter your Email Id"
        />{" "}
        <br />
        <input
          name="password"
          style={{
            display: "block",
            paddingBottom: "0.7rem",
            border: "none",
            outline: "none",
            borderBottom: "1px solid gray",
            width: "100%",
          }}
          onChange={(e) => handelState(e)}
          type="password"
          placeholder="Enter your Password"
        />{" "}
        <br />
        <button
          style={{
            display: "block",
            width: "100%",
            marginTop: "1.5rem",
            height: "2.5rem",
            background: "tomato",
            color: "white",
            border: "none",
          }}
          onClick={() => handleSignup()}
        >
          Sign Up
        </button>
        <hr style={{ position: "relative", top: "11.5%", zIndex: 0 }} />
        <div
          style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
        ></div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Signup;
