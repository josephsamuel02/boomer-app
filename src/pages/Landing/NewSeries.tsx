


import { FaFilm, FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const NewSeries = () => {
  const trendData = [
    { title: "Spong Bob", rating: 9.0, image: "/images/bob.jpg", genre: "Comedy" },
    { title: "John Wick 4", rating: 9.3, image: "/images/jwk.jpg", genre: "Action" },
    { title: "Transformer", rating: 7.4, image: "/images/trans.jpg", genre: "Series" },
    { title: "Game of Thrones", rating: 6.8, image: "/images/game.jpg", genre: "Series" },
    { title: "True Blood", rating: 8.0, image: "/images/blood.jpg", genre: "Horror" },
    { title: "Spider Man", rating: 9.0, image: "/images/spider.jpg", genre: "Action" },
    { title: "Mr Bones", rating: 6.8, image: "/images/mrbones.jpeg", genre: "Comedy" },
    { title: "Avatar", rating: 8.0, image: "/images/avata.jpg", genre: "Animation" },
    { title: "Jumangi", rating: 9.0, image: "/images/juma.avif", genre: "Action" },
    { title: "Poco loco", rating: 6.8, image: "/images/poco.jpg", genre: "Animation" },
    { title: "Vampire's Diary", rating: 8.0, image: "/images/Vdiary.jpg", genre: "Horror" },
    { title: "Mr Bean", rating: 9.0, image: "/images/bean.jpg", genre: "Comedy" },
    { title: "Avengers", rating: 8.0, image: "/images/aveng.jpg", genre: "Thriller" },,
 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4; // Number of cards to display at once

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerPage >= trendData.length ? 0 : prevIndex + cardsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerPage < 0 ? trendData.length - cardsPerPage : prevIndex - cardsPerPage
    );
  };

  return (
    <div className="w-full h-auto mt-12 mx-auto flex flex-col">

      <div className="flex flex-col w-[1400px] mx-auto">

      <div className="flex flex-col mx-auto w-full justify-center">
        <h1 className="text-[27px]">New Series</h1>

        <div className="flex flex-col mt-3">
          <div className="relative flex flex-row items-center justify-between">
            {/* Previous Button */}
            <button
              className="absolute left-0 p-2 text-white bg-black rounded-full"
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>

            {/* NewSerires Cards */}
            <div className="flex flex-row justify-around w-full">
              {trendData
                .slice(currentIndex, currentIndex + cardsPerPage)
                .map((d, i) => (
                  <div
                    key={i}
                    className="w-[300px] h-[250px] bg-black border border-whitesmoke rounded-[10px] mx-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  >
                    <div
                      className="relative flex items-end justify-end w-full h-[60%] bg-cover bg-center rounded-[10px]"
                      style={{ backgroundImage: `url(${d.image})` }}
                    >
                      <div className="absolute flex ">
                        <div className="flex flex-row items-center pr-2">
                          <FaFilm className="text-white" />
                          <p className="pl-2">{d.genre}</p>
                        </div>
                        <button className="ml-2 mr-2 border border-whitesmoke rounded-[5px] w-[80px]">
                          ACBFQA
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col mt-4 ml-2">
                      <h1>{d.title}</h1>
                      <div className="flex flex-row items-center">
                        <FaStar className="text-[#F25B38]" />
                        <p className="pl-2">{d.rating}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Next Button */}
            <button
              className="absolute right-0 p-2 text-white bg-black rounded-full"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      </div>
     
    </div>
  );
};

export default NewSeries;










