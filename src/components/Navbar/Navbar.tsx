import {
  NavbarContainer,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarMenu,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo src="assets/logo.png" alt="logo" height={80} />
      <NavbarLinks>
        <NavbarLink>Home</NavbarLink>
        <NavbarLink>About</NavbarLink>
        <NavbarLink>Services</NavbarLink>
        <NavbarLink>Contact Us</NavbarLink>
      </NavbarLinks>
      <NavbarMenu src="assets/Menu.svg" alt="Menu" />
    </NavbarContainer>
  );
};

export default Navbar;
