import "./HomeNav.css";
import logo from "./assets/website-logo.webp";
import locationLogo from "./assets/locationLogo.png";
import { Link, NavLink } from "react-router-dom";
import menu from "./assets/menu.png";
import React, { useEffect, useRef, useState } from 'react';
import {FaMicrophoneSlash, FaMicrophone} from "react-icons/fa"
import {FaSearch} from "react-icons/fa";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {GiTireIronCross} from "react-icons/gi";
import "./debounce.css"

const HomeNav = ({ setLogin, login, setIsLogin, isLogin }) => {
let [ data,setData] = useState([])
let [ deb,setDeb] = useState([])

let debounce = useRef(null)

  const [isCurr, setIsCurr] = useState({
    home: true,
    bookatable: false,
    dienoutpay: false,
    events: false,
    blog: false,
  });
  const [secondnav, setSecondnav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);

useEffect(()=>{
fetchData();
},[deb])


  let fetchData= async()=>{
   await fetch("https://dineoutclone-foc1.onrender.com/products")
   .then((res)=>res.json())
   .then((d)=>{
     setData(d)
   })
  }

  const searchVisibility = () => {
    if (window.scrollY > 100) {
      setShowSearch(true);
      setSecondnav(true);
    } else {
      setShowSearch(false);
      setSecondnav(false);
    }
  };

  window.addEventListener("scroll", searchVisibility);

  const toogleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  const users = JSON.parse(localStorage.getItem("users")) || [];
  let LoginduserName;
  if (users.length > 0) {
    LoginduserName = users[0].name;
  } else {
    setLogin(true);
    localStorage.setItem("users", JSON.stringify([]));
  }
  let [voice, setVoice]= useState(""); 
let [flag,setFlag] = useState(true);

const commands = [
 {
     command : `clear`,
     callback : ({resetTranscript})=>{
         setVoice("")
         resetTranscript()
 }
 },
 {
  command : `Product`,
  callback : () =>{
      window.open('https://io-dineout.netlify.app/bookatable')
  }
},
 {
     command : `open *`,
     callback : (site) =>{
         window.open('http://'+site)
     }
 }
]

const {
 transcript,
   listening,
   resetTranscript,
   browserSupportsSpeechRecognition
 } = useSpeechRecognition({commands});

 if (!browserSupportsSpeechRecognition) {
   return <span>Browser doesn't support speech recognition.</span>;
 }


 const voiceApp=()=>{  
     if(flag){
         setFlag(false)
     }else{

         setFlag(true);
     }
 }
 
let Debouncing = (e) =>{
   resetTranscript()
   setVoice(e.target.value);
   let temp = data.filter((el)=>{
        return el.name.toLowerCase().includes(e.target.value.toLowerCase());
      })

     
      if(e.target.value===""){
        debounce.current.style.display = "none"
        debounce.current.style.height = "0"
        setDeb([])
      }else{
        debounce.current.style.display = "block"
        debounce.current.style.height = "400px"
        setDeb(temp);
      }
    }

  return (
    <>

{/* _________________________________Debounce___________________________________________________________ */}

<div className="deb-div"  ref={debounce}>

<div>
  {deb.map((e)=>{
    return <Link to={`/bookatable/${e.id}`} className="deb-inner-div" onClick={()=>{
      setDeb([]);
      debounce.current.style.height = "0"
      debounce.current.style.display = "none"
    }}>
      <div>
        <img src={e.image} alt="" />
      </div>
      <div>{e.name}</div>
      <div>{e.category}</div>
    </Link>
  })}
</div>


</div>







{/* _________________________________Debounce___________________________________________________________ */}


      <div className="nav">
        <div className="leftNav">
          <NavLink to="/">
            <img src={logo} alt="" style={{ cursor: "pointer" }} />
          </NavLink>
          <div className="navDropMenu">
            <img src={locationLogo} />
            <select className="navdropdown">
              <option value="del">Delhi</option>
              <option value="mum">Mumbai</option>
              <option value="kol">Kolkata</option>
              <option value="goa">Goa</option>
            </select>
          </div>
        </div>
        <div className="centerNav">
          {showSearch ? (
           <div className='search-a-box'>
           <div className='srh-a'>
           <FaSearch/>
           </div>
           <input type="text"  placeholder='Search for Restaurants, Cuisines, Location...'  value={voice.length>0 ? voice : transcript}
           
           onChange={(e)=>Debouncing(e)} />

           <span className='cross-aa'>{ voice.length>0 || listening ==false ? <GiTireIronCross onClick={()=>{
             setVoice("");
             debounce.current.style.height = "0"
             debounce.current.style.display = "none"
               resetTranscript();
           }}/> : null} </span>


           <div className='mic-a'   >
               <div onClick={voiceApp}>
                      {flag ? <FaMicrophoneSlash onClick={SpeechRecognition.startListening}/> : <FaMicrophone onClick={SpeechRecognition.stopListening}/>}
               </div>
           </div>
           <div className='srch-btn'>
           <button>Search</button>
           </div>
       </div>
          ) : (
            <div className="navigations-two">
              <NavLink
                to="/"
                className="navlink curr home"
                onClick={() => {
                  document
                    .querySelector(".bookatable")
                    .classList.remove("curr");
                  document
                    .querySelector(".dienoutpay")
                    .classList.remove("curr");
                  document.querySelector(".events").classList.remove("curr");
                  document.querySelector(".blog").classList.remove("curr");
                  document.querySelector(".home").classList.add("curr");
                  setIsCurr({
                    home: true,
                    bookatable: false,
                    dienoutpay: false,
                    events: false,
                    blog: false,
                  });
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/bookatable"
                className="navlink bookatable"
                onClick={() => {
                  document
                    .querySelector(".dienoutpay")
                    .classList.remove("curr");
                  document.querySelector(".events").classList.remove("curr");
                  document.querySelector(".blog").classList.remove("curr");
                  document.querySelector(".home").classList.remove("curr");
                  document.querySelector(".bookatable").classList.add("curr");
                  setIsCurr({
                    home: false,
                    bookatable: true,
                    dienoutpay: false,
                    events: false,
                    blog: false,
                  });
                }}
              >
                Book a Table
              </NavLink>
              <NavLink
                to="/dineoutpay"
                className="navlink dienoutpay"
                onClick={() => {
                  document.querySelector(".events").classList.remove("curr");
                  document.querySelector(".blog").classList.remove("curr");
                  document.querySelector(".home").classList.remove("curr");
                  document
                    .querySelector(".bookatable")
                    .classList.remove("curr");
                  document.querySelector(".dienoutpay").classList.add("curr");
                  setIsCurr({
                    home: false,
                    bookatable: false,
                    dienoutpay: true,
                    events: false,
                    blog: false,
                  });
                }}
              >
                Dineout Pay
              </NavLink>
              <NavLink
                to="/events"
                className="navlink events"
                onClick={() => {
                  document
                    .querySelector(".dienoutpay")
                    .classList.remove("curr");
                  document.querySelector(".blog").classList.remove("curr");
                  document.querySelector(".home").classList.remove("curr");
                  document
                    .querySelector(".bookatable")
                    .classList.remove("curr");
                  document.querySelector(".events").classList.add("curr");
                  setIsCurr({
                    home: false,
                    bookatable: false,
                    dienoutpay: false,
                    events: true,
                    blog: false,
                  });
                }}
              >
                Events
              </NavLink>
              <NavLink
                to="/blog"
                className="navlink blog"
                onClick={() => {
                  document
                    .querySelector(".dienoutpay")
                    .classList.remove("curr");
                  document.querySelector(".events").classList.remove("curr");
                  document.querySelector(".home").classList.remove("curr");
                  document
                    .querySelector(".bookatable")
                    .classList.remove("curr");
                  document.querySelector(".blog").classList.add("curr");
                  setIsCurr({
                    home: false,
                    bookatable: false,
                    dienoutpay: false,
                    events: false,
                    blog: true,
                  });
                }}
              >
                Blog
              </NavLink>
            </div>
          )}





        </div>
        <div className="rightNav">
          {login ? (
            <div className="button">
              <button
                className="loginBtn"
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
              >
                LOG IN
              </button>
            </div>
          ) : (
            <div
              className="userLogin"
              onClick={() => {
                setLogin(true);
              }}
              style={{
                background: "#ff645a",
                color: "#fff",
                fontWeight: "700",
                cursor: "pointer",
                padding: ".6rem",
                borderRadius: ".4rem",
              }}
            >
              {LoginduserName}
            </div>
          )}
          <div className="forSmallScreen">
            {/* <div className="profileDrop"> */}
            <img className="menubtn" src={menu} alt="" onClick={toogleMenu} />

            <div
              className="menu"
              style={{ display: menuStatus ? "flex" : "none" }}
            >
              <NavLink to="/" className="navlink">
                Home
              </NavLink>
              <NavLink to="/bookatable" className="navlink">
                Book a table
              </NavLink>{" "}
              <NavLink to="/bookatable" className="navlink">
                Dienout pay
              </NavLink>
              <NavLink to="/events" className="navlink">
                Events
              </NavLink>
              <NavLink to="/blog" className="navlink">
                Blog
              </NavLink>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <nav
        className="secondNav"
        style={{ display: secondnav ? "flex" : "none" }}
      >
        <div className="navigations">
          <NavLink
            to="/"
            className="navlink curr home"
            onClick={() => {
              document.querySelector(".bookatable").classList.remove("curr");
              document.querySelector(".dienoutpay").classList.remove("curr");
              document.querySelector(".events").classList.remove("curr");
              document.querySelector(".blog").classList.remove("curr");
              document.querySelector(".home").classList.add("curr");
              setIsCurr({
                home: true,
                bookatable: false,
                dienoutpay: false,
                events: false,
                blog: false,
              });
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/bookatable"
            className="navlink bookatable"
            onClick={() => {
              document.querySelector(".dienoutpay").classList.remove("curr");
              document.querySelector(".events").classList.remove("curr");
              document.querySelector(".blog").classList.remove("curr");
              document.querySelector(".home").classList.remove("curr");
              document.querySelector(".bookatable").classList.add("curr");
              setIsCurr({
                home: false,
                bookatable: true,
                dienoutpay: false,
                events: false,
                blog: false,
              });
            }}
          >
            Book a Table
          </NavLink>
          <NavLink
            to="/dineoutpay"
            className="navlink dienoutpay"
            onClick={() => {
              document.querySelector(".events").classList.remove("curr");
              document.querySelector(".blog").classList.remove("curr");
              document.querySelector(".home").classList.remove("curr");
              document.querySelector(".bookatable").classList.remove("curr");
              document.querySelector(".dienoutpay").classList.add("curr");
              setIsCurr({
                home: false,
                bookatable: false,
                dienoutpay: true,
                events: false,
                blog: false,
              });
            }}
          >
            Dineout Pay
          </NavLink>
          <NavLink
            to="/events"
            className="navlink events"
            onClick={() => {
              document.querySelector(".dienoutpay").classList.remove("curr");
              document.querySelector(".blog").classList.remove("curr");
              document.querySelector(".home").classList.remove("curr");
              document.querySelector(".bookatable").classList.remove("curr");
              document.querySelector(".events").classList.add("curr");
              setIsCurr({
                home: false,
                bookatable: false,
                dienoutpay: false,
                events: true,
                blog: false,
              });
            }}
          >
            Events
          </NavLink>
          <NavLink
            to="/blog"
            className="navlink blog"
            onClick={() => {
              document.querySelector(".dienoutpay").classList.remove("curr");
              document.querySelector(".events").classList.remove("curr");
              document.querySelector(".home").classList.remove("curr");
              document.querySelector(".bookatable").classList.remove("curr");
              document.querySelector(".blog").classList.add("curr");
              setIsCurr({
                home: false,
                bookatable: false,
                dienoutpay: false,
                events: false,
                blog: true,
              });
            }}
          >
            Blog
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
