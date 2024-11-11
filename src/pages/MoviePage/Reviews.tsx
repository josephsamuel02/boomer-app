/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { MdClose, MdStar } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { AddReview } from "../../Redux/Reviews";
import { Loading } from "../../components/Loading";
interface compData {
  reviewsData: any[];
  MyProfile: any;
}

const Reviews = ({ reviewsData, MyProfile }: compData) => {
  const dispatch = useDispatch<AppDispatch>();
  const Movie = useSelector((state: any) => state.Movies.movie?.data);

  const [reviewCard, setReviewCard] = useState(false);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const [newReview, setNewReview] = useState({
    movie_id: Movie.movie_id,
    user_id: MyProfile.user_id,
    profile_image: MyProfile.profile_img,
    user_name: MyProfile.user_name,
    rating: 0,
    comment: "",
  });

  const addReview = async () => {
    setLoading(true);
    console.log(newReview);

    await dispatch(AddReview(newReview));
    setLoading(false);
  };

  return (
    <div className="w-full h-auto px-6 pt-10 bg-black">
      <div className="mx-auto w-[97%] md:w-2/4 h-auto p-1 flex flex-row bg-[#0f0f0e] border border-[#a1a1a1a9] rounded-full">
        <div className="w-auto h-auto bg-white rounded-full">
          <img
            src={
              MyProfile.profile_img ? MyProfile.profile_img : "/images/person-svgrepo-com.svg"
            }
            alt="profile image"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
        </div>
        <div
          className="ml-3 my-auto w-[87%] md:w-10/12 h-[33px] md:h-[40px] flex flex-row items-center rounded-full bg-black"
          onClick={() => setReviewCard(true)}
        >
          <h3 className="mx-4 text-md text-[#888888f5] font-Roboto">Add Review</h3>
        </div>
      </div>
      <div className="mx-auto w-[97%] md:w-2/4">
        <p className="mx-4  pt-3 text-md font-thin text-white font-Nunito">
          {reviewsData.length} Reviews
        </p>
      </div>
      <div className="mx-auto w-[97%] md:w-2/4 h-auto">
        <div className=" mx-2 py-4 w-full h-auto">
          {reviewsData &&
            reviewsData.map((d, i) => (
              <div
                className="w-auto h-auto py-2  flex flex-col"
                key={i}
                style={{ display: `${!d.rating ? "none" : "contents"}` }}
              >
                <div className="w-auto h-auto py-2 flex flex-row items-center">
                  <img
                    src={d.profile_image}
                    alt="profile image"
                    className="w-10 h-10 md:w-10 md:h-10 rounded-full object-cover"
                  />
                  <h3 className=" mx-3 text-md font-Poppins text-[#d0d0d1]">{d.user_name}</h3>
                </div>
                <div className="w-full h-auto mt-2 mb-6 flex flex-col items-start border-b border-[#6b6a6a9a]">
                  <div className="w-auto h-auto flex flex-row items-center">
                    {Array.from({ length: d.rating }, (_, i) => (
                      <MdStar
                        color="yellow"
                        size={20}
                        className="text-yellow-600"
                        key={`star-${i}`}
                      />
                    ))}

                    <span className="ml-1 text-sm text-[#d0d0d1]"> {d.rating}/10</span>
                  </div>

                  <div className="w-auto h-auto my-2 ">
                    <p className="text-sm font-Nunito pb-2 text-[#d0d0d1]">{d.comment}</p>
                  </div>
                  <p className="text-xs font-Nunito pb-2 text-[#d0d0d1d2]">
                    {formatDistanceToNow(new Date(d.createdAt), { addSuffix: true })}
                  </p>
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
                  onClick={() => {
                    setRating(i + 1);
                    setNewReview((prev: any) => ({
                      ...prev,
                      rating: i + 1,
                    }));
                  }} // Setting rating to (i + 1) since rating is 1-indexed
                />
              ))}
              {Array.from({ length: 10 - rating }, (_, i) => (
                <FaRegStar
                  color="yellow"
                  size={28}
                  className="text-yellow-600"
                  key={`empty-${i}`}
                  onClick={() => {
                    setRating(rating + i + 1);
                    setNewReview((prev: any) => ({
                      ...prev,
                      rating: newReview.rating + i + 1,
                    }));
                  }}
                />
              ))}
              <h3 className="mx-2   text-lg text-[#fffffff5] font-Railway">{rating}/10</h3>
            </div>

            <textarea
              name="review"
              placeholder="Add Review"
              onChange={(e: any) =>
                setNewReview((prev: any) => ({ ...prev, comment: e.target.value }))
              }
              className=" resize-none mx-auto px-4 py-2 mt-2 flex w-3/4 h-[120px] bg-[#0e0e0ed5] border border-[#757474] rounded-lg"
            ></textarea>
            <input
              type="button"
              value="Post"
              onClick={addReview}
              className="flex mx-auto px-4 py-2 mt-5 w-3/4 bg-[#ffea2b] hover:bg-[#ffb52b] rounded-full text-black font-Poppins"
            />
          </div>
        </div>
      )}{" "}
      {loading == true && <Loading />}
    </div>
  );
};

export default Reviews;
