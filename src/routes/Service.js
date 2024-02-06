import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Serimg from "../assests/ser.jpg";
import Footer from "../components/footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroimg={Serimg}
        title="Service"
        btncls="hide "
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
