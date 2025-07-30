/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaChevronLeft, FaChevronRight, FaFilm, FaStar } from "react-icons/fa";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMoviesByType } from "../../Redux/Movie";
import { AppDispatch } from "../../Redux/store";

const NewSeries = () => {
  const MovieType = useSelector((state: any) => state.Movies.movie_type?.data);
  const dispatch = useDispatch<AppDispatch>();

  const [moviesData, setMoviesData] = useState(MovieType);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(GetMoviesByType({ type: "series" }));
  }, []);

  useEffect(() => {
    setMoviesData(MovieType);
  }, [MovieType]);

  return (
    <div className="w-full h-auto md:mt-16 px-4 md:px-6 flex flex-col">
      <div className="flex flex-col mx-auto w-full justify-center">
        <h1 className="text-2xl py-6 font-Raleway">New Series</h1>

        <div className="relative flex flex-col mt-3">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/3 z-10 bg-black bg-opacity-60 text-white p-2 rounded-full hover:scale-110 transition"
          >
            <FaChevronLeft color="orangered" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/3 z-10 bg-black bg-opacity-60 text-white p-2 rounded-full hover:scale-110 transition"
          >
            <FaChevronRight color="orangered" />
          </button>

          <div
            className="flex flex-row w-full overflow-x-scroll scroll-smooth"
            ref={scrollRef}
          >
            <div className="flex flex-row h-[270px] w-auto mr-36">
              {moviesData &&
                moviesData.map((d: any, i: any) => (
                  <a
                    href={`${PUBLIC_ROUTES.MOVIE}/${d.movie_id}`}
                    key={i}
                    className="m-2 w-[250px] h-[200px] bg-black rounded-md shadow shadow-[#ffffff44] transition-transform duration-300 ease-in-out transform hover:scale-105"
                  >
                    <div
                      className="relative flex items-end justify-end w-full h-[60%] bg-cover bg-center rounded-md"
                      style={{ backgroundImage: `url(${d.movie_poster_image})` }}
                    >
                      <div className="absolute flex">
                        <div className="flex flex-row items-center pr-2">
                          <FaFilm size={18} className="text-white" />
                          <p className="pl-2 font-Poppins">{d.movie_genre[0]}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col mt-4 ml-2">
                      <h1 className="line-clamp-2 text-sm font-Raleway font-medium text-white">
                        {d.movie_title}
                      </h1>
                      <div className="px-1 flex flex-row items-center my-2">
                        <p className="flex flex-row items-center font-Poppins text-sm">
                          <FaStar className="text-[#FFFF00]" />
                          <span className="pl-1 text-sm"> {d.rating}</span>
                        </p>
                        <p className="ml-auto font-Poppins text-xs border border-[#ffffff71] rounded-full px-2">
                          {d.type}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>

        <a
          href={`${PUBLIC_ROUTES.EXPLORE_PAGE}?type=series`}
          className="w-[200px] h-auto mt-4 p-3 flex flex-row bg-primary hover:bg-[#ad4831] rounded-full cursor-pointer"
        >
          <p className="mx-auto text-md text-white">See All New Series</p>
        </a>
      </div>
    </div>
  );
};

export default NewSeries;
