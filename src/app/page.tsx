import Background from "../pages/Background";
import "../pages/style.css";
import FloatingNavDemo from "../pages/Navbar";
import About from "../pages/About";
import Services from "../pages/Services";
import Team from "../pages/Team";
import ContactUs from "../pages/ContactUs";
import LogoDemo from "../pages/logo";
import FooterDiv from "../pages/footer-div";
import Footer from "../pages/footer"

export default function Home() {
  return (
    <div className="home">
      <LogoDemo />
      <Background />
      <FloatingNavDemo />
      <About />
      <Services />
      <Team />
      <ContactUs />
      <FooterDiv />
      <Footer/>
    </div>
  );
}
