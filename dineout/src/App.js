import AllRoutes from "./All Routes/AllRoutes";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/signup";
import { useEffect, useState } from "react";
import HomeNav from "./Components/HomeNav/HomeNav";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState(true);
  useEffect(() => {}, [isLogin, setIsLogin, login, setLogin]);
  return (
    <div className="App">
      {/* <Navbar setLogin={setLogin} login={login} /> */}
      <HomeNav
        setIsLogin={setIsLogin}
        isLogin={isLogin}
        login={login}
        setLogin={setLogin}
      />

      {login &&
        (isLogin ? (
          <Login
            isLogin={isLogin}
            setLogin={setLogin}
            setIsLogin={setIsLogin}
          />
        ) : (
          <Signup
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setLogin={setLogin}
          />
        ))}
      <AllRoutes />
    </div>
  );
}

export default App;
