/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownloadLinks from "./DownloadLinks";

import Reviews from "./Reviews";
import { AppDispatch } from "../../../Redux/store";
import { GetMovieById, GetMoviesByGenre } from "../../../Redux/Movie";
import { GetReviews } from "../../../Redux/Reviews";
import Nav from "../Nav";
import Sidenav from "../Dashboard/Sidenav";

const AdminMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const MyProfile = useSelector((state: any) => state.Auth.myProfile.data);

  const Movie = useSelector((state: any) => state.Movies.movie?.data);
  const MovieByGenre = useSelector((state: any) => state.Movies.movie_by_genre?.data);
  const ReviewsState = useSelector((state: any) => state.Review?.reviews?.data?.reviews);

  const [movieData, setMovieData] = useState(Movie);
  const [reviewsData, setReviewsData] = useState(ReviewsState);
  const [genreMovies, setGenreMovies] = useState(MovieByGenre);

  useEffect(() => {
    dispatch(GetMovieById({ movie_id: `${id}` }));
    dispatch(GetReviews({ movie_id: `${id}` }));
    dispatch(GetMoviesByGenre({ movie_genre: movieData.movie_genre }));
  }, [id]);

  useEffect(() => {
    setMovieData(Movie);
    setReviewsData(ReviewsState);
    setGenreMovies(MovieByGenre);
  }, [Movie, ReviewsState, MovieByGenre]);

  return (
    <div className="w-full h-auto bg-black pt-[16px]  ">
      <Nav />
      <div className=" pt-16 w-full flex flex-row justify-items-center max-h-screen bg-[#01010b]  ">
        <Sidenav />
        <div className="flex flex-col items-center justify-start w-full bg-[#01010b]  max-h-screen overflow-y-auto ">
          <Banner movieData={movieData} />
          <DownloadLinks
            MovieByGenre={genreMovies}
            id={`${id}`}
            user_id={MyProfile?.user_id}
          />
          <Reviews reviewsData={reviewsData} MyProfile={MyProfile} />
        </div>
      </div>
    </div>
  );
};

export default AdminMoviePage;
