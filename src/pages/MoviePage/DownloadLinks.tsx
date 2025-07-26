/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FaFilm, FaStar } from "react-icons/fa6";
import { MdAdd, MdClose, MdThumbDown, MdThumbUp } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { AddDownloadLink, GetMovieById, RateDownloadLink } from "../../Redux/Movie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../../components/Loading";

interface compData {
  MovieByGenre: any;
  id: string;
  user_id: string;
}

const DownloadLinks = ({ MovieByGenre, id, user_id }: compData) => {
  const dispatch = useDispatch<AppDispatch>();
  const MovieData = useSelector((state: any) => state.Movies.movie?.data);

  const [loading, setLoading] = useState(false);
  const [downloadLinkCard, setDownloadLinkCard] = useState(false);
  const [dLinks, setDLinks] = useState(MovieData?.downloadLinks);
  const [Movie, setMovie] = useState(MovieData);

  const [addDownloadLink, setAddDownloadLink] = useState({
    url: "",
    user_id: user_id,
    movie_id: id,
  });

  // const sortedDownloadLinks = dLinks.sort((a, b) => b.rating - a.rating);

  const isValidUrl = (link: string) => {
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:\d+)?(\/.*)?$/;
    return urlPattern.test(link);
  };

  const addLink = async () => {
    const validLink = isValidUrl(addDownloadLink.url);

    try {
      if (addDownloadLink.url.length < 5) {
        toast.warn("Invalid input");
      } else if (!validLink) {
        toast.warn("Please enter a valid download link");
      } else {
        setLoading(true);
        await dispatch(
          AddDownloadLink({
            user_id: user_id,
            url: addDownloadLink.url,
            movie_id: id.toString(),
          })
        );

        dispatch(GetMovieById({ movie_id: id.toString() }));
        setMovie(MovieData);

        toast.success("Download link added successfully");

        window.location.reload();
        setAddDownloadLink({ url: "", movie_id: "", user_id: user_id });
        setDownloadLinkCard(false);
        setLoading(false);
      }
    } catch (error) {
      return error;
    }
  };

  const sortDownloadLinks = () => {
    const sortedLinks = [...dLinks]?.sort((a, b) => b.rating - a.rating); // Create a new array and sort it
    setDLinks(sortedLinks); // Update the state with the sorted array
  };

  const voteDownloadLink = (id: string, rating: "inc" | "dic") => {
    dispatch(
      RateDownloadLink({
        id: id,
        rating: rating,
        user_id: user_id,
      })
    );
    dispatch(GetMovieById({ movie_id: id }));
    setMovie(MovieData);
    sortDownloadLinks();
    toast.success(`You ${rating === "inc" ? "liked" : "disliked"} this link`);
  };

  useEffect(() => {
    sortDownloadLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Movie]);

  return (
    <div className="px-4 w-full h-auto py-4 bg-black">
      <h1 className="text-lg py-1 font-Raleway">You may also like</h1>

      <div className="flex flex-row py-3 w-full overflow-x-scroll">
        <div className="flex flex-row  h-auto w-auto  mr-16 ">
          {MovieByGenre &&
            MovieByGenre.map((d: any, i: number) => (
              <a
                key={i}
                href={`${PUBLIC_ROUTES.MOVIE}/${d.movie_id}`}
                className="mx-6 w-[150px] h-[210px] bg-black shadow shadow-[#ffffff44] rounded   transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <div
                  className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${d.movie_poster_image[0]})` }}
                >
                  <div className="absolute right-1 flex justify-center">
                    <div className="flex flex-row items-center justify-between">
                      <FaFilm size={13} className="text-white" />
                      <p className="pl-1 text-xs">{d.movie_genre[0]}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-2 ml-2">
                  <h1 className=" line-clamp-1  h-[16px]   text-[9px] font-Raleway font-medium text-white ">
                    {d.title}
                  </h1>
                  <div className="px-1 flex flex-row items-center my-2 ">
                    <p className="  flex flex-row items-center  ">
                      <FaStar size={12} className=" m-auto flex text-[#FFFF00]" />
                      <span className=" m-auto pl-1 text-[10px]"> {d.rating}/10</span>
                    </p>
                    <p className=" ml-auto font-Poppins text-[10px] border border-[#ffffff71] rounded-full px-2">
                      {d.type}
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>

      <h1 className="text-lg py-3 mt-6 font-Raleway">Download Links</h1>

      <div className="flex flex-row py-3 w-full overflow-x-scroll">
        <div className="flex flex-row  h-auto w-auto  mr-16 ">
          <div
            data-tooltip-id="add-download-link"
            data-tooltip-content="Add a download link"
            data-tooltip-place="top"
            className=" relative mx-3 w-10 h-10 bg-white cursor-pointer hover:bg-gray-400 flex  items-center rounded-full"
            onClick={() => setDownloadLinkCard(true)}
          >
            <Tooltip id="add-download-link" />
            <MdAdd size={20} color="black" className="m-auto" />
          </div>

          {dLinks.length !== 0 &&
            dLinks.map((d: any, i: any) => (
              <div
                key={i}
                className="mx-3 w-52 px-3 py-1 bg-[#e1e1e2] flex flex-row items-center rounded-full"
              >
                <a
                  href={d.url}
                  target="_blank"
                  className="truncate mr-2 text-xs font-Roboto font-bold w-32 text-black hover:text-blue-600 "
                >
                  {d.url}
                </a>

                {!d.rated_by.some((id: string) => id === user_id) && (
                  <MdThumbUp
                    key={i}
                    size={14}
                    className="text-green-700 hover:text-green-500 cursor-pointer"
                    onClick={() => voteDownloadLink(d.id, "inc")}
                  />
                )}

                <span className="mx-1 text-black text-md  ">{d.rating}</span>

                {!d.rated_by.some((id: string) => id === user_id) && (
                  <MdThumbDown
                    size={14}
                    className="text-red-700 hover:text-red-500 cursor-pointer"
                    onClick={() =>
                      dispatch(
                        RateDownloadLink({
                          id: d.id,
                          rating: "dic",
                          user_id: user_id,
                        })
                      )
                    }
                  />
                )}
              </div>
            ))}
        </div>
      </div>

      {downloadLinkCard && (
        <div className="w-full h-full fixed left-0 right-0 bottom-0 top-20">
          <div className="relative top-28 md:top-36 left-0 right-0 mx-auto w-[96%] md:w-[550px] h-[190px] border-2 border-[#757474] bg-[#0e0d0dd2] rounded-xl z-20">
            <h3
              className=" absolute right-2 w-7 ml-auto flex justify-end m-1.5 "
              onClick={() => setDownloadLinkCard(false)}
            >
              <MdClose color="white" size={30} />
            </h3>

            <h3 className="m-auto mt-3 w-3/4 text-md text-[#fffffff5] font-Railway">
              Paste a download link for this movie
            </h3>

            <textarea
              name="review"
              placeholder="Download link"
              onChange={(e) =>
                setAddDownloadLink((prev) => ({ ...prev, url: e.target.value }))
              }
              className=" resize-none mx-auto px-4 py-2 mt-2 flex w-3/4 h-[60px] bg-[#0e0e0ed5] border border-[#757474] rounded-lg"
            ></textarea>

            <input
              type="button"
              value="Add"
              onClick={() => addLink()}
              className="flex mx-auto px-4 py-2 mt-5 w-3/4 bg-[#fafafa] hover:bg-[#f7b9a9] rounded-full text-black font-Poppins"
            />
          </div>
        </div>
      )}

      {loading == true && <Loading />}

      <ToastContainer />
    </div>
  );
};

export default DownloadLinks;
