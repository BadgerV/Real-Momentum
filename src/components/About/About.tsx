import {
  AboutBoxOne,
  AboutBoxTwo,
  AboutContainer,
  AboutHeader,
  AboutImage,
  AboutImageSide,
  AboutSmallText,
  AboutText,
  AboutTextSide,
} from "./About.styles";

const About = () => {
  return (
    <AboutContainer>
      <AboutBoxOne>
        <AboutImageSide>
          <AboutImage src="/assets/image-1.png" />
        </AboutImageSide>

        <AboutTextSide>
          <AboutText>About Me</AboutText>
          <AboutHeader>
            I help you align your goals and dreams with your values
          </AboutHeader>

          <AboutSmallText>
            Real momentum is a consulting service that helps clients develop and
            implement strategies to achieve their goals. It is professional and
            affordable.
          </AboutSmallText>
        </AboutTextSide>
      </AboutBoxOne>

      <AboutBoxTwo>
        <AboutTextSide>
          <AboutHeader>
            I help you align your goals and dreams with your values
          </AboutHeader>

          <AboutSmallText>
            Real momentum is a consulting service that helps clients develop and
            implement strategies to achieve their goals. It is professional and
            affordable.
          </AboutSmallText>
        </AboutTextSide>

        <AboutImageSide>
          <AboutImage src="/assets/image-2.png" />
        </AboutImageSide>
      </AboutBoxTwo>
    </AboutContainer>
  );
};

export default About;
