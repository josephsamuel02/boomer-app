/* eslint-disable @typescript-eslint/no-explicit-any */
import { SlArrowDown } from "react-icons/sl";
import { useState, useRef, useEffect } from "react";
import { BsUpload } from "react-icons/bs";
import PUBLIC_ROUTES from "../utils/PublicRoutes";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../Redux/store";
import { GetMyProfile } from "../Redux/AuthSlice";
// GetMyProfile
const Nav = () => {
  const MyProfile = useSelector((state: any) => state.Auth.myProfile.data);

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
  const [user, setUser] = useState(MyProfile);

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
    dispatch(GetMyProfile());
    setUser(MyProfile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUser(MyProfile);
  }, [MyProfile]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex flex-row w-full h-auto px-4 py-4 backdrop-blur-md bg-[#08050571] border-b border-[#ffffff44] items-center z-40">
        <a href="/" className=" text-xl md:text-3xl font-bold font-Poppins md:ml-3 mr-auto">
          BOOMER
          <img src="" alt="" />
        </a>

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
        {user?.user_id && (
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
            data-tooltip-content="User profile"
            data-tooltip-place="top"
            className="w-20 md:w-[140px] ml-2 hover:border border-primary text-white flex flex-row items-center  rounded-full cursor-pointer"
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

            <p className="line-clamp-1 text-[12px] py-1 ml-2 ">Hi, {user.user_name}</p>
          </a>
        )}

        {!user?.user_id && (
          <a href={PUBLIC_ROUTES.SIGNUP} className="flex-shrink-0 mr-3">
            <p className="text-[12px] md:text-[16px] text-white text-center px-3 md:px-10 py-1.5 md:py-2 bg-primary hover:bg-[#ad4831] font-Poppins   rounded-full cursor-pointer">
              Sign Up
            </p>
          </a>
        )}
        {!user?.user_id && (
          <a href={PUBLIC_ROUTES.LOGIN} className="flex-shrink-0 mr-3">
            <p className="text-[12px] md:text-[16px] text-white text-center px-3 md:px-10 py-1.5 md:py-2 bg-primary hover:bg-[#ad4831] font-Poppins   rounded-full cursor-pointer">
              Login
            </p>
          </a>
        )}
      </div>
    </>
  );
};

export default Nav;
