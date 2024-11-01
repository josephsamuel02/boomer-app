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
    { title: "Card 1", description: "This is card 1", image: "/images/aveng.jpg" },
    { title: "Card 2", description: "This is card 2", image: "/images/bean.jpg" },
    { title: "Card 3", description: "This is card 3", image: "/images/prime.png" },
    { title: "Card 2", description: "This is card 2", image: "/images/juma.avif" },
    { title: "Card 3", description: "This is card 3", image: "/images/prime.png" },
    { title: "Card 1", description: "This is card 1", image: "/images/netflix.jpg" },
  ];

  return (
    <div className="  w-full h-auto mx-auto mt-24 ">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div className=" w-auto h-[150px] md:h-[200px]">
            <img
              src={card.image}
              alt={card.title}
              className="w-auto h-auto md:h-[200px] object-cover"
              key={index}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Adverts;
