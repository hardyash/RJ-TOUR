import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Homeimg from "../assests/homeimg.jpg";
import Trip from "../components/Trip";
import Footer from "../components/footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={Homeimg}
        title="Your Journey Your Story"
        text="Choose your favourite place"
        btntext="Travel Plan"
        url="/"
        btncls="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
