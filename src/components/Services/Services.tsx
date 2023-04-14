import {
  ServiceBox,
  ServicesText,
  ServiceBoxContainer,
  ServiceBoxLower,
  ServiceBoxLowerImg,
  ServiceBoxUpper,
  ServiceBoxUpperHeader,
  ServicesContainer,
  ServicesHowText,
  ServiceBoxUpperText,
} from "./Services.styles";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesText>My Services</ServicesText>
      <ServicesHowText>How I Serve You Best</ServicesHowText>

      <ServiceBoxContainer>
        <ServiceBox>
          <ServiceBoxUpper>
            <ServiceBoxUpperHeader>Investment Analysis</ServiceBoxUpperHeader>
            <ServiceBoxUpperText>
              Analyze how an investment is likely to perform and how suitable it
              is for a particular client.
            </ServiceBoxUpperText>
          </ServiceBoxUpper>

          <ServiceBoxLower>
            <ServiceBoxLowerImg src="/assets/business.png" />
          </ServiceBoxLower>
        </ServiceBox>

        <ServiceBox>
          <ServiceBoxUpper>
            <ServiceBoxUpperHeader>Financial Planning</ServiceBoxUpperHeader>
            <ServiceBoxUpperText>
              Creating financial plans to outline the steps our clients need to
              take to achieve their financial goals.
            </ServiceBoxUpperText>
          </ServiceBoxUpper>

          <ServiceBoxLower>
            <ServiceBoxLowerImg src="/assets/coin.png" />
          </ServiceBoxLower>
        </ServiceBox>

        <ServiceBox>
          <ServiceBoxUpper>
            <ServiceBoxUpperHeader>Wealth Management</ServiceBoxUpperHeader>
            <ServiceBoxUpperText>
              An investment advisory practice that incorporates elements from
              various financial disciplines to meet the needs and goals of our
              clients.
            </ServiceBoxUpperText>
          </ServiceBoxUpper>

          <ServiceBoxLower>
            <ServiceBoxLowerImg src="/assets/sack.png" />
          </ServiceBoxLower>
        </ServiceBox>
      </ServiceBoxContainer>
    </ServicesContainer>
  );
};

export default Services;
