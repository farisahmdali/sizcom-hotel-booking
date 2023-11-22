import React from "react";
import logo from "../asset/logo@2x.png"
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation()
  console.log(location)
  return (
    <nav className="flex bg-[#12121271] px-5 py-3 md:px-32 justify-between md:py-5 text-white fixed top-0 left-0 w-screen z-50 ">
      <div>
        <img width={100} src={logo} alt="" />
      </div>
      <div className=" items-center justify-between w-1/5 hidden font-medium uppercase text-[13px] lg:flex">
        <a href="/#" className={location.pathname==="/" ? "text-primary" : null}>Home</a>
        <a href={"/#rooms"} className={location.pathname==="/rooms" ? "text-primary" : null}>Rooms</a>
        <a href="#contact">Contact us</a>
        {/* <Link className="bg-primary px-4 py-2 shadow-lg">Book Now</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
