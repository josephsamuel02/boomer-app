/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FaFilm, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../Redux/store";
import PUBLIC_ROUTES from "../../../utils/PublicRoutes";
import { GetRecommendedMovies, UpdateMovieRecommendation } from "../../../Redux/Movie";
const Recommends = () => {
  const dispatch = useDispatch<AppDispatch>();
  const RecommendedMovies = useSelector((state: any) => state.Movies.recommended.data);
  const [Data, setData] = useState(RecommendedMovies);

  useEffect(() => {
    dispatch(GetRecommendedMovies());
  });

  useEffect(() => {
    setData(RecommendedMovies);
  }, [RecommendedMovies]);

  const removeRecommendation = (movieId: string) => {
    dispatch(UpdateMovieRecommendation({ movie_id: movieId, recommend: false }));
    dispatch(GetRecommendedMovies());
  };

  return (
    <div className="w-full h-auto items-center    pt-4 md:pt-8  bg-black">
      <h1 className="text-xl md:text-2xl font-bold px-2 ">Recommends</h1>
      <p className="text-gray-400 text-sm mb-6 px-2">
        Manage your movie recommendations here.
      </p>

      <div className="w-full  md:px-4 rounded-lg">
        <div className="flex flex-row flex-wrap gap-2 items-center py-3 w-full ">
          {Data &&
            Data.slice(0, 10).map((d: any, i: any) => (
              <div
                key={i}
                className="w-[100px] h-[180px] mx-auto  mb-5  bg-black shadow shadow-[#ffffff44] rounded  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <a
                  href={`${PUBLIC_ROUTES.ADMIN_MOVIE_PAGE}/${d.movie_id}`}
                  className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${d.movie_poster_image[0]})` }}
                >
                  <div className="absolute right-1 flex justify-center">
                    <div className="flex flex-row items-center justify-between">
                      <FaFilm className="text-white" size={10} />
                      <p className="pl-1 text-xs">{d.genre}</p>
                    </div>
                  </div>
                </a>

                <div className="flex flex-col mt-1 ml-1">
                  <h1 className=" line-clamp-2  h-[28px] text-[10px] font-Nunito font-medium text-white ">
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

                <div
                  // href={`${PUBLIC_ROUTES.ADMIN_EDIT_MOVIE}/${d.movie_id}`}
                  onClick={() => removeRecommendation(d.movie_id)}
                  className="w-full h-auto flex flex-col items-center bg-black hover:bg-red-600 rounded-b-md"
                >
                  <h3 className="text-[9px] font-poppins text-center p-1">Remove</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recommends;
