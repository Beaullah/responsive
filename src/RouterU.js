import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

const Router = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="logo">
          <h2>Blog</h2>
        </div>
        <div>
          <li className="list">
            <Link className="lis" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="lis" to="/Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="lis" to="/Service">
              Service
            </Link>
          </li>
          <li>
            <Link className="lis" to="/About">
              About
            </Link>
          </li>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default Router;
