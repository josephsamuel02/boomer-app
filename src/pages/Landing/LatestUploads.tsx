/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { AppDispatch } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { GetMovies, GetMoviesByGenre } from "../../Redux/Movie";
import { useNavigate } from "react-router-dom";

const LatestUploads = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const Movies = useSelector((state: any) => state.Movies.movies.data);
  const MoviesByGenre = useSelector((state: any) => state.Movies.movie_by_genre?.data);

  const Genre = [
    { title: "Action", url: "action" },
    { title: "Sci-Fi ", url: "sci-fi" },
    { title: "Adventure", url: "adventure" },
    { title: "Animation", url: "animation" },
    { title: "Comedy", url: "comedy" },
    { title: "Crime", url: "crime" },
    { title: "Documentary", url: "documentary" },
    { title: "Drama", url: "drama" },
    { title: "Family", url: "family" },
    { title: "Fantasy", url: "fantasy" },
    { title: "History", url: "history" },
    { title: "Horror", url: "horror" },
    { title: "Music", url: "music" },
    { title: "Mystery", url: "mystery" },
    { title: "Romance", url: "romance" },

    { title: "TV Movie", url: "tv-movie" },
    { title: "Thriller", url: "thriller" },
    { title: "War", url: "war" },
    { title: "Western", url: "western" },
  ];

  const [moviesData, setMoviesData] = useState(MoviesByGenre);

  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Trigger the dispatch when Enter is pressed
      // dispatch(SearchMoviesByTitle({ movie_title: searchText }));

      navigate(`${PUBLIC_ROUTES.EXPLORE_PAGE}?search=${searchText}`);
    }
  };

  // Display only the first 4 movies
  // Get unique genres and limit to the first 5

  useEffect(() => {
    dispatch(GetMovies());
    // dispatch(GetMoviesByGenre({ movie_genre: [] }));
  }, []);

  useEffect(() => {
    if (MoviesByGenre.length === 0) {
      setMoviesData(Movies);
      return;
    }
    setMoviesData(MoviesByGenre);
  }, [MoviesByGenre]);

  return (
    <div className="w-full h-auto mt-16 px-4 md:px-6 flex flex-col">
      {/* Search Bar with Button */}
      <div className="flex items-center md:mb-6 rounded-lg  ">
        <input
          type="text"
          placeholder="Search by title or genre..."
          className="px-4 py-2 outline-none w-[390px] rounded-l-md border border-[#ffffff93] bg-black text-[#ffffff]"
          defaultValue={searchText}
          onKeyDown={handleKeyDown}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={async () => navigate(`${PUBLIC_ROUTES.EXPLORE_PAGE}?search=${searchText}`)}
          className="text-[12px] md:text-[16px] text-white text-center px-3 py-3 md:py-2.5 bg-primary hover:bg-[#cc5638] font-roboto rounded-r-[5px] cursor-pointer"
        >
          Search
        </button>
      </div>
      <div className=" w-full flex flex-col md:flex-row md:items-center  p-4 pb-5">
        <h1 className="text-2xl py-6 md:pb-auto   font-Raleway">Latest Uploads</h1>
        <div className="flex w-auto md:ml-auto  overflow-x-scroll">
          <div className="flex flex-row w-auto mr-5 ">
            {/* Clear Filter Button */}
            <button
              className={`mr-1 border border-whitesmoke rounded-md w-[40px] h-[30px] hover:bg-[#F25B38] text-xs ${
                selectedGenre == null ? "bg-primary" : "bg-black"
              }`}
              onClick={() => {
                setSelectedGenre(null);
                dispatch(GetMovies());
                setMoviesData(Movies);
              }}
            >
              All
            </button>
            {Genre.slice(0, 5).map((genre, index) => (
              <button
                key={index}
                className={`mx-0.5 shadow  text-xs  shadow-[#ffffff1f] border border-[#ffffff49] rounded-md w-[70px] h-[30px] hover:bg-[#F25B38] ${
                  selectedGenre === genre.url
                    ? "bg-[#F25B38] text-white border border-[#ffffffce]"
                    : ""
                }`}
                onClick={() => {
                  dispatch(GetMoviesByGenre({ movie_genre: [genre.url] }));
                  setSelectedGenre(genre.url);
                }}
              >
                {genre.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Movie Cards */}
      <div className="flex w-full overflow-x-scroll">
        <div className="flex flex-row py-4 w-auto mr-20 ">
          {moviesData &&
            moviesData.slice(0, 10).map((d: any, i: any) => (
              <a
                href={`${PUBLIC_ROUTES.MOVIE}/${d.movie_id}`}
                key={i}
                className="flex w-[250px] h-[200px] bg-cover bg-center relative items-end mt-4 rounded-md border border-[#a2a3a3ad]  bg-black   mx-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                style={{ backgroundImage: `url(${d.movie_poster_image})` }}
              >
                <div className="w-full h-[100px] flex flex-col bg-black bg-opacity-10 backdrop-blur-md rounded-md">
                  <div className="flex flex-col m-3">
                    <h1 className=" text-sm font-Raleway font-medium text-white ">
                      {d.movie_title}
                    </h1>
                    <div className="flex flex-row items-center h-auto mt-2">
                      <div className="flex flex-row items-center">
                        <FaStar className="text-[#FFFF00]" size={13} />
                        <p className="pl-1 text-xs">{d.rating}</p>
                      </div>

                      <div className="w-full flex flex-row items-center justify-around  ">
                        <span className="mx-1">|</span>
                        {d.movie_genre.map((genres: string, i: any) => (
                          <p className="pl-1 text-xs" key={i}>
                            {genres}
                          </p>
                        ))}
                        <p className=" px-[6px] font-Nunito font-extralight  text-[11px] ml-auto border border-white rounded-full">
                          {d.type}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div>
        {moviesData?.length === 0 && (
          <p className="text-center text-red-500">No movies found</p>
        )}
      </div>
      <a
        // href={`${PUBLIC_ROUTES.EXPLORE_PAGE}?type=single`}
        href={`${PUBLIC_ROUTES.EXPLORE_PAGE}`}
        className="w-[200px] h-auto mt-4 p-3 flex flex-row bg-primary hover:bg-[#ad4831]  rounded-full cursor-pointer"
      >
        <p className="mx-auto text-md   text-white">See All New Uploads</p>
      </a>
    </div>
  );
};

export default LatestUploads;
