import {
  ContactContainer,
  ContactOne,
  ContactOneImage,
  ContactOneText,
} from "./Contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactOne>
        <ContactOneImage
          src="/assets/user.png"
          alt="user"
          height={120}
          width={120}
        />
        <ContactOneText>Book a zoom call with Isaac Martinez</ContactOneText>
      </ContactOne>
      <ContactOne>
        <ContactOneImage
          src="/assets/gold.png"
          alt="gold-bars"
          height={120}
          width={120}
        />
        <ContactOneText>Merchant Agreement Form</ContactOneText>
      </ContactOne>
    </ContactContainer>
  );
};

export default Contact;
