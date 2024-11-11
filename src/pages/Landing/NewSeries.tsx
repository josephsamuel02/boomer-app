/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaFilm, FaStar } from "react-icons/fa";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMoviesByType } from "../../Redux/Movie";
import { AppDispatch } from "../../Redux/store";

const NewSeries = () => {
  const MovieType = useSelector((state: any) => state.Movies.movie_type?.data);
  const dispatch = useDispatch<AppDispatch>();

  const [moviesData, setMoviesData] = useState(MovieType);

  useEffect(() => {
    dispatch(GetMoviesByType({ type: "series" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setMoviesData(MovieType);
  }, [MovieType]);

  return (
    <div className="w-full h-auto mt-16 px-4 md:px-6 flex flex-col">
      <div className="flex flex-col mx-auto w-full justify-center">
        <h1 className="text-4xl py-6 font-Raleway">New Series</h1>

        <div className="flex flex-col mt-3">
          <div className="relative flex flex-row items-center justify-between">
            {/* Trending Cards */}
            <div className="flex flex-row  w-full overflow-x-scroll">
              <div className="flex flex-row h-[270px] w-auto  mr-36 ">
                {moviesData &&
                  moviesData.map((d: any, i: any) => (
                    <div
                      key={i}
                      className="m-2  w-[300px] h-[250px] bg-black rounded-md shadow shadow-[#ffffff44] transition-transform duration-300 ease-in-out transform hover:scale-105  "
                    >
                      <div
                        className="relative flex items-end justify-end w-full h-[60%] bg-cover bg-center rounded-md"
                        style={{ backgroundImage: `url(${d.movie_poster_image})` }}
                      >
                        <div className="absolute flex ">
                          <div className="flex flex-row items-center pr-2">
                            <FaFilm size={18} className="text-white" />
                            <p className="pl-2 font-Poppins">{d.movie_genre[0]}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col mt-4 ml-2">
                        <h1 className="line-clamp-2  text-sm font-Raleway font-medium text-white ">
                          {d.movie_title}
                        </h1>
                        <div className="px-1 flex flex-row items-center my-2 ">
                          <p className="  flex flex-row items-center font-Poppins text-sm">
                            <FaStar className="text-[#F25B38]" />
                            <span className="pl-1 text-sm"> {d.rating}</span>
                          </p>
                          <p className=" ml-auto font-Poppins text-xs border border-[#ffffff71] rounded-full px-2">
                            {d.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <a
          href={`${PUBLIC_ROUTES.EXPLORE_PAGE}?type="series"`}
          className="w-[200px] h-auto mt-4 p-3 flex flex-row bg-primary hover:bg-[#ad4831]  rounded-full cursor-pointer"
        >
          <p className="mx-auto text-md   text-white">See All New Series</p>
        </a>
      </div>
    </div>
  );
};

export default NewSeries;
