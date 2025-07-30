/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { FaFilm, FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { GetTrendingMovies } from "../../Redux/Movie";

import { AppDispatch } from "../../Redux/store";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Trending = () => {
  const TrendingMovie = useSelector((state: any) => state.Movies.trending?.data);

  const dispatch = useDispatch<AppDispatch>();

  const [moviesData, setMoviesData] = useState(TrendingMovie);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    dispatch(GetTrendingMovies());
  }, []);
  useEffect(() => {
    setMoviesData(TrendingMovie);
  }, [TrendingMovie]);

  return (
    <div className="w-full h-auto mt-16 px-4 md:px-6 flex flex-col">
      <div className="flex flex-col mx-auto mt-5 w-full justify-center">
        <h1 className="text-2xl pt-6 text-white font-Raleway">Trending</h1>

        <div className="flex flex-col mt-3 relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute z-10 left-0 top-1/3 bg-black bg-opacity-60 text-white p-2 rounded-full shadow-md hover:scale-110 transition"
          >
            <FaChevronLeft color="orangered" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute z-10 right-0 top-1/3 bg-black bg-opacity-60 text-white p-2 rounded-full shadow-md hover:scale-110 transition"
          >
            <FaChevronRight color="orangered" />
          </button>

          <div className="relative flex flex-row items-center justify-between">
            <div
              className="flex flex-row w-full overflow-x-scroll scroll-smooth"
              ref={scrollRef}
            >
              <div className="flex flex-row h-[270px] w-auto mr-36">
                {moviesData &&
                  moviesData.map((d: any, i: any) => (
                    <a
                      key={i}
                      href={`${PUBLIC_ROUTES.MOVIE}/${d.movie_id}`}
                      className="m-2 w-[250px] h-[200px] bg-black rounded-md shadow shadow-[#ffffff44] transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                      <div
                        className="relative flex items-end justify-end w-full h-[60%] bg-cover bg-center rounded-md"
                        style={{
                          backgroundImage: `url(${d.movie_poster_image})`,
                        }}
                      >
                        <div className="absolute flex">
                          <div className="flex flex-row items-center pr-2">
                            <FaFilm size={18} className="text-white" />
                            <p className="pl-2 font-Poppins">{d.type}</p>
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
                            {d.movie_genre[0]}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
