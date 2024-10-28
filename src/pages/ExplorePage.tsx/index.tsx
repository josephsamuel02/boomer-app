import Nav from "../Landing/Navbar";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const ExplorePage = () => {
  return (
    <div className="w-full h-auto bg-black pt-20 ">
      <Nav />
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default ExplorePage;
