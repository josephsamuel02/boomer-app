/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaFilm, FaStar } from "react-icons/fa";

const SearchResult = () => {
  // const artworkSearchResults = useSelector(
  //   (state: any) => state.FetchArtwork.artwork_search.data
  // );
  const trendData = [
    {
      title: "John Wick 4",
      rating: 9.3,
      image: "/images/jwk.jpg",
      type: "Series",
      genre: "Action",
    },
    { title: "Aquaman", rating: 8.5, image: "/images/aquam.jpg", type: "", genre: "Drama" },
    {
      title: "Transformer",
      rating: 7.4,
      image: "/images/trans.jpg",
      type: "Series",
      genre: "Sci-Fi",
    },
    {
      title: "Game of Thrones",
      rating: 6.8,
      image: "/images/game.jpg",
      type: "Series",
      genre: "Sci-Fi",
    },
    {
      title: "True Blood",
      rating: 8.0,
      image: "/images/blood.jpg",
      type: "Movie",
      genre: "Horror",
    },
    {
      title: "Spider Man",
      rating: 9.0,
      image: "/images/spider.jpg",
      type: "Movie",
      genre: "Action",
    },
    {
      title: "Mr Bones",
      rating: 6.8,
      image: "/images/mrbones.jpeg",
      type: "Series",
      genre: "Comedy",
    },
    { title: "Avatar", rating: 8.0, image: "/images/avata.jpg", type: "", genre: "Animation" },
    { title: "Jumangi", rating: 9.0, image: "/images/juma.avif", type: "", genre: "Action" },
    // Add more movies if needed
    {
      title: "Poco loco",
      rating: 6.8,
      image: "/images/poco.jpg",
      type: "Movie",
      genre: "Animation",
    },
    {
      title: "Vampire's Diary",
      rating: 8.0,
      image: "/images/Vdiary.jpg",
      type: "Series",
      genre: "Horror",
    },
    {
      title: "Mr Bean",
      rating: 9.0,
      image: "/images/bean.jpg",
      type: "Movie",
      genre: "Comedy",
    },
    {
      title: "Avengers",
      rating: 8.0,
      image: "/images/aveng.jpg",
      type: "Series",
      genre: "Thriller",
    },
    {
      title: "Spong Bob",
      rating: 9.0,
      image: "/images/bob.jpg",
      type: "Movie",
      genre: "Comedy",
    },
  ];
  const [searchResults] = useState([]);

  // useEffect(() => setSearchResults(artworkSearchResults), [artworkSearchResults]);

  return (
    <div className="w-full mx-auto h-auto bg-black">
      <div className="w-full mx-8  py-2">
        {searchResults ? (
          <h3 className="text-[18px] font-Poppins text-white">
            Results
            <span className="text-[#f75313]">({searchResults && searchResults.length})</span>
          </h3>
        ) : (
          <h3 className="text-[20px] font-Poppins text-black">
            No Results Found for <i>''</i>
          </h3>
        )}
      </div>

      <div className="px-4 flex lg:grid grid-flow-row  lg:grid-cols-5  flex-row flex-wrap items-center   w-full   ">
        {trendData.map((d, i) => (
          <div
            key={i}
            className="w-[200px] h-[260px] bg-black shadow shadow-[#ffffff44] rounded mx-auto  my-6  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <div
              className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded"
              style={{ backgroundImage: `url(${d.image})` }}
            >
              <div className="absolute right-1 flex justify-center">
                <div className="flex flex-row items-center justify-between">
                  <FaFilm className="text-white" />
                  <p className="pl-3">{d.genre}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-2 ml-2">
              <h1 className=" line-clamp-2  h-[36px]   text-[12px] font-Raleway font-medium text-white ">
                {d.title} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </h1>
              <div className="px-1 flex flex-row items-center my-2 ">
                <p className="  flex flex-row items-center font-Poppins text-sm">
                  <FaStar className="text-[#F25B38]" />
                  <span className="pl-1 text-sm"> {d.rating}</span>
                </p>
                <p className=" ml-auto font-Poppins text-xs border border-[#ffffff71] rounded-full px-2">
                  {d.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
