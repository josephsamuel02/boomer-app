import { MdStar } from "react-icons/md";

const Banner = () => {
  return (
    <div className=" px-2 md:px-6 w-full h-auto md:h-[560px] bg-[url('/images/strange-darling-poster.jpg')] bg-no-repeat bg-cover bg-white flex flex-col md:flex-row items-center">
      <div className=" m-1 w-auto h-[430px] md:h-[550px] flex flex-col md:flex-row items-center  ">
        <img
          src="/images/strange-darling-poster.jpg"
          alt="movie poster"
          className="mx-auto w-auto h-full object-cover"
        />
      </div>
      <div className=" mx-auto w-[99%] md:w-2/3 h-[98%] p-3 bg-[#b8b8b81a] backdrop-blur-md border-2 border-[#ffffff2a] rounded-lg ">
        <h3 className="text-xl md:text-4xl font-bold text-white font-Roboto uppercase ">
          Strange Darling
        </h3>
        <h3 className=" mt-4 text-xl font-bold text-white font-Raleway ">Synopsis</h3>
        <p className="text-sm  text-white font-nunito   ">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used as a placeholder before the final copy is available
        </p>
        <div className="mt-2 w-full h-auto flex flex-col md:flex-row py-2">
          <h3 className="text-md md:text-lg  text-white font-Roboto font-bold flex flex-row items-center ">
            <MdStar size={26} color="yellow" />
            7.2/10
            <span className="mx-1 md:mx-3 text-xs md:text-sm font-Nunito font-normal italic">
              300 Reviews
            </span>
          </h3>
          <h3 className="mx-3 text-sm md:text-md text-white px-3 py-1 font-Raleway text-center bg-[#7775753d] border border-[#ffffffd8]  rounded-2xl">
            Action | Thriller | Comedy
          </h3>
        </div>
        <div className="m-auto mt-5 w-full md:w-3/4 h-[250px] md:h-[210px] lg:h-[310px]  flex flex-col items-center  ">
          <iframe
            src="https://www.youtube.com/embed/aXwoeXetD4A?si=FaC_J9tzwTnHK_hq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full object-contain"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Banner;
// bg-[url('/images/strange-darling-poster.jpg')]
