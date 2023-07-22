import { Navbar } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLink from "./NavLink";

export default function Navigation() {
  const navigate = useNavigate();
  const navLinks = ["About", "Mechanism", "Latest Update"];
  return (
    <Navbar className="sticky top-0 z-50 sm:px-16 py-5 drop-shadow-md bg-[#007bbd] text-white">
      <h1 className="font-semibold text-xl text-white">
        <Link to="/">
          <img src="src/assets/NavbarBrand.png" alt="logo" className="h-10" />
        </Link>
      </h1>
      <Navbar.Toggle 
        className="text-white hover:text-transparent"
      />
      <Navbar.Collapse
        className="bg-transparent"
      >
        {navLinks.map((nav, i) => (
          <NavLink content={nav} key={i} />
        ))}
        <button
          className="bg-white text-[#007CBD] px-7 py-2 rounded-full  "
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
}
