import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="maindiv">
      <AcUnitIcon />
      <ul className="ul">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/project"}>Portfolio</NavLink>
        </li>
      </ul>
      <button id="btnHire" onClick={()=>{
 navigate("/contact")
      }}> Hire Me</button>
    </div>
  );
};

export default Navbar;
