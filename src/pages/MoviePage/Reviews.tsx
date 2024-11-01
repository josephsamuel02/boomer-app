import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { MdClose, MdStar } from "react-icons/md";

const Reviews = () => {
  const [reviewCard, setReviewCard] = useState(false);
  const [rating, setRating] = useState(0);

  const Reviews = [
    {
      profile_img: "/images/avata.jpg",
      user_name: "Etzel",
      ratting: 8,
      review: "",
    },
    {
      profile_img: "/images/poco.jpg",
      user_name: "Afro_man",
      ratting: 4,
      review: "   content. Lorem   a placeholder before the final copy is available",
    },
    {
      profile_img: "/images/aquam.jpg",
      user_name: "Maleficent",
      ratting: 6,
      review:
        "    content. Lorem ipsum may be used as a   copy is available  content. Lorem ipsum may be used as a   copy is available  content. Lorem ipsum may be used as a   copy is available content. Lorem ipsum may be used as a   copy is available",
    },
    {
      profile_img: "/images/bob.jpg",
      user_name: "daniel",
      ratting: 9,
      review:
        "   content. Lorem ipsum may be used as a placeholder before the final copy is available",
    },
    {
      profile_img: "/images/game.jpg",
      user_name: "me_and_i",
      ratting: 5,
      review: "   content. Lorem ipsum may   before the final copy is available",
    },
    {
      profile_img: "/images/juma.avif",
      user_name: "@its_layo",
      ratting: 7,
      review: "   content. Lorem ipsum may be used as   is available",
    },
    {
      profile_img: "/images/juda.jpg",
      user_name: "Alex",
      ratting: 3,
      review:
        " content. Lorem ipsum may be used as a placeholder before the final copy is available",
    },
  ];
  const ReviewsLength = Reviews.filter((val) => val.review !== "");
  return (
    <div className="w-full h-auto px-6 pt-10 bg-black">
      <div className="mx-auto w-[97%] md:w-2/4 h-auto p-1 flex flex-row bg-[#0f0f0e] border border-[#a1a1a1a9] rounded-full">
        <img
          src="/images/bob.jpg"
          alt="profile image"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        />
        <div
          className="ml-3 my-auto w-[87%] md:w-10/12 h-[33px] md:h-[40px] flex flex-row items-center rounded-full bg-black"
          onClick={() => setReviewCard(true)}
        >
          <h3 className="mx-4 text-md text-[#888888f5] font-Roboto">Add Review</h3>
        </div>
      </div>
      <div className="mx-auto w-[97%] md:w-2/4">
        <p className="mx-4  pt-3 text-md font-thin text-white font-Nunito">
          {ReviewsLength.length} Reviews
        </p>
      </div>
      <div className="mx-auto w-[97%] md:w-2/4 h-auto">
        <div className=" mx-2 py-4 w-full h-auto">
          {Reviews.map((d, i) => (
            <div
              className="w-auto h-auto py-2  flex flex-col"
              key={i}
              style={{ display: `${d.review == "" ? "none" : "contents"}` }}
            >
              <div className="w-auto h-auto py-2 flex flex-row items-center">
                <img
                  src={d.profile_img}
                  alt="profile image"
                  className="w-10 h-10 md:w-10 md:h-10 rounded-full object-cover"
                />
                <h3 className=" mx-3 text-md font-Poppins text-[#d0d0d1]">{d.user_name}</h3>
              </div>
              <div className="w-full h-auto mt-2 mb-6 flex flex-col items-start border-b border-[#6b6a6a9a]">
                <div className="w-auto h-auto flex flex-row items-center">
                  {Array.from({ length: d.ratting }, (_, i) => (
                    <MdStar
                      color="yellow"
                      size={20}
                      className="text-yellow-600"
                      key={`star-${i}`}
                    />
                  ))}

                  <span className="ml-1 text-sm text-[#d0d0d1]"> {d.ratting}/10</span>
                </div>

                <div className="w-auto h-auto my-2 ">
                  <p className="text-sm font-Nunito pb-2 text-[#d0d0d1]">{d.review}</p>
                </div>
                <p className="text-xs font-Nunito pb-2 text-[#d0d0d1d2]">3 hr ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {reviewCard && (
        <div className="w-full h-full fixed left-0 right-0 bottom-0 top-20">
          <div className="absolute top-24 md:top-20 left-0 right-0 mx-auto w-[96%] md:w-[550px] h-[300px] border-2 border-[#757474] bg-[#0e0d0dd2] rounded-xl z-20">
            <h3
              className="w-7 ml-auto flex justify-end m-1.5 "
              onClick={() => setReviewCard(false)}
            >
              <MdClose color="white" size={30} />
            </h3>

            <h3 className="mx-auto w-3/4 text-lg text-[#fffffff5] font-Railway">
              What do you rate this Movie
            </h3>

            <div className="mx-auto w-3/4 flex flex-row items-center">
              {Array.from({ length: rating }, (_, i) => (
                <MdStar
                  color="yellow"
                  size={28}
                  className="text-yellow-600"
                  key={`filled-${i}`}
                  onClick={() => setRating(i + 1)} // Setting rating to (i + 1) since rating is 1-indexed
                />
              ))}
              {Array.from({ length: 10 - rating }, (_, i) => (
                <FaRegStar
                  color="yellow"
                  size={28}
                  className="text-yellow-600"
                  key={`empty-${i}`}
                  onClick={() => setRating(rating + i + 1)} // Setting rating to current filled count + (i + 1)
                />
              ))}
              <h3 className="mx-2   text-lg text-[#fffffff5] font-Railway">{rating}/10</h3>
            </div>

            <textarea
              name="review"
              placeholder="Add Review"
              className=" resize-none mx-auto px-4 py-2 mt-2 flex w-3/4 h-[120px] bg-[#0e0e0ed5] border border-[#757474] rounded-lg"
            ></textarea>
            <input
              type="button"
              value="Post"
              className="flex mx-auto px-4 py-2 mt-5 w-3/4 bg-[#ffea2b] hover:bg-[#ffb52b] rounded-full text-black font-Poppins"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
