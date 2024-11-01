/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Nav from "../../components/Navbar";
import Select from "react-select";
const Upload = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const Genre = [
    { label: "Action", value: "action" },
    { label: "Adventure", value: "adventure" },
    { label: "Animation", value: "animation" },
    { label: "Comedy", value: "comedy" },
    { label: "Crime", value: "crime" },
    { label: "Documentary", value: "documentary" },
    { label: "Drama", value: "drama" },
    { label: "Family", value: "family" },
    { label: "Fantasy", value: "fantasy" },
    { label: "History", value: "history" },
    { label: "Horror", value: "horror" },
    { label: "Music", value: "music" },
    { label: "Mystery", value: "mystery" },
    { label: "Romance", value: "romance" },
    { label: "Science Fiction", value: "sci-fi" },
    { label: "TV Movie", value: "tv-movie" },
    { label: "Thriller", value: "thriller" },
    { label: "War", value: "war" },
    { label: "Western", value: "western" },
    { label: "Faith", value: "faith" },
  ];

  return (
    <div className="w-full h-full bg-black pt-18 md:pt-20 flex flex-col items-center">
      <Nav />

      <div className="mx-auto py-6   w-11/12 md:w-[480px] h-auto flex flex-col items-center">
        <img
          src="/images/strange-darling-poster.jpg"
          alt="poster"
          className="mb-6 w-2/3 h-auto border border-[#ffffff3b] rounded"
        />

        <div className="w-full h-auto">
          <h3 className="text-md text-primary">Select movie poster</h3>
          <input
            type="file"
            accept="image/*"
            multiple
            name="file input"
            id=""
            className="my-2 w-full h-auto border border-[#ffffff8c] 
      rounded-full text-xs text-slate-500
      file:mr-2 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-primary
      hover:file:bg-violet-100"
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">Movie title</h3>
          <input
            type="text"
            name="file input"
            placeholder="Title"
            id=""
            className="text-sm text-slate-400 mb-2 w-full h-auto py-2 px-2 border border-[#ffffff8c] bg-black rounded-lg  "
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">Movie Genre</h3>
          <Select
            defaultValue={selectedOption}
            isMulti
            onChange={() => setSelectedOption}
            options={Genre}
            className="text-primary  border  border-[#ffffff8c] rounded-lg"
            styles={customStyles}
          />
        </div>
        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">
            About / Synopsis <span className="text-slate-500"> (optional)</span>
          </h3>
          <textarea
            name="file input"
            draggable={false}
            placeholder="About the movie"
            className="text-sm text-slate-400 mb-2 w-full h-auto py-2 px-2 border border-[#ffffff8c] bg-black rounded-lg "
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">
            Movie Trailer <span className="text-slate-500"> </span>
          </h3>
          <input
            type="text"
            name="file input"
            placeholder="Past youtube link"
            id=""
            className="mb-2 w-full h-auto py-2 px-2 border border-[#ffffff8c] bg-black rounded-lg text-md text-slate-500"
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">
            Download link <span className="text-slate-500"> (optional)</span>
          </h3>
          <input
            type="text"
            name="file input"
            placeholder="https://example.com/movie"
            className="mb-2 w-full h-auto py-2 focus:bg-black text-sm text-slate-400  px-2 border border-[#ffffff8c] bg-black rounded-lg "
          />
        </div>
        <div className="w-full h-auto mt-4">
          <input
            type="button"
            value={"Post"}
            className="mb-2 w-full h-auto  text-lg font-Poppins text-white py-2  px-2  bg-primary    rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

const customStyles = {
  option: (defaultStyles: any) => ({
    // You can log the defaultStyles and state for inspection
    // You don't need to spread the defaultStyles
    ...defaultStyles,
    color: "#d44626",
    backgroundColor: "#000000 ",
  }),

  control: (defaultStyles: any) => ({
    ...defaultStyles,
    // Notice how these are all CSS properties
    backgroundColor: "#000000 ",
    padding: "2px",
    border: "none",
    boxShadow: "none",
    borderRadius: "10px",
  }),
  singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "#fff" }),
};

export default Upload;
