import { FaFilm, FaStar } from "react-icons/fa";

const Recommends = () => {
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
    <div className="w-full h-auto mt-16 px-4 md:px-6 flex flex-col">
      <div className="flex flex-col mx-auto w-full justify-center">
        <h1 className="text-lg md:text-3xl py-6 md:pb-auto   font-Raleway">Recommends</h1>
        <div className="flex flex-row py-3 w-full overflow-x-scroll">
          <div className="flex flex-row  h-[270px] w-auto  mr-36 ">
            {trendData.map((d, i) => (
              <div
                key={i}
                className="w-[200px] h-[260px] bg-black shadow shadow-[#ffffff44] rounded mx-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <div
                  className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${d.image})` }}
                >
                  <div className="absolute right-1 flex justify-center">
                    <div className="flex flex-row items-center justify-between">
                      <FaFilm className="text-white" />
                      <p className="pl-3">{d.genre}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-2 ml-2">
                  <h1 className=" line-clamp-2  h-[36px]   text-[12px] font-Raleway font-medium text-white ">
                    {d.title} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </h1>
                  <div className="px-1 flex flex-row items-center my-2 ">
                    <p className="  flex flex-row items-center font-Poppins text-sm">
                      <FaStar className="text-[#FFFF00]" />
                      <span className="pl-1 text-sm"> {d.rating}</span>
                    </p>
                    <p className=" ml-auto font-Poppins text-xs border border-[#ffffff71] rounded-full px-2">
                      {d.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommends;

// Recommends
