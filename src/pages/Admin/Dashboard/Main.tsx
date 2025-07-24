/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaFilm, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PUBLIC_ROUTES from "../../../utils/PublicRoutes";

const Main = () => {
  const Movies = useSelector((state: any) => state.Movies.movies.data);
  const [moviesData, setMoviesData] = useState(Movies);

  useEffect(() => {
    setMoviesData(Movies);
  }, [Movies]);

  return (
    <div className="w-full h-auto p-6 ">
      <h1 className="text-xl py-2 font-Raleway">Latest Uploads</h1>

      <div className="flex flex-row flex-wrap gap-4 items-center h-auto w-full  ">
        {moviesData &&
          moviesData.slice(0, 10).map((d: any, i: any) => (
            <div
              key={i}
              className="w-[120px] h-[200px] mx-auto my-4 bg-black shadow shadow-[#ffffff44] rounded  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <div
                className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded"
                style={{ backgroundImage: `url(${d.movie_poster_image[0]})` }}
              >
                <div className="absolute right-1 flex justify-center">
                  <div className="flex flex-row items-center justify-between">
                    <FaFilm className="text-white" size={10} />
                    <p className="pl-1 text-xs">{d.genre}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-1 ml-1">
                <h1 className=" line-clamp-2  h-[36px] text-[10px] font-Nunito font-medium text-white ">
                  {d.movie_title}
                </h1>
                <div className="px-1 flex flex-row items-center  ">
                  <p className=" flex flex-row items-center font-Poppins text-sm">
                    <FaStar className="text-[#FFFF00]" size={10} />
                    <span className="pl-1 text-[10px]"> {d.rating}</span>
                  </p>
                  <p className=" ml-auto font-Poppins text-[8px] border border-[#ffffff71] rounded-full px-2">
                    {d.type}
                  </p>
                </div>
              </div>
              <a
                href={`${PUBLIC_ROUTES.ADMIN_EDIT_MOVIE}/${d.movie_id}`}
                className="w-full h-auto flex flex-col items-center bg-black hover:bg-orange-600 rounded-b-md"
              >
                <h3 className="text-[9px] font-poppins text-center p-1">Edit movie</h3>
              </a>
            </div>
          ))}
      </div>

      <h1 className="text-xl py-6   font-Raleway">Recommends</h1>
      <div className="flex flex-row flex-wrap gap-3 items-center py-3 w-full ">
        {moviesData &&
          moviesData.slice(0, 7).map((d: any, i: any) => (
            <div
              key={i}
              className="mx-auto w-[120px] h-[200px] bg-black shadow shadow-[#ffffff44] rounded  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <div
                className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded"
                style={{ backgroundImage: `url(${d.image})` }}
              >
                <div className="absolute right-1 flex justify-center">
                  <div className="flex flex-row items-center justify-between">
                    <FaFilm className="text-white" size={10} />
                    <p className="pl-1 text-xs">{d.genre}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-1 ml-1">
                <h1 className=" line-clamp-2  h-[36px] text-[10px] font-Nunito font-medium text-white ">
                  {d.title} Lorem ipsum dolor sit
                </h1>
                <div className="px-1 flex flex-row items-center  ">
                  <p className=" flex flex-row items-center font-Poppins text-sm">
                    <FaStar className="text-[#FFFF00]" size={10} />
                    <span className="pl-1 text-[10px]"> {d.rating}</span>
                  </p>
                  <p className=" ml-auto font-Poppins text-[8px] border border-[#ffffff71] rounded-full px-2">
                    {d.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Main;
