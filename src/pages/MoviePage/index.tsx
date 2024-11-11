/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Nav from "../../components/Navbar";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../Redux/store";
import { GetMovieById } from "../../Redux/Movie";
import { useDispatch, useSelector } from "react-redux";
import DownloadLinks from "./DownloadLinks";
import { GetReviews } from "../../Redux/Reviews";
import Reviews from "./Reviews";

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const MyProfile = useSelector((state: any) => state.Auth.myProfile.data);

  const Movie = useSelector((state: any) => state.Movies.movie?.data);
  const ReviewsState = useSelector((state: any) => state.Review.reviews.data.reviews);

  const [movieData, setMovieData] = useState(Movie);
  const [reviewsData, setReviewsData] = useState(ReviewsState);

  useEffect(() => {
    dispatch(GetMovieById({ movie_id: `${id}` }));
    dispatch(GetReviews({ movie_id: `${id}` }));
  }, []);

  useEffect(() => {
    setMovieData(Movie);
    setReviewsData(ReviewsState);
    console.log(ReviewsState);
  }, [Movie, ReviewsState]);

  return (
    <div className="w-full h-auto bg-black pt-[62px] md:pt-[74px]">
      <Nav />
      <Banner movieData={movieData} />
      <DownloadLinks downloadLinks={movieData.download_links} />
      {reviewsData && <Reviews reviewsData={reviewsData} MyProfile={MyProfile} />}
    </div>
  );
};

export default MoviePage;
