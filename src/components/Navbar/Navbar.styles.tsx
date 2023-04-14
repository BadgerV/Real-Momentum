import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0rem 2rem;
  height: 15vh;

  background-color: hsla(0, 0%, 7.8431372549019605%, 0.401);

  @media screen and (max-width: 957px) {
    height: 5rem;
  }

  @media screen and (max-width: 771px) {
    padding: 0 1rem;
  }

  @media screen and (max-width: 467px) {
    padding: 0 0.5rem;
  }
`;

export const NavbarLogo = styled.img`
  display: block;
`;

export const NavbarLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 901px) {
    gap: 2rem;
  }

  @media screen and (max-width: 735px) {
    gap: 1.5rem;
  }
  @media screen and (max-width: 629px) {
    display: none;
  }
`;
export const NavbarLink = styled.a`
  color: white;
  transition: all 0.1s ease-out;
  height: 100%;

  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  cursor: pointer;

  &:hover {
    color: #d2ac47;
    border-bottom: 3px solid #d2ac47;
  }

  @media screen and (max-width: 735px) {
    padding: 0 0.3rem;
  }
  @media screen and (max-width: 663px) {
    font-size: 0.9rem;
  }
`;

export const NavbarMobileCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: hsla(0, 0%, 100%, 0.799);
  justify-content: center;
  align-items: center;
  display: none;

  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 3rem;

  transition: 0.1s all ease-out;
`;

export const NavbarMobileLink = styled.div`
  cursor: pointer;
  font-weight: 500;
  padding: 1rem 0;
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
`;

export const NavbarMenu = styled.img`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 2rem;

  transform: translateY(-50%);

  z-index: 99999;
  height: 3rem;
  aspect-ratio: 1;
  z-index: -99999999;

  @media screen and (max-width: 629px) {
    display: block;
    height: 3rem;
    z-index: 99;
  }

  @media screen and (max-width: 467px) {
    right: 1rem;
    height: 2.5rem;
  }
`;
