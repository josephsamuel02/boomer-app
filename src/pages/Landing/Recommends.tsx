/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { FaFilm, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GetRecommendedMovies } from "../../Redux/Movie";
import { AppDispatch } from "../../Redux/store";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";

const Recommends = () => {
  const dispatch = useDispatch<AppDispatch>();
  const RecommendedMovies = useSelector((state: any) => state.Movies.recommended.data);
  const [Data, setData] = useState(RecommendedMovies);

  useEffect(() => {
    dispatch(GetRecommendedMovies());
  }, []);

  useEffect(() => {
    // Update the Data state whenever RecommendedMovies changes
    if (!RecommendedMovies) return;
    if (RecommendedMovies.length === 0) {
      setData([]);
      return;
    }
    setData(RecommendedMovies);
  }, [RecommendedMovies]);

  return (
    <div className="w-full h-auto mt-16 px-4 md:px-6 flex flex-col">
      <div className="flex flex-col mx-auto w-full justify-center">
        <h1 className="text-2xl py-6 md:pb-auto   font-Raleway">Recommends</h1>
        <div className="flex flex-row py-3 w-full overflow-x-scroll">
          <div className="flex flex-row  h-[270px] w-auto  mr-36 ">
            {Data &&
              Data.map((d: any, i: number) => (
                <a
                  href={`${PUBLIC_ROUTES.MOVIE}/${d.movie_id}`}
                  key={i}
                  className="w-[160px] h-[240px] bg-black shadow shadow-[#ffffff44] rounded mx-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  <div
                    className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${d.movie_poster_image})` }}
                  >
                    <div className="absolute right-1 flex justify-center">
                      <div className="flex flex-row items-center justify-between">
                        <FaFilm className="text-white" size={16} />
                        <p className="pl-1 text-sm">{d.movie_genre[0]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mt-2 ml-2">
                    <h1 className=" line-clamp-2  h-[36px] text-[12px] font-Nunito font-medium text-white ">
                      {d.movie_title}
                    </h1>
                    <div className="px-1 flex flex-row items-center my-2">
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
      </div>
    </div>
  );
};

export default Recommends;

// Recommends
