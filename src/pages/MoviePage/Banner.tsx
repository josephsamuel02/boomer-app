/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdStar } from "react-icons/md";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useEffect, useState } from "react";

interface compData {
  movieData: any;
}

const Banner = ({ movieData }: compData) => {
  const [youtubVid, setYoutubeVid] = useState<string>("");

  const extractVideoId = (url: any) => {
    const youtubeUrlRegex = /(?:youtube\.com\/.*v=|youtu\.be\/)([\w\-]{11})/;
    const match = url.match(youtubeUrlRegex);
    setYoutubeVid(match ? match[1] : " ");
  };

  useEffect(() => extractVideoId(`${movieData?.movie_trailer}`), [movieData]);

  return (
    <>
      <div
        className=" px-2 md:px-6 w-full h-auto md:h-[560px] bg-no-repeat bg-cover bg-white flex flex-col md:flex-row items-center"
        style={{
          backgroundImage: `url(${
            movieData?.movie_poster_image ? movieData?.movie_poster_image : ""
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" m-1 w-auto h-[430px] md:h-[540px] flex flex-col md:flex-row items-center  ">
          {
            <img
              // src="/images/strange-darling-poster.jpg"
              src={
                movieData?.movie_poster_image
                  ? movieData?.movie_poster_image
                  : "/images/strange-darling-poster.jpg"
              }
              alt="movie poster"
              className="mx-auto w-auto h-full object-contain"
            />
          }
        </div>
        <div className="mx-auto w-[99%] md:w-2/3 h-[98%] p-3 bg-gradient-to-b from-[#000000] to-[#b8b8b81a] backdrop-blur-md border-2 border-[#ffffff2a] rounded-lg">
          <h3 className="text-xl md:text-4xl font-bold text-white font-Roboto uppercase ">
            {movieData?.movie_title}
          </h3>
          <h3 className=" mt-4 text-xl font-bold text-white font-Raleway ">Synopsis</h3>
          <p className=" line-clamp-4 text-sm  text-white font-nunito">
            {movieData?.synopsis}
          </p>
          <div className="mt-2 w-full h-auto flex flex-col md:flex-row py-2">
            <h3 className="text-md md:text-lg  text-white font-Roboto font-bold flex flex-row items-center ">
              <MdStar size={26} color="yellow" />
              {movieData?.rating}/10
              <span className="mx-1 md:mx-3 text-xs text-center md:text-sm font-Nunito font-normal italic">
                {movieData?.rating_count} Reviews
              </span>
            </h3>
            <h3 className="mx-3 text-xs md:text-md text-center text-white px-2 py-[2px] items-center font-Raleway   bg-[#7775753d] border border-[#ffffffd8]  rounded-2xl">
              {movieData?.movie_genre?.map((genre: any, index: any) => (
                <span key={index} className="mx-1 text-[8px] md:text-xs">
                  {genre}
                </span>
              ))}
            </h3>
            <a
              href={PUBLIC_ROUTES.MY_PROFILE}
              className=" italic line-clamp-1 w-auto mx-3 text-xs text-center  hover:text-blue-700 text-white flex flex-row items-center  py-1 font-Raleway    rounded-2xl"
            >
              Uploaded by @{movieData?.poster_user_name}
              {movieData?.poster_profile_image && (
                <img
                  src={movieData?.poster_profile_image}
                  alt=""
                  className="ml-1 w-5 h-5 rounded-full object-cover"
                />
              )}
            </a>
          </div>
          {youtubVid && (
            <div className="m-auto mt-5 w-full md:w-3/4 h-[250px] md:h-[210px] lg:h-[310px]  flex flex-col items-center  ">
              <iframe
                src={`https://www.youtube.com/embed/${youtubVid}?si=yj-GZA3legF6RuAt`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full object-contain"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;
