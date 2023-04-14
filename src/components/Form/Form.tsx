import {
  FormContainer,
  FormLeft,
  FormLeftImageContainer,
  FormLeftImage,
  FormLeftName,
  FormLeftRole,
  FormRight,
  FormRightConsult,
  FormRightShoot,
  FormRightInput,
  FormRightTextarea,
  FormRightButton,
  FormRightContainer,
} from "./Form.styles";

const Form = () => {
  return (
    <FormContainer id="contact">
      <FormLeft>
        <FormLeftImageContainer>
          <FormLeftImage src="/assets/profile-pic.png" alt="pic" />
        </FormLeftImageContainer>
        <FormLeftName>Isaac Martinez</FormLeftName>
        <FormLeftRole>Financial Advisor / Consultant</FormLeftRole>
      </FormLeft>

      <FormRight>
        <FormRightConsult>Need Consulting?</FormRightConsult>
        <FormRightShoot>Shoot me a message!</FormRightShoot>

        <FormRightContainer>
          <FormRightInput type="text" placeholder="What is your name" />
          <FormRightInput
            type="text"
            placeholder="What is your Email Address"
          />
          <FormRightTextarea
            rows={6}
            placeholder="Write your message"
          ></FormRightTextarea>
          <FormRightButton>Send a message</FormRightButton>
        </FormRightContainer>
      </FormRight>
    </FormContainer>
  );
};

export default Form;
