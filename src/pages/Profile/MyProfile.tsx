/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdEdit } from "react-icons/md";
import Nav from "../../components/Navbar";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearState, GetMyProfile, UpdateMyProfile } from "../../Redux/AuthSlice";
import { AppDispatch } from "../../Redux/store";
import axios from "axios";
import { Loading } from "../../components/Loading";
// GetMyProfile

const MyProfile = () => {
  const MyProfile = useSelector((state: any) => state.Auth.myProfile.data);

  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState(MyProfile);
  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [showSubmitBTN, setShowSubmitBTN] = useState(false);
  const [editName, setEditName] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [updateData, setUpdateData] = useState({
    user_id: user?.user_id,
    profile_img: user?.profile_img,
    user_name: user?.user_name,
  });

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setShowSubmitBTN(true);
    }
  };

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const uploadImage = async (): Promise<string | null> => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "my_upload_preset");
      formData.append("cloud_name", "promotion-army");
      formData.append("folder", "Boomer");

      try {
        const response = await axios.post(import.meta.env.VITE_CLOUDINARY_BASE_URL, formData);
        const imageUrl = response.data.secure_url;
        console.log("Uploaded Image URL:", imageUrl);
        return imageUrl;
      } catch (err) {
        console.error("Error uploading image:", err);
        return null;
      }
    }
    return null;
  };

  const updateProfile = async () => {
    console.log(updateData);
    setLoading(true);

    const uploadedImageUrl = await uploadImage();

    if (uploadedImageUrl) {
      const newData = { ...updateData, profile_img: uploadedImageUrl };
      setUpdateData(newData);
      await dispatch(UpdateMyProfile(newData));
    } else {
      await dispatch(UpdateMyProfile(updateData));
    }

    setLoading(false);
    setEditName(false);
  };

  // useEffect(() => {
  // }, [editName]);

  useEffect(() => {
    const access = localStorage.getItem("boomer_token");
    if (!access) {
      window.location.replace("/");
    }

    if (!user?.user_id) {
      dispatch(GetMyProfile());
    }
    setUser(MyProfile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MyProfile]);
  return (
    <div className="w-full h-full bg-black pt-20">
      <Nav />
      <div className=" fixed left-0 right-0 py-6  mt-6 mx-auto w-3/4 h-auto flex flex-col items-center border border-[#ffffff3d]  shadow-xs shadow-slate-200 rounded-lg ">
        <div className=" relative w-32 h-32 flex ">
          {user?.profile_img && (
            <img
              src={image ? URL.createObjectURL(image) : user.profile_img}
              alt="Profile"
              className="mx-auto w-32 h-32 rounded-full object-cover"
            />
          )}
          {!user?.profile_img && (
            <div className=" w-28 h-28   bg-white rounded-full flex">
              <img
                src={image ? URL.createObjectURL(image) : "/images/person-svgrepo-com.svg"}
                alt="Profile"
                className="m-auto w-28 h-28 rounded-full object-cover"
              />
            </div>
          )}

          {/* Edit icon to trigger file upload */}
          <h3
            className="absolute right-3 bottom-3  text-[#CD3C21] hover:text-[#923f30] z-10 cursor-pointer"
            onClick={handleEditClick}
          >
            <MdEdit size={40} />
          </h3>
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className=" py-4 flex flex-row items-center ">
          {!editName && (
            <>
              <h3 className="m-auto text-lg text-primary font-Poppins ">
                @{user?.user_name ? user?.user_name : updateData.user_name}
              </h3>

              <MdEdit
                size={20}
                className="ml-1 text-[#CD3C21] hover:text-[#923f30] cursor-pointer"
                onClick={() => setEditName(true)}
              />
            </>
          )}
          <input
            type="text"
            defaultValue={user?.user_name ? user?.user_name : ""}
            onChange={(e) => {
              setUpdateData((prev) => ({ ...prev, user_name: e.target.value }));
              setShowSubmitBTN(true);
            }}
            className={`w-full p-1 text-lg text-center bg-black border border-red-500 rounded-md focus:outline-none ${
              editName == false ? "hidden" : "flex"
            }`}
          />
        </div>

        {showSubmitBTN && (
          <input
            type="button"
            value={"Save"}
            onClick={() => updateProfile()}
            className=" mx-auto bottom-2 w-[85%] md:w-[300px] h-auto text-white font-Poppins py-2 rounded-full bg-primary hover:bg-[#e96345] cursor-pointer"
          />
        )}

        <div className="  py-6  mt-6 mx-auto w-3/4 h-auto flex flex-col items-center   shadow-xs shadow-slate-200 rounded-lg ">
          <button
            className="mx-6 px-10 py-3 text-black bg-white hover:bg-slate-200 rounded-full"
            onClick={() => {
              dispatch(clearState());
              localStorage.removeItem("boomer_token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {loading == true && <Loading />}
    </div>
  );
};

export default MyProfile;
