import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { MdClose, MdStar } from "react-icons/md";

const Reviews = () => {
  const [reviewCard, setReviewCard] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full h-auto px-6 mt-10 bg-black">
      <div className="w-full h-auto">
        <h3 className="mx-4 my-2 text-lg text-white font-Roboto">33 Reviews</h3>
      </div>
      <div className="mx-auto w-[97%] md:w-2/3 h-auto p-1 flex flex-row border-2 border-[#777676b7] rounded-full">
        <img
          src="/images/bob.jpg"
          alt="profile image"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="w-2/3 flex flex-row items-center" onClick={() => setReviewCard(true)}>
          <h3 className="mx-4 text-lg text-[#888888f5] font-Roboto">Add Review</h3>
        </div>
      </div>
      {reviewCard && (
        <div className="w-full h-full fixed left-0 right-0 bottom-0 top-20">
          <div className="absolute top-24 md:top-20 left-0 right-0 mx-auto w-[96%] md:w-2/3 h-[300px] border-2 border-[#757474] bg-[#0e0d0dd2] rounded-xl z-20">
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
