import Navbar from "../Navbar/Navbar";
import {
  InputContainer,
  SplashContainer,
  SplashInput,
  SplashInputButton,
  SplashText,
} from "./Splash.styles";

const Splash = () => {
  return (
    <SplashContainer id="home">
      <Navbar />

      <SplashText>
        I offer <br />
        consultant services
      </SplashText>

      <InputContainer>
        <SplashInput type="text" placeholder="youremail@domain.com" />
        <SplashInputButton>Get Started</SplashInputButton>
      </InputContainer>
    </SplashContainer>
  );
};

export default Splash;
