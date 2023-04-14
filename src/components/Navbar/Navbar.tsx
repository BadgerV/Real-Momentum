import { useState } from "react";

import {
  NavbarContainer,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarMenu,
  NavbarMobileCont,
  NavbarMobileLink,
} from "./Navbar.styles";

import { Link, animateScroll as scroll } from "react-scroll";

import Form from "../Form/Form";
import Services from "../Services/Services";
import About from "../About/About";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!open);
  };
  return (
    <NavbarContainer>
      <NavbarLogo src="assets/logo.png" alt="logo" height={80} />
      <NavbarLinks>
        <NavbarLink>
          <Link to="home" smooth={true} duration={500} onClick={changeOpen}>
            Home
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="about" smooth={true} duration={500} onClick={changeOpen}>
            About
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="services" smooth={true} duration={500} onClick={changeOpen}>
            Services
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link to="contact" smooth={true} duration={500} onClick={changeOpen}>
            Contact Us
          </Link>
        </NavbarLink>
      </NavbarLinks>

      <NavbarMobileCont
        style={{
          right: open ? "0" : "-100%",
          display: open ? "block" : "none",
        }}
      >
        <NavbarMobileLink>
          <Link to="home" smooth={true} duration={500} onClick={changeOpen}>
            Home
          </Link>
        </NavbarMobileLink>
        <NavbarMobileLink>
          <Link to="about" smooth={true} duration={500} onClick={changeOpen}>
            About
          </Link>
        </NavbarMobileLink>
        <NavbarMobileLink>
          <Link to="services" smooth={true} duration={500} onClick={changeOpen}>
            Services
          </Link>
        </NavbarMobileLink>
        <NavbarMobileLink>
          <Link to="contact" smooth={true} duration={500} onClick={changeOpen}>
            Contact Us
          </Link>
        </NavbarMobileLink>
      </NavbarMobileCont>
      <NavbarMenu
        src="assets/Menu.svg"
        alt="Menu"
        onClick={changeOpen}
        style={{ display: open ? "none" : "block" }}
      />
      <NavbarMenu
        src="assets/close.svg"
        alt="Menu"
        onClick={changeOpen}
        style={{ display: open ? "block" : "none" }}
      />
    </NavbarContainer>
  );
};

export default Navbar;
