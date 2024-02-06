import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contimg from "../assests/ab.jpg";
import Footer from "../components/footer";
import ContactForm from "../components/Contact-from";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroimg={contimg}
        title="Contact"
        btncls="hide "
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
