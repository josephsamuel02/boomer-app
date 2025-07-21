/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchMoviesByTitle } from "../../../Redux/Movie";
import { AppDispatch } from "../../../Redux/store";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [searchText, setSearchText] = useState("");
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Trigger the dispatch when Enter is pressed
      dispatch(SearchMoviesByTitle({ movie_title: searchText }));
    }
  };

  return (
    <div className="fixed top-[70px] md:top-[72px] w-full h-auto items-center backdrop-blur-md bg-[#08050571] z-20 ">
      <div className="mx-auto w-auto py-2 md:py-6 h-auto flex flex-row md:px-2 items-center   ">
        <div className="mx-auto w-auto   h-auto px-3  items-center flex flex-row ">
          <button
            className="px-2 md:px-6 py-[5px] flex flex-row items-center mx-auto text-[8px] md:text-lg font-Nunito text-white bg-primary hover:bg-[#f5461e] rounded-l-md shadow"
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
            className=" w-[180px] md:w-4/5 h-auto px-1 md:px-4  text-black text-sm md:text-lg font-Poppins p-1   border border-gray-600 rounded-r-md outline-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
