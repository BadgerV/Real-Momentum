import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 3.5rem 7rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;

  @media screen and (max-width: 1064px) {
    padding: 3.5rem 5rem;
  }
  @media screen and (max-width: 966px) {
    padding: 3.5rem 3rem;
    gap: 5rem;
  }

  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr;
    padding: 3.5rem 10rem;
    gap: 2rem;
  }

  @media screen and (max-width: 672px) {
    padding: 3.5rem 8rem;
  }

  @media screen and (max-width: 627px) {
    padding: 3.5rem 5rem;
  }
  @media screen and (max-width: 542px) {
    padding: 3.5rem 3rem;
  }
  @media screen and (max-width: 452px) {
    padding: 3.5rem 2rem 3.5rem 3rem;
  }
`;

export const ContactOne = styled.div`
  background-color: black;
  position: relative;

  padding: 0.5rem 2rem 0.5rem 0;

  border-radius: 15px;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const ContactOneImage = styled.img`
  position: absolute;

  top: 50%;
  left: -3rem;

  transform: translateY(-50%);

  @media screen and (max-width: 884px) {
    height: 6rem;
    width: 6rem;
  }
`;

export const ContactOneText = styled.span`
  display: block;
  margin-left: 6rem;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  width: 80%;

  @media screen and (max-width: 884px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 770px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 464px) {
    font-size: 1.1rem;
    margin-left: 4rem;
  }

  @media screen and (max-width: 395px) {
    font-size: 1rem;
  }
`;
