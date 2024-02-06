import "./Destination.css";
import DestinationData from "./Destinationdata";
import amb1 from "../assests/amber.jpg";
import amb2 from "../assests/amber2.jpeg";
import cp1 from "../assests/citypl1.webp";
import cp2 from "../assests/citypl2.jpg";
import rm1 from "../assests/ranthm1.jpg";
import rm2 from "../assests/ranthm2.jpeg";

const Destination = () => {
  return (
    <div classname="distination">
      <h1>Popular Destinations</h1>
      <p>Tours give you opportunity to discover new places and culture</p>

      <DestinationData
        className="first-des"
        heading="Amber Palace"
        text="It is also known as Amber fort is a Fort situated in Amer, Rajasthan, India. Amer is a town with a location of 4 square kilometers (1.5 sq mi) located 11 kilometers (6.8 mi) from Jaipur, the capital of Rajasthan. Located high up on a hill, it is the tourist attraction destination in Jaipur. The town of Amer was originally built by Meenas, and later it was ruled by Raja Man Singh (December 21, 1550– July 6, 1614). Amer Fort is known for its imaginative Hindu design elements. With its large ramparts and collection of gates and cobbled paths, the Fort overlooks Maota Lake, which is the major source of water for the Amer Palace."
        img1={amb1}
        img2={amb2}
      />

      <DestinationData
        className="first-des-rev"
        heading="City Palace of Udaipur"
        text="City Palace (Raj Mahal), Udaipur is a palace complex situated in the city of Udaipur in the Indian state of Rajasthan. It was built over a period of nearly 400 years, with contributions from several rulers of the Mewar dynasty. Its construction began in 1553, started by Maharana Udai Singh II of the Sisodia Rajput family as he shifted his capital from the erstwhile Chittor to the newfound city of Udaipur.[1] The palace is located on the east bank of Lake Pichola and has several palaces built within its complex"
        img1={cp1}
        img2={cp2}
      />

      <DestinationData
        className="first-des"
        heading="Ranthambore Tiger Reserve"
        text="Ranthambore National Park is located about 13.5 kilometers from the city of Sawai Madhopur in Rajasthan. Located at the junction of the Aravali and Vindhya hill ranges, this is one of the finest places to view wild animals, especially as they are used to being stared at here. The park covers an area of approximately 400 sq km, and if combined with the area of Sawai Man Singh Sanctuary area, is around 500 sq km.Ranthambore National Park is dotted with structures that remind you of bygone eras. There are numerous water bodies scattered all across the park, which provide perfect relief to the wild animals during the scorching hot days in summers. "
        img1={rm1}
        img2={rm2}
      />
    </div>
  );
};

export default Destination;
