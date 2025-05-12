/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { GetMovies, GetMoviesByGenre, SearchMoviesByTitle } from "../../Redux/Movie";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [searchText, setSearchText] = useState("");
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Trigger the dispatch when Enter is pressed
      dispatch(SearchMoviesByTitle({ movie_title: searchText }));
    }
  };

  const Genre = {
    title: "Genre",
    icon: "",
    options: [
      { title: "All", url: "all" },
      { title: "Action", url: "action" },
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
      { title: "Science Fiction", url: "sci-fi" },
      { title: "TV Movie", url: "tv-movie" },
      { title: "Thriller", url: "thriller" },
      { title: "War", url: "war" },
      { title: "Western", url: "western" },
    ],
  };

  return (
    <div className="fixed top-[60px] md:top-[72px] w-full h-auto bg-[#0a0606e5] z-20 ">
      <div className="  w-full py-2 md:py-6 h-auto flex flex-row md:px-2 md:items-center border-b border-[#ffffff6c] ">
        <div className="md:mx-auto w-auto md:w-6/12 h-auto px-3 md:pl-5 items-center flex flex-row ">
          <button
            className="px-2 md:px-6 py-2 flex flex-row items-center mx-auto text-[8px] md:text-lg font-Poppins text-white bg-primary hover:bg-[#f5461e] rounded-l-md shadow"
            onClick={async () =>
              await dispatch(SearchMoviesByTitle({ movie_title: searchText }))
            }
          >
            <img
              src="/images/searchicon1.svg"
              alt="search"
              className=" w-3 md:w-5 h-3 md:h-5 font-Nunito"
            />
            Search
          </button>

          <input
            type="text"
            placeholder="Search"
            defaultValue={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            className=" w-[180px] md:w-4/5 h-auto px-1 md:px-4  text-black text-sm md:text-lg font-Poppins p-1 md:p-2 border-2 border-gray-600 rounded-r-md outline-none focus:outline-none"
          />
        </div>
        <div className="ml-auto md:mx-auto w-1/3 md:w-4/12 h-auto px-1 md:px-3 md:pl-5 items-center flex flex-row   ">
          <div
            className="relative w-full md:w-[300px] p-2  md:pl-10 flex flex-row items-center bg-primary hover:bg-[#f5461e] rounded-md cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span>
              <SlArrowDown size={19} className="mx-1 text-white  hover:text-primary" />
            </span>
            <p className="text-sm md:text-lg text-white font-Raleway "> All Genres</p>

            {isOpen && (
              <div
                className="absolute top-10 md:top-12 left-0 right-0 py-2 mx-auto w-full md:w-11/12 h-[430px] overflow-y-scroll flex flex-col    bg-black rounded-lg border border-white z-20"
                ref={modalRef}
              >
                {Genre.options.map((d, i) => (
                  <p
                    onClick={() => {
                      if (d.url == "all") {
                        dispatch(GetMovies());
                      } else {
                        dispatch(GetMoviesByGenre({ movie_genre: [d.url] }));
                      }
                    }}
                    className="text-sm md:text-md font-Poppins mx-1 p-1 text-white hover:border border-white rounded-sm"
                    key={i}
                  >
                    {d.title}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
