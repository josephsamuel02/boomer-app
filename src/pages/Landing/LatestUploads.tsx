import { FaStar } from "react-icons/fa";
import { useState } from "react";

const LatestUploads = () => {
  // const navigate = useNavigate();
  // const trendData = [
  //   { title: "Poco loco", rating: 6.8, image: "/images/poco.jpg", genre: "Animation" },
  //   { title: "Vampire's Diary", rating: 8.0, image: "/images/Vdiary.jpg", genre: "Horror" },
  //   { title: "Mr Bean", rating: 9.0, image: "/images/bean.jpg", genre: "Comedy" },
  //   { title: "Avengers", rating: 8.0, image: "/images/aveng.jpg", genre: "Thriller" },
  //   { title: "Spong Bob", rating: 9.0, image: "/images/bob.jpg", genre: "Comedy" },
  //   { title: "John Wick 4", rating: 9.3, image: "/images/jwk.jpg", genre: "Action" },
  //   { title: "Aquaman", rating: 8.5, image: "/images/aquam.jpg", genre: "Drama" },
  //   { title: "Transformer", rating: 7.4, image: "/images/trans.jpg", genre: "Series" },
  //   { title: "Game of Thrones", rating: 6.8, image: "/images/game.jpg", genre: "Series" },
  //   { title: "True Blood", rating: 8.0, image: "/images/blood.jpg", genre: "Horror" },
  //   { title: "Spider Man", rating: 9.0, image: "/images/spider.jpg", genre: "Action" },
  //   { title: "Mr Bones", rating: 6.8, image: "/images/mrbones.jpeg", genre: "Comedy" },
  //   { title: "Avatar", rating: 8.0, image: "/images/avata.jpg", genre: "Animation" },
  //   { title: "Jumangi", rating: 9.0, image: "/images/juma.avif", genre: "Action" },

  //   // Add more movies if needed
  // ];
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
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     // Trigger the dispatch when Enter is pressed
  //     // dispatch(ArtSearch({ search_string: searchText }));
  //     navigate(PUBLIC_ROUTES.SEARCH);
  //   }
  // };
  // Filter by genre or search term (either by title or genre)
  const filteredData = trendData.filter((movie) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      (!selectedGenre || movie.genre === selectedGenre) &&
      (movie.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        movie.genre.toLowerCase().includes(lowerCaseSearchTerm))
    );
  });

  // Display only the first 4 movies
  const displayedData = filteredData.slice(0, 4);

  // Get unique genres and limit to the first 5
  const genres = Array.from(new Set(trendData.map((movie) => movie.genre))).slice(0, 5);

  return (
    <div className="w-full h-auto mt-16 px-4 md:px-6 flex flex-col">
      {/* Search Bar with Button */}
      <div className="flex items-center  rounded-lg  ">
        <input
          type="text"
          placeholder="Search by title or genre..."
          className="px-4 py-2 outline-none w-[390px] rounded-l-md border border-[#ffffff93] bg-black text-[#ffffff]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="text-[12px] md:text-[16px] text-white text-center px-3    py-y md:py-2.5 bg-[#F25B38] hover:bg-[#efa898] font-roboto   rounded-r-md cursor-pointer">
          Search
        </button>
      </div>

      <div className=" w-full flex flex-row items-center  p-4 pb-5">
        <h1 className="text-3xl pt-6 font-Raleway">Latest Uploads</h1>
        {/* Genre Buttons (Limit to 5) */}
        <div className="flex flex-row   ml-auto mr-5 w-auto space-x-2">
          {genres.map((genre, index) => (
            <button
              key={index}
              className={`mx-0.5 border border-whitesmoke rounded-md w-[90px] h-[40px] hover:bg-[#F25B38] ${
                selectedGenre === genre ? "bg-[#F25B38] text-white" : ""
              }`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}

          {/* Clear Filter Button */}
          <button
            className="mx-0.5   border border-whitesmoke rounded-md w-[50px] h-[40px] hover:bg-[#F25B38]"
            onClick={() => {
              setSelectedGenre(null);
              setSearchTerm("");
            }}
          >
            All
          </button>
        </div>
      </div>

      {/* Movie Cards */}
      <div className="flex w-full overflow-x-scroll">
        <div className="flex flex-row py-4 w-auto mr-20 ">
          {displayedData.map((d, i) => (
            <div
              key={i}
              className="flex w-[300px] h-[250px] bg-cover bg-center relative items-end mt-4 rounded-md border border-[#a2a3a3ad]  bg-black   mx-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              style={{ backgroundImage: `url(${d.image})` }}
            >
              <div className="w-full h-[100px] flex flex-col bg-black bg-opacity-10 backdrop-blur-md rounded-md">
                <div className="flex flex-col m-3">
                  <h1 className=" text-sm font-Raleway font-medium text-white ">
                    {d.title} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </h1>
                  <div className="flex flex-row items-center h-auto mt-2">
                    <div className="flex flex-row items-center">
                      <FaStar className="text-[#F25B38]" />
                      <p className="pl-2 text-sm">{d.rating}</p>
                    </div>

                    <div className="w-full flex flex-row items-center justify-around  ">
                      <span className="mx-1">|</span>
                      <p className="pl-1 text-sm">{d.genre}</p>

                      <p className=" px-2 font-Poppins text-xs ml-auto border border-white rounded-full">
                        {d.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredData.length === 0 && (
          <p className="text-center text-red-500">No movies found</p>
        )}
      </div>
    </div>
  );
};

export default LatestUploads;
