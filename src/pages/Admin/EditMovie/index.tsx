/* eslint-disable @typescript-eslint/no-explicit-any */
import Sidenav from "../Dashboard/Sidenav";
import Nav from "../Nav";
import Form from "./Form";
import SearchBar from "./SearchBar";
import { useParams } from "react-router-dom";
import SearchResult from "./SearchResult";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EditMovie = () => {
  const { id } = useParams();

  const Movies = useSelector((state: any) => state.Movies.movies.data);
  const [movieId, setMovieId] = useState(`${id}`);
  const [Data, setData] = useState(Movies);

  useEffect(() => {
    setData(Movies);
  }, [Movies]);

  return (
    <div className="w-full h-screen bg-[#01010b]  ">
      <Nav />

      <div className=" pt-16 w-full flex flex-row justify-items-center max-h-screen bg-[#01010b]  ">
        <Sidenav />

        <div className="flex flex-col items-center justify-start w-full bg-[#01010b]  max-h-screen overflow-y-auto ">
          <SearchBar setMovieId={setMovieId} />
          {movieId && <Form movieId={movieId} />}

          {!movieId && <SearchResult moviesData={Data} />}
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
