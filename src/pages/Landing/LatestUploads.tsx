
import { FaFilm, FaStar } from "react-icons/fa";
import { useState } from "react";

const LatestUploads = () => {
  const trendData = [
    { title: "Poco loco", rating: 6.8, image: "/images/poco.jpg", genre: "Animation" },
    { title: "Vampire's Diary", rating: 8.0, image: "/images/Vdiary.jpg", genre: "Horror" },
    { title: "Mr Bean", rating: 9.0, image: "/images/bean.jpg", genre: "Comedy" },
    { title: "Avengers", rating: 8.0, image: "/images/aveng.jpg", genre: "Thriller" },
    { title: "Spong Bob", rating: 9.0, image: "/images/bob.jpg", genre: "Comedy" },
    { title: "John Wick 4", rating: 9.3, image: "/images/jwk.jpg", genre: "Action" },
    { title: "Aquaman", rating: 8.5, image: "/images/aquam.jpg", genre: "Drama" },
    { title: "Transformer", rating: 7.4, image: "/images/trans.jpg", genre: "Series" },
    { title: "Game of Thrones", rating: 6.8, image: "/images/game.jpg", genre: "Series" },
    { title: "True Blood", rating: 8.0, image: "/images/blood.jpg", genre: "Horror" },
    { title: "Spider Man", rating: 9.0, image: "/images/spider.jpg", genre: "Action" },
    { title: "Mr Bones", rating: 6.8, image: "/images/mrbones.jpeg", genre: "Comedy" },
    { title: "Avatar", rating: 8.0, image: "/images/avata.jpg", genre: "Animation" },
    { title: "Jumangi", rating: 9.0, image: "/images/juma.avif", genre: "Action" },
    // Add more movies if needed
  ];

  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter by genre or search term (either by title or genre)
  const filteredData = trendData.filter(movie => {
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
  const genres = Array.from(new Set(trendData.map(movie => movie.genre))).slice(0, 5);

  return (
    <div className="w-full h-auto mt-24 mx-auto flex flex-col">
      <div className="flex flex-col mx-auto w-[1360px]">
        <h1 className="text-[27px]">Latest Uploads</h1>

        <div className="w-full flex flex-col mx-auto mt-3">
          <div className="flex flex-row items-center justify-between border border-customOrange rounded-[10px] p-4">
            {/* Search Bar with Button */}
            <div className="flex items-center bg-white rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search by title or genre..."
                className="px-4 py-2 outline-none w-[320px] text-[#000000]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="text-[12px] md:text-[16px] text-white text-center px-3 md:px-10 py-1.5 md:py-2 bg-[#F25B38] hover:bg-[#efa898] font-roboto font-semibold rounded-r-[5px] cursor-pointer">
                Search
              </button>
            </div>

            {/* Genre Buttons (Limit to 5) */}
            <div className="flex space-x-2">
              {genres.map((genre, index) => (
                <button
                  key={index}
                  className={`ml-2 mr-2 border border-whitesmoke rounded-[5px] w-[100px] h-[40px] hover:bg-[#F25B38] ${
                    selectedGenre === genre ? "bg-[#F25B38] text-white" : ""
                  }`}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </button>
              ))}

              {/* Clear Filter Button */}
              <button
                className="ml-2 mr-2 border border-whitesmoke rounded-[5px] w-[100px] h-[40px] hover:bg-[#F25B38]"
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
          <div className="flex flex-row ">
            {displayedData.map((d, i) => (
              <div
                key={i}
                className="flex w-[300px] h-[250px] bg-cover bg-center relative items-end mt-4 bg-black border border-whitesmoke rounded-[10px] mx-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                style={{ backgroundImage: `url(${d.image})` }}
              >
                <div className="w-full h-[100px] flex flex-col bg-white bg-opacity-20 backdrop-blur-lg rounded-[10px]">
                  <div className="flex flex-col m-5">
                    <h1>{d.title}</h1>

                    <div className="flex flex-row items-center h-auto mt-2">
                      <div className="flex flex-row items-center">
                        <FaStar className="text-[#F25B38]" />
                        <p className="pl-2">{d.rating}</p>
                      </div>

                      <div className="flex flex-row items-center justify-around ml-2">
                        <p>|</p>
                        <p className="pl-2">{d.genre}</p>

                        <p className="pl-2">Movie</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredData.length === 0 && (
              <p className="text-center text-red-500">No movies found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUploads;
