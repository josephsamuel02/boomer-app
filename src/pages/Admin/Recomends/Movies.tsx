/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { FaFilm, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../Redux/store";
import PUBLIC_ROUTES from "../../../utils/PublicRoutes";
import {
  GetMovies,
  GetRecommendedMovies,
  SearchMoviesByTitle,
  UpdateMovieRecommendation,
} from "../../../Redux/Movie";

const Movies = () => {
  const dispatch = useDispatch<AppDispatch>();

  const Movies = useSelector((state: any) => state.Movies.movies?.data);
  const [Data, setData] = useState(Movies);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(SearchMoviesByTitle({ movie_title: query.toString() }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const addRecommendation = (movieId: string) => {
    dispatch(UpdateMovieRecommendation({ movie_id: movieId, recommend: true }));
    dispatch(GetRecommendedMovies());
  };

  useEffect(() => {
    dispatch(GetMovies());
  }, []);

  useEffect(() => {
    setData(Movies);
  }, [Movies]);

  return (
    <div className="w-full h-auto flex flex-col items-center bg-black">
      <div className="flex items-center mt-10">
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className="px-4 py-2 rounded-l-md text-black w-10/12 md:w-64 outline-none focus:ring-0 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-orange-700 text-white rounded-r-md hover:bg-orange-600"
        >
          Search
        </button>
      </div>

      <div className="w-full my-5  md:px-4 rounded-lg">
        <div className="flex flex-row flex-wrap gap-2 items-center py-3 w-full ">
          {Data.length !== 0 &&
            Data.map((d: any, i: any) => (
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
                  onClick={() => addRecommendation(d.movie_id)}
                  className="w-full h-auto flex flex-col items-center bg-slate-900 hover:bg-green-600 rounded-b-md"
                >
                  <h3 className="text-[9px] font-poppins text-center p-1">Recommend</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
