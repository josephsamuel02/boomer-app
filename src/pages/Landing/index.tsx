// Adjust the path as necessary

import Navbar from "../../components/Navbar";
import Adverts from "./Adverts";
import Footer from "../../components/Footer";
import LatestUploads from "./LatestUploads";
import NewSerires from "./NewSeries";
import Recommends from "./Recommends";
import Trending from "./Trending";
import GetTopRatedMovies from "./TopRatedMovies";

const Landing = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <Trending />
      <LatestUploads />
      <GetTopRatedMovies />
      <Recommends />
      <Adverts />
      <NewSerires />
      <Footer />
    </div>
  );
};

export default Landing;
