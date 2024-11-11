/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaFilm, FaStar } from "react-icons/fa6";
import { MdAdd, MdClose, MdThumbDown, MdThumbUp } from "react-icons/md";
import { Tooltip } from "react-tooltip";
interface compData {
  downloadLinks: string[];
}
const DownloadLinks = ({ downloadLinks: downloadLinks }: compData) => {
  const [downloadLinkCard, setDownloadLinkCard] = useState(false);

  const trendData = [
    {
      title: "John Wick 4",
      rating: 9.3,
      image: "/images/jwk.jpg",
      type: "Series",
      genre: "Action",
    },
    { title: "Aquaman", rating: 8.5, image: "/images/aquam.jpg", type: "", genre: "Drama" },
    {
      title: "Transformer",
      rating: 7.4,
      image: "/images/trans.jpg",
      type: "Series",
      genre: "Sci-Fi",
    },
    {
      title: "Game of Thrones",
      rating: 6.8,
      image: "/images/game.jpg",
      type: "Series",
      genre: "Sci-Fi",
    },

    {
      title: "Spider Man",
      rating: 9.0,
      image: "/images/spider.jpg",
      type: "Movie",
      genre: "Action",
    },

    { title: "Avatar", rating: 8.0, image: "/images/avata.jpg", type: "", genre: "Animation" },
    { title: "Jumangi", rating: 9.0, image: "/images/juma.avif", type: "", genre: "Action" },
    // Add more movies if needed
    {
      title: "Poco loco",
      rating: 6.8,
      image: "/images/poco.jpg",
      type: "Movie",
      genre: "Animation",
    },
    {
      title: "Vampire's Diary",
      rating: 8.0,
      image: "/images/Vdiary.jpg",
      type: "Series",
      genre: "Horror",
    },

    {
      title: "Avengers",
      rating: 8.0,
      image: "/images/aveng.jpg",
      type: "Series",
      genre: "Thriller",
    },
  ];

  const Download_Links = [
    {
      link: "https://downloadwella.com/dayibeu94xln/Strange.Darling.(NKIRI.COM).2023.AMZN.WEBRip.DOWNLOADED.FROM.NKIRI.COM.mkv.html",
      vote: 6,
    },
    {
      link: "https://downloadwella.com/dayibeu94xl.DOWNLOADED.FROM.NKIRI.COM.mkv.html",
      vote: 3,
    },
    {
      link: "https://downloadwella.com/dayibeu94xln/Strange.Darling.(NKIRI.COM.mkv.html",
      vote: 4,
    },
    { link: "https://downloadwella.com/dayiWNLOADED.FROM.NKIRI.COM.mkv.html", vote: 0 },
    { link: "https://downloadwella.com/daRI.COM.mkv.html", vote: 0 },
    {
      link: "https://downloadwella.cn/Strange.Darling.(NKIRI.COM).2023.AMZN.WEBRip.DOWNLOADED.FROM.NKIRI.COM.mkv.html",
      vote: -4,
    },
    { link: "https://downloadwella.OM.NKIRI.COM.mkv.html", vote: -2 },
  ];
  const sortedDownloadLinks = Download_Links.sort((a, b) => b.vote - a.vote);

  return (
    <div className="px-4 w-full h-auto py-4 bg-black">
      <h1 className="text-lg py-1 font-Raleway">You may also like</h1>
      <div className="flex flex-row py-3 w-full overflow-x-scroll">
        <div className="flex flex-row  h-auto w-auto  mr-16 ">
          {trendData.map((d, i) => (
            <div
              key={i}
              className="w-[130px] h-[190px] bg-black shadow shadow-[#ffffff44] rounded mx-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <div
                className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded"
                style={{ backgroundImage: `url(${d.image})` }}
              >
                <div className="absolute right-1 flex justify-center">
                  <div className="flex flex-row items-center justify-between">
                    <FaFilm size={13} className="text-white" />
                    <p className="pl-1 text-xs">{d.genre}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-2 ml-2">
                <h1 className=" line-clamp-1  h-[16px]   text-[9px] font-Raleway font-medium text-white ">
                  {d.title} Lorem ipsum dolor sit amet,
                </h1>
                <div className="px-1 flex flex-row items-center my-2 ">
                  <p className="  flex flex-row items-center font-Poppins ">
                    <FaStar size={13} className="text-[#F25B38]" />
                    <span className="pl-1 text-[10px]"> {d.rating}/10</span>
                  </p>
                  <p className=" ml-auto font-Poppins text-[10px] border border-[#ffffff71] rounded-full px-2">
                    {d.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-lg py-3 mt-6 font-Raleway">Download Links</h1>
      <div className="flex flex-row py-3 w-full overflow-x-scroll">
        <div className="flex flex-row  h-auto w-auto  mr-16 ">
          <div
            data-tooltip-id="add-download-link"
            data-tooltip-content="Add a Download link"
            data-tooltip-place="top"
            className=" relative mx-3 w-10 h-10 bg-white cursor-pointer hover:bg-gray-400 flex  items-center rounded-full"
            onClick={() => setDownloadLinkCard(true)}
          >
            <Tooltip id="add-download-link" />
            <Tooltip id="my-tooltip" />
            <MdAdd size={20} color="black" className="m-auto" />
          </div>

          {downloadLinks &&
            downloadLinks.map((d, i) => (
              <div
                key={i}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={d}
                data-tooltip-place="top"
                className=" mx-3 w-52  px-3 py-1 bg-[#e1e1e2] flex flex-row items-center rounded-full"
              >
                <a
                  href={d}
                  target="_blank"
                  className="truncate mr-2 text-xs font-Roboto font-bold w-32  text-black hover:text-blue-600 "
                >
                  {d}
                </a>

                <MdThumbUp
                  size={14}
                  className="text-green-700 hover:text-green-500 cursor-pointer"
                />
                <span className="mx-1 text-black text-sm">{5}</span>
                <MdThumbDown
                  size={14}
                  className="text-red-700 hover:text-red-500 cursor-pointer"
                />
              </div>
            ))}
        </div>
      </div>

      {downloadLinkCard && (
        <div className="w-full h-full fixed left-0 right-0 bottom-0 top-20">
          <div className="  relative top-28 md:top-20 left-0 right-0 mx-auto w-[96%] md:w-[550px] h-[190px] border-2 border-[#757474] bg-[#0e0d0dd2] rounded-xl z-20">
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
              className=" resize-none mx-auto px-4 py-2 mt-2 flex w-3/4 h-[60px] bg-[#0e0e0ed5] border border-[#757474] rounded-lg"
            ></textarea>
            <input
              type="button"
              value="Add"
              className="flex mx-auto px-4 py-2 mt-5 w-3/4 bg-[#ffea2b] hover:bg-[#ffb52b] rounded-full text-black font-Poppins"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadLinks;
