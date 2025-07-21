import Form from "./Form";
import SearchBar from "./SearchBar";

const EditMovie = () => {
  return (
    <div className="w-full h-screen overflow-y-auto bg-[#01010b] ">
      <SearchBar />
      <Form />
    </div>
  );
};

export default EditMovie;
