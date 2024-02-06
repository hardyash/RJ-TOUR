import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutimg from "../assests/ab.jpg";
import Footer from "../components/footer";
import AboutUs from "../components/Aboutus";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroimg={Aboutimg}
        title="About"
        btncls="hide "
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
