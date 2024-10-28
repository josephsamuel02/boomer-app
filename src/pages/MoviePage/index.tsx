import Nav from "../Landing/Navbar";
import Banner from "./Banner";
import DownloadLinks from "./DownloadLinks";
import Reviews from "./Reviews";

const MoviePage = () => {
  return (
    <div className="w-full h-auto bg-black mt-[72px] md:mt-[74px]">
      <Nav />
      <Banner />
      <DownloadLinks />
      <Reviews />
    </div>
  );
};

export default MoviePage;
