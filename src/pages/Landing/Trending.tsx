/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { FaFilm, FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { GetTrendingMovies } from "../../Redux/Movie";

import { AppDispatch } from "../../Redux/store";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";

const Trending = () => {
  const TrendingMovie = useSelector((state: any) => state.Movies.trending?.data);
  // const Movies = useSelector((state: any) => state.Movies.movies?.data);

  const dispatch = useDispatch<AppDispatch>();

  const [moviesData, setMoviesData] = useState(TrendingMovie);
  // const [moviesData, setMoviesData] = useState(Movies);

  useEffect(() => {
    dispatch(GetTrendingMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setMoviesData(TrendingMovie);
  }, [TrendingMovie]);

  // useEffect(() => {
  //   dispatch(GetMovies());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // useEffect(() => {
  //   setMoviesData(Movies);
  //   // console.log(Movies);
  // }, [Movies]);

  return (
    <div className="w-full h-auto mt-16 px-4 md:px-6 flex flex-col">
      <div className="flex flex-col mx-auto mt-5 w-full justify-center">
        <h1 className="text-2xl pt-6 text-white font-Raleway">Trending</h1>

        <div className="flex flex-col mt-3">
          <div className="relative flex flex-row items-center justify-between">
            <div className="flex flex-row  w-full overflow-x-scroll">
              <div className="flex flex-row h-[270px] w-auto  mr-36 ">
                {moviesData &&
                  moviesData.map((d: any, i: any) => (
                    <a
                      key={i}
                      href={`${PUBLIC_ROUTES.MOVIE}/${d.movie_id}`}
                      className="m-2  w-[250px] h-[200px] bg-black rounded-md shadow shadow-[#ffffff44]  transition-transform duration-300 ease-in-out transform hover:scale-105  "
                    >
                      <div
                        className="relative flex items-end justify-end w-full h-[60%] bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${d.movie_poster_image})` }}
                      >
                        <div className="absolute flex ">
                          <div className="flex flex-row items-center pr-2">
                            <FaFilm size={18} className="text-white" />
                            <p className="pl-2 font-Poppins">{d.type}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col mt-4 ml-2">
                        <h1 className="line-clamp-2  text-sm font-Raleway font-medium text-white ">
                          {d.movie_title}
                        </h1>
                        <div className="px-1 flex flex-row items-center my-2 ">
                          <p className="  flex flex-row items-center font-Poppins text-sm">
                            <FaStar className="text-[#FFFF00]" />
                            <span className="pl-1 text-sm"> {d.rating}</span>
                          </p>
                          <p className=" ml-auto font-Poppins text-xs border border-[#ffffff71] rounded-full px-2">
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
