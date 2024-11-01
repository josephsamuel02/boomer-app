/* eslint-disable @typescript-eslint/no-explicit-any */
import { SlArrowDown } from "react-icons/sl";
// import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { BsUpload } from "react-icons/bs";
import PUBLIC_ROUTES from "../utils/PublicRoutes";
import { Tooltip } from "react-tooltip";

const Nav = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();
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
  // const [auth, setAuth] = useState(false);

  const Genre = {
    title: "Genre",
    icon: "",
    options: [
      { title: "Action", genre: "action" },
      { title: "Adventure", genre: "adventure" },
      { title: "Animation", genre: "animation" },
      { title: "Comedy", genre: "comedy" },
      { title: "Crime", genre: "crime" },
      { title: "Documentary", genre: "documentary" },
      { title: "Drama", genre: "drama" },
      { title: "Family", genre: "family" },
      { title: "Fantasy", genre: "fantasy" },
      { title: "History", genre: "history" },
      { title: "Horror", genre: "horror" },
      { title: "Music", genre: "music" },
      { title: "Mystery", genre: "mystery" },
      { title: "Romance", genre: "romance" },
      { title: "Science Fiction", genre: "sci-fi" },
      { title: "TV Movie", genre: "tv-movie" },
      { title: "Thriller", genre: "thriller" },
      { title: "War", genre: "war" },
      { title: "Western", genre: "western" },
    ],
  };

  // const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     // Trigger the dispatch when Enter is pressed
  //     // dispatch(ArtSearch({ search_string: searchText }));
  //     navigate(PUBLIC_ROUTES.SEARCH);
  //   }
  // };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex flex-row w-full h-auto px-4 py-4 bg-black border-b border-[#ffffff44] items-center z-20">
        <a href="/" className=" text-xl md:text-3xl font-bold font-Raleway ml-3 mr-auto">
          BOOMER
          <img src="" alt="" />
        </a>
        {/* <div className=" mx-auto h-[40px] md:h-[42px] flex flex-row items-center  rounded-lg  ">
          <input
            type="text"
            placeholder="Search by title or genre..."
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="px-4 py-1 md:py-2 outline-none text-sm md:text-md h-full w-[130px] md:w-[260px] rounded-l-md border border-[#ffffff93] bg-black text-[#ffffff]"
          />
          <button className="text-[12px] md:text-[16px] text-white text-center px-3 h-full md:py-2  bg-[#F25B38] hover:bg-[#efa898] font-roboto   rounded-r-md cursor-pointer">
            Search
          </button>
        </div> */}
        <div className="ml-auto mr-20 hidden md:flex flex-row justify-center items-center">
          <a
            href="/"
            className="text-[14px] px-3 font-Poppins cursor-pointer hover:text-primary "
          >
            Home
          </a>
          <a
            href={PUBLIC_ROUTES.EXPLORE_PAGE}
            className="text-[14px] px-3 font-Poppins cursor-pointer hover:text-primary "
          >
            Explore
          </a>
          <div
            className="relative text-[14px] px-3 font-Poppins cursor-pointer hover:text-primary flex flex-row items-center "
            onMouseOver={() => setIsOpen(true)}
            onClick={() => setIsOpen(true)}
          >
            <span>
              <SlArrowDown size={18} className="mx-1 text-white  hover:text-primary" />
            </span>
            Genre
            {isOpen && (
              <div
                className="absolute top-12 py-2 w-[160px] h-[330px] overflow-y-scroll flex flex-col bg-black rounded  border border-white"
                ref={modalRef}
              >
                {Genre.options.map((d, i) => (
                  <a
                    href={`${PUBLIC_ROUTES.EXPLORE_PAGE}?genre=${d.genre}`}
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

        <a
          href={PUBLIC_ROUTES.UPLOAD}
          className="flex flex-row items-center mr-1 md:mr-3 px-2 md:px-4 py-2 text-black  hover:text-white bg-[#ffff] hover:bg-[#442727] rounded-full cursor-pointer "
        >
          <BsUpload size={18} className="font-bold" />
          <p className="text-[10px] md:text-[12px] ml-1 font-Poppins ">Upload Movie</p>
        </a>

        <a
          href={PUBLIC_ROUTES.MY_PROFILE}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="User profile"
          data-tooltip-place="top"
          className="w-20 md:w-[140px] ml-2 hover:border border-primary text-white flex flex-row items-center  rounded-full cursor-pointer"
        >
          <Tooltip id="my-tooltip" />
          <img
            src="/images/spider.jpg"
            alt="profile image"
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="line-clamp-1 text-[12px]  ml-2 ">Hi, @Easy_man</p>
        </a>

        {/* <div className="flex-shrink-0 mr-3">
          <p className="text-[12px] md:text-[16px] text-white text-center px-3 md:px-10 py-1.5 md:py-2 bg-primary hover:bg-[#ad4831] font-Poppins   rounded-full cursor-pointer">
            Sign Up
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Nav;
