/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaFilm, FaStar } from "react-icons/fa";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface compData {
  moviesData: any;
}

const SearchResult = ({ moviesData }: compData) => {
  // const Movies = useSelector((state: any) => state.Movies.movies.data);
  const MoviesByGenre = useSelector((state: any) => state.Movies.movie_by_genre?.data);
  const [Data, setData] = useState(moviesData);

  useEffect(() => {
    setData(moviesData);
  }, [moviesData]);

  useEffect(() => {
    setData(MoviesByGenre);
  }, [MoviesByGenre]);

  return (
    <div className="w-full mx-auto h-auto bg-black mt-10 md:mt-32">
      <div className="w-full px-2 md:mx-8  py-2">
        {Data.length > 0 ? (
          <h3 className="text-[18px] font-Poppins text-white">
            Results
            <span className="text-[#f75313]">({Data && Data.length})</span>
          </h3>
        ) : (
          <h3 className="text-[20px] font-Poppins text-white">No Results Found </h3>
        )}
      </div>

      <div className="w-full px-4 flex lg:grid grid-flow-row  lg:grid-cols-5  flex-row flex-wrap items-center  ">
        {Data &&
          Data.map((d: any, i: any) => (
            <a
              href={`${PUBLIC_ROUTES.MOVIE}/${d.movie_id}`}
              key={i}
              className="w-11/12 h-[400px] md:w-[200px] md:h-[260px] bg-black shadow shadow-[#ffffff44] rounded mx-auto  my-6  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <div
                className="relative flex items-end justify-center w-full h-[320px] md:h-[70%] bg-cover bg-center rounded"
                style={{ backgroundImage: `url(${d.movie_poster_image})` }}
              >
                <div className="absolute right-1 flex justify-center">
                  <div className="flex flex-row items-center justify-between">
                    <FaFilm className="text-white" />
                    <p className="pl-3">{d.movie_genre[0]}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 md:ml-2  px-2">
                <h1 className=" line-clamp-2  h-[36px]  text-[12px] font-Raleway font-medium text-white ">
                  {d.movie_title}
                </h1>
                <div className="px-1 flex flex-row items-center my-2 ">
                  <p className="  flex flex-row items-center font-Poppins text-sm">
                    <FaStar className="text-[#FFFF00]" />
                    <span className="pl-1 text-sm"> {d.rating}</span>
                  </p>
                  <p className=" ml-auto font-Poppins text-xs border border-[#ffffff71] rounded-full px-2">
                    {d.type}
                  </p>
                </div>
              </div>
            </a>
          ))}
      </div>
      <hr className="mt-32" />

      {/* // other movies */}

      <div className="w-full px-2 md:mx-8  py-6">
        <h3 className="text-[20px] font-Raleway text-white">Other Movies </h3>
      </div>

      <div className="w-full px-4 flex lg:grid grid-flow-row  lg:grid-cols-5  flex-row flex-wrap items-center  ">
        {Data &&
          Data.map((d: any, i: any) => (
            <a
              href={`${PUBLIC_ROUTES.MOVIE}/${d.movie_id}`}
              key={i}
              className="w-11/12 h-[400px] md:w-[200px] md:h-[260px] bg-black shadow shadow-[#ffffff44] rounded mx-auto  my-6  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <div
                className="relative flex items-end justify-center w-full h-[320px] md:h-[70%] bg-cover bg-center rounded"
                style={{ backgroundImage: `url(${d.movie_poster_image})` }}
              >
                <div className="absolute right-1 flex justify-center">
                  <div className="flex flex-row items-center justify-between">
                    <FaFilm className="text-white" />
                    <p className="pl-3">{d.movie_genre[0]}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 md:ml-2  px-2">
                <h1 className=" line-clamp-2  h-[36px]  text-[12px] font-Raleway font-medium text-white ">
                  {d.movie_title}
                </h1>
                <div className="px-1 flex flex-row items-center my-2 ">
                  <p className="  flex flex-row items-center font-Poppins text-sm">
                    <FaStar className="text-[#FFFF00]" />
                    <span className="pl-1 text-sm"> {d.rating}</span>
                  </p>
                  <p className=" ml-auto font-Poppins text-xs border border-[#ffffff71] rounded-full px-2">
                    {d.type}
                  </p>
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

export default SearchResult;
