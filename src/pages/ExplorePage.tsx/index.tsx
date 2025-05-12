/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Nav from "../../components/Navbar";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import {
  GetMovies,
  GetMoviesByGenre,
  GetMoviesByType,
  SearchMoviesByTitle,
} from "../../Redux/Movie";
import { AppDispatch } from "../../Redux/store";
import { useLocation } from "react-router-dom";

const ExplorePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const Movies = useSelector((state: any) => state.Movies.movies.data);
  const MovieType = useSelector((state: any) => state.Movies.movie_type?.data);
  const MovieByGenre = useSelector((state: any) => state.Movies.movie_by_genre?.data);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const search = queryParams.get("search"); // e.g., ?search=value
  const genre = queryParams.get("genre"); // e.g., ?genre=value
  const type = queryParams.get("type");
  const [moviesData, setMoviesData] = useState(Movies);

  useEffect(() => {
    // console.log("search", search);
    // console.log("genre", genre);
    // console.log("type", type);
    if (search) {
      dispatch(SearchMoviesByTitle({ movie_title: search }));
      setMoviesData(Movies);
    }

    if (genre) {
      dispatch(GetMoviesByGenre({ movie_genre: [genre] }));
      setMoviesData(MovieByGenre);
    }

    if (type) {
      dispatch(GetMoviesByType({ type: type }));
      setMoviesData(MovieType);
    }

    if (!search && !genre && !type) {
      dispatch(GetMovies());
      setMoviesData(Movies);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMoviesData(Movies);
  }, [Movies]);

  // useEffect(() => {
  //   setMoviesData(MovieType);
  // }, [MovieType]);
  return (
    <div className="w-full h-auto bg-black pt-20 ">
      <Nav />
      <SearchBar />
      <SearchResult moviesData={moviesData} />
    </div>
  );
};

export default ExplorePage;
