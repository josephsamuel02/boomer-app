import Sidenav from "../Dashboard/Sidenav";
import Nav from "../Nav";
import Form from "./Form";
import SearchBar from "./SearchBar";
import { useParams } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const movieId = `${id}`;
  return (
    <div className="w-full h-screen bg-[#01010b]  ">
      <Nav />

      <div className=" pt-16 w-full flex flex-row justify-items-center max-h-screen bg-[#01010b]  ">
        <Sidenav />

        <div className="flex flex-col items-center justify-start w-full bg-[#01010b]  max-h-screen overflow-y-auto ">
          <SearchBar />
          <Form movieId={movieId} />
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
