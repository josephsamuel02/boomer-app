import { FaFilm, FaStar } from "react-icons/fa";

const Main = () => {
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
      title: "True Blood",
      rating: 8.0,
      image: "/images/blood.jpg",
      type: "Movie",
      genre: "Horror",
    },
    {
      title: "Spider Man",
      rating: 9.0,
      image: "/images/spider.jpg",
      type: "Movie",
      genre: "Action",
    },
    {
      title: "Mr Bones",
      rating: 6.8,
      image: "/images/mrbones.jpeg",
      type: "Series",
      genre: "Comedy",
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
      title: "Mr Bean",
      rating: 9.0,
      image: "/images/bean.jpg",
      type: "Movie",
      genre: "Comedy",
    },
    {
      title: "Avengers",
      rating: 8.0,
      image: "/images/aveng.jpg",
      type: "Series",
      genre: "Thriller",
    },
    {
      title: "Spong Bob",
      rating: 9.0,
      image: "/images/bob.jpg",
      type: "Movie",
      genre: "Comedy",
    },
  ];
  return (
    <div className="w-full h-auto p-6 ">
      <h1 className="text-xl py-2 font-Raleway">Latest Uploads</h1>

      <div className="flex flex-row flex-wrap gap-4 items-center h-auto w-full  ">
        {trendData.slice(0, 10).map((d, i) => (
          <div
            key={i}
            className="w-[120px] h-[200px] mx-auto my-4 bg-black shadow shadow-[#ffffff44] rounded  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <div
              className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded"
              style={{ backgroundImage: `url(${d.image})` }}
            >
              <div className="absolute right-1 flex justify-center">
                <div className="flex flex-row items-center justify-between">
                  <FaFilm className="text-white" size={10} />
                  <p className="pl-1 text-xs">{d.genre}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-1 ml-1">
              <h1 className=" line-clamp-2  h-[36px] text-[10px] font-Nunito font-medium text-white ">
                {d.title} Lorem ipsum dolor sit
              </h1>
              <div className="px-1 flex flex-row items-center  ">
                <p className=" flex flex-row items-center font-Poppins text-sm">
                  <FaStar className="text-[#FFFF00]" size={10} />
                  <span className="pl-1 text-[10px]"> {d.rating}</span>
                </p>
                <p className=" ml-auto font-Poppins text-[8px] border border-[#ffffff71] rounded-full px-2">
                  {d.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-xl py-6   font-Raleway">Recommends</h1>
      <div className="flex flex-row flex-wrap gap-3 items-center py-3 w-full ">
        {trendData.slice(0, 7).map((d, i) => (
          <div
            key={i}
            className="mx-auto w-[120px] h-[200px] bg-black shadow shadow-[#ffffff44] rounded  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <div
              className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded"
              style={{ backgroundImage: `url(${d.image})` }}
            >
              <div className="absolute right-1 flex justify-center">
                <div className="flex flex-row items-center justify-between">
                  <FaFilm className="text-white" size={10} />
                  <p className="pl-1 text-xs">{d.genre}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-1 ml-1">
              <h1 className=" line-clamp-2  h-[36px] text-[10px] font-Nunito font-medium text-white ">
                {d.title} Lorem ipsum dolor sit
              </h1>
              <div className="px-1 flex flex-row items-center  ">
                <p className=" flex flex-row items-center font-Poppins text-sm">
                  <FaStar className="text-[#FFFF00]" size={10} />
                  <span className="pl-1 text-[10px]"> {d.rating}</span>
                </p>
                <p className=" ml-auto font-Poppins text-[8px] border border-[#ffffff71] rounded-full px-2">
                  {d.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Main;
