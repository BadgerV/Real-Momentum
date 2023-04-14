import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Splash from "./components/Splash/Splash";
import { GlobalStyle } from "./main.styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Splash />
      <Services />
      <About />
      <Form />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
