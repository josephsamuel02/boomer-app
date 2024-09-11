 // Adjust the path as necessary

import Adverts from "./Adverts";
import Footer from "./Footer";
import LatestUploads from "./LatestUploads";
import Navbar from "./Navbar";
import NewSerires from "./NewSeries";
import Recommends from "./Recommends";
import Trending from "./Trending";

const Landing = () => {
  return (
    <div className="w-full h-full flex flex-col text-[#ffffff]">
      <Navbar />

      <Trending/>

      <LatestUploads/>

      <Recommends/>
      
      <Adverts/>

      <NewSerires/>

      <Footer/>
      
    </div>
  );
};

export default Landing;
