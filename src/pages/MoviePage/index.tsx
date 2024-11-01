import Nav from "../../components/Navbar";
import Banner from "./Banner";
import DownloadLinks from "./DownloadLinks";
import Reviews from "./Reviews";

const MoviePage = () => {
  return (
    <div className="w-full h-auto bg-black pt-[62px] md:pt-[74px]">
      <Nav />
      <Banner />
      <DownloadLinks />
      <Reviews />
    </div>
  );
};

export default MoviePage;
