import React from "react";
import { Link, Routes, Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import Features from "./Pages/Features";
import Shop from "./Pages/Shop";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
const RoutersU = () => {
  return (
    <div>
      <div className="Menu">
        <div>
          <h2>Millions</h2>
        </div>

        <nav className="sub-menu">
          <Link className="subMenu" to="/">
            Home <IoIosArrowDown style={{ marginTop: "5px" }} />
          </Link>
          <Link className="subMenu" to="/booking">
            Booking <IoIosArrowDown style={{ marginTop: "5px" }} />
          </Link>
          <Link className="subMenu" to="/shop">
            Shop <IoIosArrowDown style={{ marginTop: "5px" }} />
          </Link>
          <Link className="subMenu" to="/features">
            Features <IoIosArrowDown style={{ marginTop: "5px" }} />
          </Link>
        </nav>
        <div className="icons">
          <Link>
            <AiOutlineSearch />
          </Link>
          <Link>
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </div>
  );
};

export default RoutersU;
