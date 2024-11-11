/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Nav from "../../components/Navbar";
import Banner from "./Banner";
import Reviews from "./Reviews";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../Redux/store";
import { GetMovieById } from "../../Redux/Movie";
import { useDispatch, useSelector } from "react-redux";
import DownloadLinks from "./DownloadLinks";

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const Movie = useSelector((state: any) => state.Movies.movie?.data);
  const [movieData, setMovieData] = useState(Movie);

  useEffect(() => {
    dispatch(GetMovieById({ movie_id: `${id}` }));
  }, []);

  useEffect(() => {
    setMovieData(Movie);
    console.log(Movie);
  }, [Movie]);

  return (
    <div className="w-full h-auto bg-black pt-[62px] md:pt-[74px]">
      <Nav />
      <Banner movieData={movieData} />
      <DownloadLinks downloadLinks={movieData.download_links} />
      <Reviews />
    </div>
  );
};

export default MoviePage;
