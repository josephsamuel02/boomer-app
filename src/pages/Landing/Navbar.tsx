/* eslint-disable @typescript-eslint/no-explicit-any */
import { SlArrowDown } from "react-icons/sl";
// import { useNavigate } from "react-router-dom";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useState, useRef, useEffect } from "react";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchText, setSearchText] = useState("");

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
        <a href="/" className=" text-3xl font-bold font-Raleway ml-3 mr-auto">
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
          <div className="relative text-[14px] px-3 font-Poppins cursor-pointer hover:text-primary flex flex-row items-center ">
            <span onClick={() => setIsOpen(true)}>
              <SlArrowDown size={18} className="mx-1 text-white  hover:text-primary" />
            </span>
            Genre
            {isOpen && (
              <div
                className="absolute top-12 py-2 w-[160px] h-[330px] overflow-y-scroll flex flex-col   bg-black rounded-lg border border-white"
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

          <a
            href="/top_picks"
            className="text-[14px] px-3 font-Poppins cursor-pointer hover:text-primary "
          >
            Top Picks
          </a>
        </div>

        <div className="flex-shrink-0 mr-3">
          <p className="text-[12px] md:text-[16px] text-white text-center px-3 md:px-10 py-1.5 md:py-2 bg-[#d44626] hover:bg-[#ad4831] font-Poppins   rounded-full cursor-pointer">
            Sign Up
          </p>
        </div>
      </div>
    </>
  );
};

export default Nav;
