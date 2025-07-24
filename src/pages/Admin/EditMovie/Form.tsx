/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { AppDispatch } from "../../../Redux/store";
import { GetMovieById, UpdateMovie } from "../../../Redux/Movie";
import { Loading } from "../../../components/Loading";

interface FormProps {
  movieId: string;
}

const Form: React.FC<FormProps> = ({ movieId }) => {
  const UploadResponse = useSelector((state: any) => state.Movies.movie.status);
  const Movie = useSelector((state: any) => state.Movies.movie.data);
  const dispatch = useDispatch<AppDispatch>();

  const MyProfile = useSelector((state: any) => state.Auth.myProfile.data);

  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [showSubmitBTN, setShowSubmitBTN] = useState(false);
  // const [MovieData, setMovieData] = useState(Movie);

  const [updateData, setUpdateData] = useState<any>({
    user_id: MyProfile.user_id,
    poster_id: MyProfile.user_id,
    poster_profile_image: MyProfile.profile_img,
    poster_user_name: MyProfile.user_name,
    editors_id: [],
    movie_title: Movie.movie_title,
    movie_id: movieId,
    movie_poster_image_id: image,
    synopsis: Movie.synopsis,
    movie_genre: Movie.movie_genre,
    released: Movie.released,
    type: Movie.type,
    release_date: Movie.release_date,
    movie_trailer: Movie.movie_trailer,
    industry: Movie.industry,
  });

  const Genre = [
    { label: "Action", value: "action" },
    { label: "Sci-Fi", value: "sci-fi" },
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
    { label: "TV Movie", value: "tv-movie" },
    { label: "Thriller", value: "thriller" },
    { label: "War", value: "war" },
    { label: "Western", value: "western" },
    { label: "Faith", value: "faith" },
    { label: "Others", value: "others" },
  ];

  const Industry = [
    { label: "Hollywood", value: "hollywood" },
    { label: "Bollywood", value: "bollywood" },
    { label: "Nollywood", value: "nollywood" },
    { label: "Korean", value: "korean" },
    { label: "Chinese", value: "chinese" },
    { label: "Japanese  ", value: "japanese" },
    { label: "Russian", value: "russian" },
    { label: "Telemundo", value: "telemundo" },
    { label: "Others", value: "others" },
  ];

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // setShowSubmitBTN(true);
    }
  };

  const uploadPosterImage = async (): Promise<string | null> => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "my_upload_preset");
      formData.append("cloud_name", "promotion-army");
      formData.append("folder", "Boomer");

      try {
        const response = await axios.post(import.meta.env.VITE_CLOUDINARY_BASE_URL, formData);
        const imageUrl = response.data.secure_url;
        return imageUrl;
      } catch (err) {
        return { error: err } as any;
      }
    }
    return null;
  };

  const updateMovie = async () => {
    setLoading(true);

    const uploadedImageUrl = await uploadPosterImage();

    if (uploadedImageUrl) {
      const newData = {
        ...updateData,
        movie_poster_image:
          uploadedImageUrl && uploadedImageUrl !== "" ? [uploadedImageUrl] : [image],
      };
      setUpdateData(newData);
      console.log(newData);
      await dispatch(UpdateMovie(newData));
    } else {
      await dispatch(UpdateMovie(updateData));
    }

    setLoading(false);

    // if (UploadResponse === 200) {
    //   window.location.reload();
    //   // Navigate(0);
    // }
  };

  useEffect(() => setShowSubmitBTN(true), []);

  useEffect(() => {
    // dispatch(clearMovieUploadState());
    setLoading(false);
    dispatch(GetMovieById({ movie_id: movieId }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // dispatch(clearMovieUploadState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [UploadResponse]);

  useEffect(() => {
    if (Movie) {
      if (Movie.movie_poster_image && Movie.movie_poster_image.length > 0) {
        setImage(Movie.movie_poster_image[0]);
      }
    }

    setUpdateData(Movie);
  }, [Movie]);

  return (
    <div className="w-full h-full bg-black pt-18 md:pt-20 flex flex-col items-center">
      <div className="mx-auto py-6 pt-20  w-11/12 md:w-[480px] h-auto flex flex-col items-center">
        {image && (
          <img
            src={image instanceof File ? URL.createObjectURL(image) : image}
            alt="poster"
            className="mb-6 w-2/3 h-auto border border-[#ffffff3b] rounded"
          />
        )}

        <div className="w-full h-auto">
          <h3 className="text-md text-primary">Select movie poster</h3>
          <input
            type="file"
            accept="image/*"
            multiple={false}
            name="file input"
            id=""
            onChange={(e: any) => handleImageChange(e)}
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
            name="movie_title"
            placeholder="Title"
            value={updateData.movie_title}
            className="text-sm text-slate-400 mb-2 w-full h-auto py-2 px-2 border border-[#ffffff8c] bg-black rounded-lg"
            onChange={(e) =>
              setUpdateData((prev: any) => ({ ...prev, movie_title: e.target.value }))
            }
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">Movie Genre</h3>
          <Select
            isMulti
            onChange={(selectedOption) =>
              setUpdateData((prev: any) => ({
                ...prev,
                movie_genre: selectedOption.map((option) => option.value),
              }))
            }
            options={Genre}
            defaultInputValue={[...updateData.movie_genre]}
            className="text-primary border border-[#ffffff8c] rounded-lg"
            styles={customStyles}
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary"> Type</h3>
          <Select
            onChange={(option: any) =>
              setUpdateData((prev: any) => ({
                ...prev,
                type: option.value,
              }))
            }
            options={[
              { label: "Single", value: "single" },
              { label: "Series", value: "series" },
            ]}
            defaultInputValue={updateData.type}
            className="text-primary border border-[#ffffff8c] rounded-lg"
            styles={customStyles}
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">Industry</h3>
          <Select
            onChange={(option: any) =>
              setUpdateData((prev: any) => ({
                ...prev,
                industry: option.value,
              }))
            }
            options={Industry}
            defaultInputValue={updateData.industry}
            className="text-primary border border-[#ffffff8c] rounded-lg"
            styles={customStyles}
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">
            About / Synopsis <span className="text-slate-500">(optional)</span>
          </h3>
          <textarea
            name="synopsis"
            placeholder="About the movie"
            className=" resize-none text-sm text-slate-400 mb-2 w-full h-auto py-2 px-2 border border-[#ffffff8c] bg-black rounded-lg"
            defaultValue={updateData.synopsis}
            onChange={(e) =>
              setUpdateData((prev: any) => ({ ...prev, synopsis: e.target.value }))
            }
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">Movie Trailer</h3>
          <input
            type="text"
            name="movie_trailer"
            placeholder="Paste YouTube link"
            className="mb-2 w-full h-auto py-2 px-2 border border-[#ffffff8c] bg-black rounded-lg text-md text-slate-500"
            defaultValue={updateData.movie_trailer}
            onChange={(e) =>
              setUpdateData((prev: any) => ({ ...prev, movie_trailer: e.target.value }))
            }
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">Released</h3>
          <div className="flex items-center gap-4">
            <label className="flex items-center text-slate-400">
              <input
                type="radio"
                name="released"
                // value={ updateData.released ? "yes"}
                checked={updateData.released === true}
                onChange={() => setUpdateData((prev: any) => ({ ...prev, released: true }))}
                className="mr-2 cursor-pointer"
              />
              Yes
            </label>

            <label className="flex items-center text-slate-400">
              <input
                type="radio"
                name="released"
                value="no"
                checked={updateData.released === false}
                onChange={() => setUpdateData((prev: any) => ({ ...prev, released: false }))}
                className="mr-2 cursor-pointer"
              />
              No
            </label>
          </div>
        </div>

        {showSubmitBTN && (
          <div className="w-full h-auto mt-4">
            <input
              type="button"
              value={"Post"}
              onClick={updateMovie}
              className="mb-2 w-full h-auto  text-lg font-Poppins text-white py-2  px-2  bg-primary    rounded-full cursor-pointer"
            />
          </div>
        )}
      </div>
      {loading == true && <Loading />}
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

export default Form;
