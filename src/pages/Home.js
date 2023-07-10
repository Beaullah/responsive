import React from "react";
import towel from "../Images/towel.jpg";
import { TbMassage } from "react-icons/tb";
import { GiArmorPunch } from "react-icons/gi";
import { IoIosPerson } from "react-icons/io";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="main">
      <div className="towel-background">
        <div className="towel-image">
          <img
            src={towel}
            style={{
              width: "100%",
              height: "600px",
            }}
          />
        </div>
        <div className="towel-text">
          <h1 style={{ fontSize: "50px" }}>
            There is nothing better than a <br />{" "}
            <span style={{ color: "" }}> quick massage</span>
          </h1>
          <p>Lorem</p>
          <button>Book an appointment</button>
        </div>
      </div>
      <div className="vector-icons">
        <div className="vector1">
          <TbMassage size="40px" />
          <h4>Deep tissue</h4>
        </div>
        <div className="vector2">
          <GiArmorPunch size="40px" />
          <h4>Wellness</h4>
        </div>
        <div className="vector3">
          <IoIosPerson size="40px" />
          <h4>Reflexology</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
