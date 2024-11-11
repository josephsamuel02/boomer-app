/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Nav from "../../components/Navbar";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import axios from "axios";
import { Loading } from "../../components/Loading";
import { clearMovieUploadState, UploadMovie } from "../../Redux/Movie";
import { AppDispatch } from "../../Redux/store";
import { useNavigate } from "react-router-dom";
const Upload = () => {
  const UploadResponse = useSelector((state: any) => state.Movies.data.status);

  const dispatch = useDispatch<AppDispatch>();
  const Navigate = useNavigate();

  const MyProfile = useSelector((state: any) => state.Auth.myProfile.data);

  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [showSubmitBTN, setShowSubmitBTN] = useState(false);

  const [updateData, setUpdateData] = useState<any>({
    poster_id: MyProfile.user_id,
    editors_id: [],
    movie_title: " ",
    tags: [],
    synopsis: " ",
    movie_genre: " ",
    released: true,
    type: "",
    // release_date: " ",
    movie_poster_image: [],
    download_links: [],
    movie_trailer: "",
    reviews: {},
    rating: 0,
    industry: "",
    language: " ",
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
        console.log("Uploaded Image URL:", imageUrl);
        return imageUrl;
      } catch (err) {
        console.error("Error uploading image:", err);
        return null;
      }
    }
    return null;
  };

  const uploadMovie = async () => {
    console.log(updateData);
    setLoading(true);

    const uploadedImageUrl = await uploadPosterImage();

    if (uploadedImageUrl) {
      const newData = { ...updateData, movie_poster_image: [uploadedImageUrl] };
      setUpdateData(newData);
      await dispatch(UploadMovie(newData));
    } else {
      await dispatch(UploadMovie(updateData));
    }

    setLoading(false);

    if (UploadResponse === 200) {
      window.location.reload();
    }
  };

  useEffect(() => setShowSubmitBTN(true), []);

  useEffect(() => {
    dispatch(clearMovieUploadState());
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (UploadResponse === 200) {
      setLoading(false);
      Navigate(0);
      dispatch(clearMovieUploadState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [UploadResponse]);
  return (
    <div className="w-full h-full bg-black pt-18 md:pt-20 flex flex-col items-center">
      <Nav />
      <div className="mx-auto py-6   w-11/12 md:w-[480px] h-auto flex flex-col items-center">
        {image && (
          <img
            src={image ? URL.createObjectURL(image) : ""}
            alt="poster"
            className="mb-6 w-2/3 h-auto border border-[#ffffff3b] rounded"
          />
        )}
        <div className="w-full h-auto">
          <h3 className="text-md text-primary">Select movie poster</h3>
          <input
            type="file"
            accept="image/*"
            multiple
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
            onChange={(e) =>
              setUpdateData((prev: any) => ({ ...prev, movie_trailer: e.target.value }))
            }
          />
        </div>

        <div className="w-full h-auto mt-4">
          <h3 className="text-md text-primary">
            Download link <span className="text-slate-500">(optional)</span>
          </h3>
          <input
            type="text"
            name="download_links"
            placeholder="https://example.com/movie"
            className="mb-2 w-full h-auto py-2 focus:bg-black text-sm text-slate-400 px-2 border border-[#ffffff8c] bg-black rounded-lg"
            onChange={(e) =>
              setUpdateData((prev: any) => ({
                ...prev,
                download_links: [e.target.value], // Assuming it's a single link
              }))
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
                value="yes"
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

        {updateData.released == true && (
          <div className="w-full h-auto mt-4">
            <h3 className="text-md text-primary">
              What do you rate this Movie <span className="text-slate-500">(optional)</span>
            </h3>
            <div className="mx-auto flex flex-row items-center">
              {Array.from({ length: updateData.rating }, (_, i) => (
                <MdStar
                  color="yellow"
                  size={20}
                  className="text-yellow-600"
                  key={`filled-${i}`}
                  onClick={() => {
                    setUpdateData((prev: any) => ({
                      ...prev,
                      rating: i + 1,
                      reviews: { ...prev.reviews, rating: i + 1, user_id: MyProfile.user_id },
                    }));
                  }}
                />
              ))}
              {Array.from({ length: 10 - updateData.rating }, (_, i) => (
                <FaRegStar
                  color="yellow"
                  size={20}
                  className="text-yellow-600"
                  key={`empty-${i}`}
                  onClick={() => {
                    setUpdateData((prev: any) => ({
                      ...prev,
                      rating: updateData.rating + i + 1,
                      reviews: {
                        ...prev.reviews,
                        rating: updateData.rating + i + 1,
                        user_id: MyProfile.user_id,
                      }, // Update reviews with new rating
                    }));
                  }}
                />
              ))}
              <h3 className="mx-2 text-sm text-slate-400">
                {updateData.rating} Star{updateData.rating > 1 ? "s" : ""}
              </h3>
            </div>

            <h3 className="text-md text-primary mt-4">Add Review</h3>
            <textarea
              name="synopsis"
              placeholder="review"
              className=" resize-none text-sm text-slate-400 mb-2 w-full h-auto py-2 px-2 border border-[#ffffff8c] bg-black rounded-lg"
              onChange={(e: any) => {
                setUpdateData((prev: any) => ({
                  ...prev,
                  reviews: {
                    ...prev.reviews,
                    comment: e.target.value,
                    user_id: MyProfile.user_id,
                  },
                }));
              }}
            />
          </div>
        )}

        {showSubmitBTN && (
          <div className="w-full h-auto mt-4">
            <input
              type="button"
              value={"Post"}
              onClick={uploadMovie}
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

export default Upload;
