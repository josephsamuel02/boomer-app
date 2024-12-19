/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Nav from "../../components/Navbar";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import DownloadLinks from "./DownloadLinks";
import { GetMovieById, GetMoviesByGenre } from "../../Redux/Movie";

import Reviews from "./Reviews";
import { GetReviews } from "../../Redux/Reviews";

const MoviePage = () => {
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
    <div className="w-full h-auto bg-black pt-[62px] md:pt-[74px]">
      <Nav />
      <Banner movieData={movieData} />
      <DownloadLinks MovieByGenre={genreMovies} id={`${id}`} user_id={MyProfile?.user_id} />
      <Reviews reviewsData={reviewsData} MyProfile={MyProfile} />
    </div>
  );
};

export default MoviePage;
