import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import store from "../../Store";
import "./ProductDetails.css";
import getDirection from "./assets/path.webp";
import calender from "./assets/calendar-img.webp";
import left_arrow from "./assets/left_arrow.png";
import right_arrow from "./assets/right_arrow.png";
import { Link } from "react-router-dom";
import add from "./assets/add.png";
import minus from "./assets/minus.png";
import HomeNav from "../HomeNav/HomeNav";

const ProductDetails = ({ e, setCheckProps }) => {
  const [show, setShow] = useState({
    showBreakfast: false,
    showLunch: false,
    showDinner: false,
  });
  const [obj, setObj] = useState({});
  let index = useParams();
  index = parseInt(index.id);
  // let data = useSelector((store) => {
  //   return store.products;
  // });
  const fetchData = async () => {
    let res = await fetch(`https://dineoutclone-foc1.onrender.com/products`);
    let item = await res.json();
    // console.log("item: ", item);
    item.filter((e) => {
      if (e.id === index) {
        // console.log(e);
        setObj(e);
      }
    });
    // setData(item);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);

  // let obj = data[0];
  // console.log("data:", data[index.e]);
  const d = new Date();
  const weekDay = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = weekDay[d.getDay()];
  const month = months[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  // console.log(year);
  const [selectedDate, setSelectedDate] = useState(date);
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [guestTime, setGuestTime] = useState(null);
  const [mobile, setMobile] = useState(null);
  // console.log("name:", guestName);
  const setProps = () => {
    setCheckProps({
      name: guestName,
      date: selectedDate,
      month: month,
      time: guestTime,
      guests: guestCount,
      mobile: mobile,
      hotelName: obj.name,
      hotelAdd:
        obj.discription2 +
        " " +
        obj.discription3 +
        " " +
        obj.discription4 +
        " " +
        obj.discription5,
    });
  };

  const setTime = (e) => {
    // console.log(e);
    setGuestTime(e);
    setShow({
      showBreakfast: false,
      showLunch: false,
      showDinner: false,
    });
  };
  return (
    <>
      <div className="main">
        <div className="left">
          <div className="hotel">
            <div className="upper">
              <img src={obj.image} alt="" />
            </div>
            <div className="lower">
              <div className="left">
                <h2>{obj.name}</h2>
                <p className="description">
                  {obj.discription1} | {obj.discription2}, {obj.discription3},{" "}
                  {obj.discription4}, {obj.discription5}
                </p>
                <p className="location_details">
                  {obj.location1} | {obj.location2} |
                  <span className="getDirection">
                    <img src={getDirection} alt="" /> Get direction
                  </span>
                </p>
                <p className="duration">
                  Time: <span className="time"> (Opens at 12:00 PM)</span>
                </p>
              </div>
              <div className="right">
                <span className="rating">{obj.rating}</span>
                <span className="reviwes">81 reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="proceed">
          <h3 className="heading">Select an Offer or Deal</h3>
          <div className="select">
            <div className="date">
              <p>Select Date</p>
              <div className="calender">
                <span className="month">
                  <div className="monthName">{month}</div>
                  <img src={calender} alt="" />
                </span>
                <img className="leftarrow" src={left_arrow} alt="" />
                <ul className="day">
                  <li key={50} onClick={() => setSelectedDate(date)}>
                    <div className="name">{day}</div>
                    <div className="dating">{date}</div>
                  </li>
                  {weekDay.map((e, i) => {
                    if (day === e) {
                      return (
                        <>
                          <li key={i} onClick={() => setSelectedDate(date + 1)}>
                            <div className="name">
                              {i + 1 === weekDay.length
                                ? weekDay[0]
                                : weekDay[i + 1]}
                            </div>
                            <div className="dating">{date + 1}</div>
                          </li>
                        </>
                      );
                    }
                  })}
                </ul>
                <img className="rightarrow" src={right_arrow} alt="" />
              </div>
            </div>
            <div className="slot">
              <p>Time</p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#a1a1a1",
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                }}
              >
                Choose an available time slot{" "}
                <span
                  className="guestTime"
                  style={{ display: guestTime ? "block" : "none" }}
                >
                  {guestTime}
                </span>
              </p>
              <nav>
                <div
                  className="breakfast "
                  onClick={() => {
                    document.querySelector(".lunch").classList.remove("active");
                    document
                      .querySelector(".dinner")
                      .classList.remove("active");
                    document
                      .querySelector(".breakfast")
                      .classList.add("active");
                    setShow({
                      showBreakfast: true,
                      showLunch: false,
                      showDinner: false,
                    });
                  }}
                >
                  Breakfast
                </div>
                <div
                  className="lunch"
                  onClick={() => {
                    document
                      .querySelector(".dinner")
                      .classList.remove("active");
                    document
                      .querySelector(".breakfast")
                      .classList.remove("active");
                    document.querySelector(".lunch").classList.add("active");
                    setShow({
                      showBreakfast: false,
                      showLunch: true,
                      showDinner: false,
                    });
                  }}
                >
                  Lunch
                </div>
                <div
                  className="dinner"
                  onClick={() => {
                    document
                      .querySelector(".breakfast")
                      .classList.remove("active");
                    document.querySelector(".lunch").classList.remove("active");
                    document.querySelector(".dinner").classList.add("active");
                    setShow({
                      showBreakfast: false,
                      showLunch: false,
                      showDinner: true,
                    });
                  }}
                >
                  Dinner
                </div>
              </nav>
              <div className="times show">
                <div
                  className="forBreakfast"
                  style={{ display: show.showBreakfast ? "grid" : "none" }}
                >
                  <span className="theTime" onClick={() => setTime("10:30 AM")}>
                    10:30 AM
                  </span>
                  <span className="theTime" onClick={() => setTime("10:45 AM")}>
                    10:45 AM
                  </span>
                  <span className="theTime" onClick={() => setTime("11:00 AM")}>
                    11:00 AM
                  </span>
                  <span className="theTime" onClick={() => setTime("11:15 AM")}>
                    11:15 AM
                  </span>
                  <span className="theTime" onClick={() => setTime("11:30 AM")}>
                    11:30 AM
                  </span>
                  <span className="theTime" onClick={() => setTime("11:45 AM")}>
                    11:45 AM
                  </span>
                </div>
                <div
                  className="lunch"
                  style={{ display: show.showLunch ? "grid" : "none" }}
                >
                  <span className="theTime" onClick={() => setTime("12:00 PM")}>
                    12:00 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("12:15 PM")}>
                    12:15 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("12:30 PM")}>
                    12:30 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("12:45 PM")}>
                    12:45 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("1:00 PM")}>
                    1:00 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("1:15 PM")}>
                    1:15 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("1:30 PM")}>
                    1:30 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("1:45 PM")}>
                    1:45 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("2:00 PM")}>
                    2:00 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("2:15 PM")}>
                    2:15 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("2:30 PM")}>
                    2:30 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("2:45 PM")}>
                    2:45 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("3:00 PM")}>
                    3:00 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("3:15 PM")}>
                    3:15 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("3:30 PM")}>
                    3:30 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("3:45 PM")}>
                    3:45 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("4:00 PM")}>
                    4:00 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("4:15 PM")}>
                    4:15 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("4:30 PM")}>
                    4:30 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("4:45 PM")}>
                    4:45 PM
                  </span>
                </div>
                <div
                  className="dinner"
                  style={{ display: show.showDinner ? "grid" : "none" }}
                >
                  <span className="theTime" onClick={() => setTime("5:00 PM")}>
                    5:00 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("5:15 PM")}>
                    5:15 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("5:30 PM")}>
                    5:30 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("5:45 PM")}>
                    5:45 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("6:00 PM")}>
                    6:00 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("6:15 PM")}>
                    6:15 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("6:30 PM")}>
                    6:30 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("6:45 PM")}>
                    6:45 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("7:00 PM")}>
                    7:00 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("7:15 PM")}>
                    7:15 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("7:30 PM")}>
                    7:30 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("7:45 PM")}>
                    7:45 PM
                  </span>
                  <span className="theTime" onClick={() => setTime("8:00 PM")}>
                    8:00 PM
                  </span>
                </div>
              </div>
            </div>
            <div className="guestDetails">
              <p>Enter Guest Details</p>
              <div
                className="guestCnt"
                style={{ display: guestTime ? "flex" : "none" }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    color: "#a1a1a1",
                  }}
                >
                  Guest
                </span>
                <img
                  src={add}
                  alt=""
                  onClick={() => {
                    setGuestCount(guestCount + 1);
                  }}
                />
                <span>{guestCount}</span>
                <img
                  src={minus}
                  alt=""
                  onClick={() => {
                    if (guestCount !== 0) {
                      setGuestCount(guestCount - 1);
                    }
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Enter Name..."
                onChange={(e) => setGuestName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter Mobile no..."
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          {guestCount > 0 ? (
            <div className="checkout">
              <Link to="/checkout">
                <button className="checkBtn" onClick={setProps}>
                  Continue
                </button>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
