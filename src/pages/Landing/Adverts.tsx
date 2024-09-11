import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Adverts = () => {
  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides infinitely
    speed: 500, // Slide transition speed (in ms)
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1, // Number of slides to scroll on slide change
    autoplay: true, // Autoplay slides
    autoplaySpeed: 3000, // Time between each slide in ms (3 seconds)
    arrows: false, // Remove next/prev arrows
  };

  const cardData = [
    { title: "Card 1", description: "This is card 1", image: "/images/netflix.jpg" },
    { title: "Card 2", description: "This is card 2", image: "/images/dstv.jpg" },
    { title: "Card 3", description: "This is card 3", image: "/images/prime.png" },
    { title: "Card 2", description: "This is card 2", image: "/images/dstv.jpg" },
    { title: "Card 3", description: "This is card 3", image: "/images/prime.png" },
    { title: "Card 1", description: "This is card 1", image: "/images/netflix.jpg" },
  ];

  return (
    <div className="container mx-auto mt-24">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="p-4">
            <div className="p-6 h-[200px] flex flex-col justify-between">
              <img src={card.image} alt={card.title} className="w-full h-full  mb-4 object-cover" />
             
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Adverts;
