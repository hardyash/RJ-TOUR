import "./Trip.css";
import TripData from "./Tripdata";
import img1 from "../assests/Mount-Abu.jpg";
import img2 from "../assests/chittor.jpeg";
import img3 from "../assests/thar.webp";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Tours</h1>
      <p>Discover unique destinies using google maps.</p>

      <div className="tripcard">
        <TripData
          image={img1}
          heading="MountAbu-Udaipur"
          text="This tour will take you to the city of lakes, Udaipur, where you will witness the charm of Lake Pichola and the grace it holds when the sun splashes its golden shimmering light as it sets on the naked Aravali hills."
        />
        <TripData
          image={img2}
          heading="Chittorgarh"
          text="Chittorgarh is named after its most imposing structure, the Chittorgarh Fort which stands atop a 180 metre high hill and is spread across 700 acres. Chittorgarh Fort has had a tumultuous past. This bastion of the Rajputs has faced violent attacks thrice in its entire history."
        />
        <TripData
          image={img3}
          heading="Jaisalmer-Thar desert"
          text="Jaisalmer, the small old city in the Thar desert of Indian state Rajasthan, is popularly known as the 'Golden city.The Sam sand dunes and the Golden Fort are major attractions of the city."
        />
      </div>
    </div>
  );
}

export default Trip;
