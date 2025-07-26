/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SlArrowDown } from "react-icons/sl";
import { SlMenu } from "react-icons/sl"; // Importing menu icon
import { useState, useRef, useEffect } from "react";
import { BsUpload } from "react-icons/bs";
// Update the import path if the file is located elsewhere, for example:
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
// Update the import path to match the actual location of your store file
import { AppDispatch } from "../../Redux/store";
// Update the import path to match the actual location of your AuthSlice file
import { GetMyProfile } from "../../Redux/AuthSlice";

const Nav = () => {
  const MyProfile = useSelector((state: any) => state.Auth.myProfile?.data);

  const dispatch = useDispatch<AppDispatch>();
  const modalRef = useRef<any>(null);

  const [isOpen, setIsOpen] = useState(false); // For the Genre dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For the mobile menu

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

  const [user, setUser] = useState<any>([]);

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

  useEffect(() => {
    const token = localStorage.getItem("boomer_token");
    if (token) {
      dispatch(GetMyProfile());
      setUser(MyProfile);
    }
  }, []);

  useEffect(() => {
    setUser(MyProfile);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex flex-row w-full h-auto px-4 py-2 md:py-4 backdrop-blur-md bg-[#08050571] border-b border-[#ffffff44] items-center z-40">
        <a
          href={PUBLIC_ROUTES.ADMIN_DASHBOARD}
          className=" text-xl md:text-3xl font-bold font-Poppins md:ml-3 mr-auto"
        >
          <img
            src="/images/Boomer.png"
            alt="Boomer-website-logo"
            className="w-14 h-14 object-cover items-center"
          />
        </a>

        {/* Desktop Menu */}
        <div className="ml-auto mr-20 hidden md:flex flex-row justify-center items-center">
          <a
            href={PUBLIC_ROUTES.ADMIN_DASHBOARD}
            className="text-[14px] px-3 font-Poppins cursor-pointer hover:text-primary "
          >
            Home
          </a>
          <a
            href={PUBLIC_ROUTES.ADMIN_EXPLORE_PAGE}
            className="text-[14px] px-3 font-Poppins cursor-pointer hover:text-primary "
          >
            Movies
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
                    href={`${PUBLIC_ROUTES.ADMIN_EXPLORE_PAGE}?genre=${d.genre}`}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 w-60 bg-black rounded-lg py-4 border border-[#ffffff44] z-50">
            <a
              href={PUBLIC_ROUTES.ADMIN_DASHBOARD}
              className="block text-[14px] px-3 py-2 font-Poppins hover:bg-[#181818] text-white hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href={PUBLIC_ROUTES.ADMIN_MOVIES}
              className="block text-[14px] px-3 py-2 font-Poppins hover:bg-[#181818] text-white hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore
            </a>
            <div
              className="block text-[14px] px-3 py-2 font-Poppins hover:bg-[#181818] text-white hover:text-primary cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              Genre
              {isOpen && (
                <div
                  className="mt-2 py-2 w-full h-[200px] overflow-y-scroll flex flex-col bg-black rounded border border-[#ffffff6b]"
                  ref={modalRef}
                >
                  {Genre.options.map((d, i) => (
                    <a
                      href={`${PUBLIC_ROUTES.ADMIN_EXPLORE_PAGE}?genre=${d.genre}`}
                      className="text-md font-Poppins mx-1 p-1 text-white hover:border border-[#ffffff6b] rounded-sm"
                      key={i}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {d.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {user && user?.user_id && (
          <a
            href={PUBLIC_ROUTES.UPLOAD}
            className="flex flex-row items-center mr-1 md:mr-3 px-2 md:px-4 py-2 text-black  hover:text-white bg-[#ffff] hover:bg-[#442727] rounded-full cursor-pointer "
          >
            <BsUpload size={18} className="font-bold" />
            <p className="text-[10px] md:text-[12px] ml-1 font-Poppins ">Upload Movie</p>
          </a>
        )}

        {user?.user_id && (
          <a
            href={PUBLIC_ROUTES.MY_PROFILE}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Profile"
            data-tooltip-place="top"
            className="w-20 md:w-[140px] ml-2 hover:border border-primary hover:border-l-0 text-white flex flex-row items-center  rounded-full cursor-pointer"
          >
            <Tooltip id="my-tooltip" />
            {user?.profile_img && (
              <img
                src={user.profile_img}
                alt="profile image"
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            {!user.profile_img && (
              <div className=" bg-white rounded-full">
                <img
                  src="/images/person-svgrepo-com.svg"
                  alt="profile image"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            )}

            <p className="line-clamp-1 text-[12px] py-1 ml-2 ">Admin, {user.user_name}</p>
          </a>
        )}

        {!user?.user_id && (
          <a href={PUBLIC_ROUTES.ADMIN_LOGIN} className="flex-shrink-0 mr-3">
            <p className="text-[12px] md:text-[16px] text-white text-center px-3 md:px-10 py-1.5 md:py-2 bg-primary hover:bg-[#ad4831] font-Nunito   rounded cursor-pointer">
              Login
            </p>
          </a>
        )}
        {/* Mobile Menu Icon */}
        <div className="ml-2 md:hidden cursor-pointer">
          <SlMenu
            size={20}
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
