import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterLogo,
  FooterLogoContainer,
  FooterSocial,
  FooterSocials,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogoContainer>
        <FooterLogo src="/assets/logo.png" alt="logo" height={80} />
      </FooterLogoContainer>

      <FooterLinks>
        <FooterLink>Home</FooterLink>
        <FooterLink>About</FooterLink>
        <FooterLink>Services</FooterLink>
        <FooterLink>Contact Us</FooterLink>
      </FooterLinks>

      <FooterSocials>
        <FooterSocial src="/assets/InstagramLogo.png" alt="insta" />
        <FooterSocial src="/assets/TwitterLogo.png" alt="Twitter" />
        <FooterSocial src="/assets/LinkedinLogo.png" alt="LinkedIn" />
      </FooterSocials>
    </FooterContainer>
  );
};

export default Footer;
