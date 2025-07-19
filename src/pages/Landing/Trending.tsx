/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { FaFilm, FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
// import { GetTrendingMovies } from "../../Redux/Movie";
import { GetMovies } from "../../Redux/Movie";

import { AppDispatch } from "../../Redux/store";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";

const Trending = () => {
  // const TrendingMovie = useSelector((state: any) => state.Movies.trending?.data);
  const Movies = useSelector((state: any) => state.Movies.movies?.data);

  const dispatch = useDispatch<AppDispatch>();

  // const [moviesData, setMoviesData] = useState(TrendingMovie);
  const [moviesData, setMoviesData] = useState(Movies);

  // useEffect(() => {
  //   dispatch(GetTrendingMovies());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // useEffect(() => {
  //   setMoviesData(TrendingMovie);
  // }, [TrendingMovie]);

  useEffect(() => {
    dispatch(GetMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setMoviesData(Movies);
    // console.log(Movies);
  }, [Movies]);

  // const trendData = [
  //   {
  //     title: "John Wick 4",
  //     rating: 9.3,
  //     image: "/images/jwk.jpg",
  //     type: "Series",
  //     genre: "Action",
  //   },
  //   { title: "Aquaman", rating: 8.5, image: "/images/aquam.jpg", type: "", genre: "Drama" },
  //   {
  //     title: "Transformer",
  //     rating: 7.4,
  //     image: "/images/trans.jpg",
  //     type: "Series",
  //     genre: "Sci-Fi",
  //   },
  //   {
  //     title: "Game of Thrones",
  //     rating: 6.8,
  //     image: "/images/game.jpg",
  //     type: "Series",
  //     genre: "Sci-Fi",
  //   },
  //   {
  //     title: "True Blood",
  //     rating: 8.0,
  //     image: "/images/blood.jpg",
  //     type: "Movie",
  //     genre: "Horror",
  //   },
  //   {
  //     title: "Spider Man",
  //     rating: 9.0,
  //     image: "/images/spider.jpg",
  //     type: "Movie",
  //     genre: "Action",
  //   },
  //   {
  //     title: "Mr Bones",
  //     rating: 6.8,
  //     image: "/images/mrbones.jpeg",
  //     type: "Series",
  //     genre: "Comedy",
  //   },
  //   { title: "Avatar", rating: 8.0, image: "/images/avata.jpg", type: "", genre: "Animation" },
  //   { title: "Jumangi", rating: 9.0, image: "/images/juma.avif", type: "", genre: "Action" },
  //   // Add more movies if needed
  //   {
  //     title: "Poco loco",
  //     rating: 6.8,
  //     image: "/images/poco.jpg",
  //     type: "Movie",
  //     genre: "Animation",
  //   },
  //   {
  //     title: "Vampire's Diary",
  //     rating: 8.0,
  //     image: "/images/Vdiary.jpg",
  //     type: "Series",
  //     genre: "Horror",
  //   },
  //   {
  //     title: "Mr Bean",
  //     rating: 9.0,
  //     image: "/images/bean.jpg",
  //     type: "Movie",
  //     genre: "Comedy",
  //   },
  //   {
  //     title: "Avengers",
  //     rating: 8.0,
  //     image: "/images/aveng.jpg",
  //     type: "Series",
  //     genre: "Thriller",
  //   },
  //   {
  //     title: "Spong Bob",
  //     rating: 9.0,
  //     image: "/images/bob.jpg",
  //     type: "Movie",
  //     genre: "Comedy",
  //   },
  // ];

  // GetTrendingMovies
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
