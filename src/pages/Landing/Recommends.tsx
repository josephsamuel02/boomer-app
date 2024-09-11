





import { FaFilm, FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const Recommends = () => {
  const trendData = [
    { title: "Avengers", rating: 8.0, image: "/images/aveng.jpg", genre: "Thriller" },
    { title: "Spong Bob", rating: 9.0, image: "/images/bob.jpg", genre: "Comedy" },
    { title: "John Wick 4", rating: 9.3, image: "/images/jwk.jpg", genre: "Action" },
    { title: "Aquaman", rating: 8.5, image: "/images/aquam.jpg", genre: "Drama" },
    { title: "Transformer", rating: 7.4, image: "public/images/trans.jpg", genre: "Series" },
    { title: "Game of Thrones", rating: 6.8, image: "/images/game.jpg", genre: "Series" },
    { title: "True Blood", rating: 8.0, image: "/images/blood.jpg", genre: "Horror" },
    { title: "Spider Man", rating: 9.0, image: "/images/spider.jpg", genre: "Action" },
    { title: "Mr Bones", rating: 6.8, image: "/images/mrbones.jpeg", genre: "Comedy" },
    { title: "Avatar", rating: 8.0, image: "/images/avata.jpg", genre: "Animation" },
    { title: "Jumangi", rating: 9.0, image: "/images/juma.avif", genre: "Action" },
    // Add more movies if needed
    { title: "Poco loco", rating: 6.8, image: "/images/poco.jpg", genre: "Animation" },
    { title: "Vampire's Diary", rating: 8.0, image: "/images/Vdiary.jpg", genre: "Horror" },
    { title: "Mr Bean", rating: 9.0, image: "/images/bean.jpg", genre: "Comedy" },
    { title: "Avengers", rating: 8.0, image: "/images/aveng.jpg", genre: "Thriller" },
    { title: "Spong Bob", rating: 9.0, image: "/images/bob.jpg", genre: "Comedy" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 6; // Number of cards to display at once

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

     

       
       
        
       

        <div className="flex flex-col mt-6 w-[1360px] mx-auto  justify-center]">
        <h1 className="text-[27px] ml-3">Recommends</h1>
          <div className="relative flex flex-row items-center justify-between mt-3">
            {/* Previous Button */}
            <button
              className="absolute left-0 p-2 text-white bg-black rounded-full"
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>

            {/* Trending Cards */}
            <div className="flex flex-row justify-around mx-auto">
              {trendData
                .slice(currentIndex, currentIndex + cardsPerPage)
                .map((d, i) => (
                  <div
                    key={i}
                    className="w-[200px] h-[260px] bg-black border border-customOrange rounded-[10px] mx-2  bg-black  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  >
                    <div
                      className="relative flex items-end justify-center w-full h-[70%] bg-cover bg-center rounded-[10px]"
                      style={{ backgroundImage: `url(${d.image})` }}
                    >
                      <div className="absolute flex justify-center">
                        <div className="flex flex-row items-center justify-between">
                          <FaFilm className="text-white" />
                          <p className="pl-3">{d.genre}</p>
                        </div>
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
  );
};

export default Recommends;


// Recommends