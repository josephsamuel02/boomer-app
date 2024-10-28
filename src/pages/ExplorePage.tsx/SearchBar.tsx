/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../Redux/store";
// import { ArtSearch } from "../../Redux/FetchArtwork";

const SearchBar = () => {
  // const dispatch = useDispatch<AppDispatch>();
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
      // dispatch(ArtSearch({ search_string: searchText }));
    }
  };

  const Genre = {
    title: "Genre",
    icon: "",
    options: [
      { title: "Action", url: "/genres/action" },
      { title: "Adventure", url: "/genres/adventure" },
      { title: "Animation", url: "/genres/animation" },
      { title: "Comedy", url: "/genres/comedy" },
      { title: "Crime", url: "/genres/crime" },
      { title: "Documentary", url: "/genres/documentary" },
      { title: "Drama", url: "/genres/drama" },
      { title: "Family", url: "/genres/family" },
      { title: "Fantasy", url: "/genres/fantasy" },
      { title: "History", url: "/genres/history" },
      { title: "Horror", url: "/genres/horror" },
      { title: "Music", url: "/genres/music" },
      { title: "Mystery", url: "/genres/mystery" },
      { title: "Romance", url: "/genres/romance" },
      { title: "Science Fiction", url: "/genres/scifi" },
      { title: "TV Movie", url: "/genres/tv-movie" },
      { title: "Thriller", url: "/genres/thriller" },
      { title: "War", url: "/genres/war" },
      { title: "Western", url: "/genres/western" },
    ],
  };
  return (
    <div className="w-full h-auto  ">
      <div className="  w-full py-6 h-auto flex flex-row px-2 items-center border-b border-white ">
        <div className="mx-auto w-6/12 h-auto   px-3 pl-5 items-center flex flex-row ">
          <button
            className="px-6 py-2 flex flex-row items-center mx-auto text-lg font-Poppins text-white bg-primary hover:bg-[#f5461e] rounded-l-md shadow"
            // onClick={async () => await dispatch(ArtSearch({ search_string: searchText }))}
          >
            <img src="/images/searchicon1.svg" alt="search" className=" w-5 h-5" />
            Search
          </button>

          <input
            type="text"
            placeholder="Search"
            defaultValue={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-4/5 h-auto px-4  text-black text-lg font-Poppins p-2 border-2 border-gray-600 rounded-r-md outline-none focus:outline-none"
          />
        </div>
        <div className="mx-auto w-4/12 h-auto   px-3 pl-5 items-center flex flex-row   ">
          <div
            className="relative w-[300px] p-2 pl-10 flex flex-row items-center bg-primary hover:bg-[#f5461e] rounded-md cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span>
              <SlArrowDown size={19} className="mx-1 text-white  hover:text-primary" />
            </span>
            <p className="text-lg text-white font-Raleway "> All Genres</p>

            {isOpen && (
              <div
                className="absolute top-12 left-0 right-0 py-2 mx-auto w-11/12 h-[430px] overflow-y-scroll flex flex-col    bg-black rounded-lg border border-white z-20"
                ref={modalRef}
              >
                {Genre.options.map((d, i) => (
                  <a
                    href={d.url}
                    className="text-md font-Poppins mx-1 p-1 text-white hover:border border-white rounded-sm"
                    key={i}
                  >
                    {d.title}
                  </a>
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
