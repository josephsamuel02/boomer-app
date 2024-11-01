/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdEdit } from "react-icons/md";
import Nav from "../../components/Navbar";
import { useRef, useState } from "react";

const MyProfile = () => {
  const [image, setImage] = useState("/images/aveng.jpg");
  const [userName, setUserName] = useState("@Easy_man");
  const [editName, setEditName] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="w-full h-full bg-black pt-20">
      <Nav />
      <div className=" fixed left-0 right-0 py-6  mt-6 mx-auto w-3/4 h-auto flex flex-col items-center border border-[#ffffff3d]  shadow-xs shadow-slate-200 rounded-lg ">
        <div className=" relative w-32 h-32 flex ">
          <img
            src={image}
            alt="Profile"
            className="mx-auto w-32 h-32 rounded-full object-cover"
          />
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
              <h3 className="m-auto text-lg text-primary font-Poppins ">{userName}</h3>

              <MdEdit
                size={20}
                className="ml-1 text-[#CD3C21] hover:text-[#923f30] cursor-pointer"
                onClick={() => setEditName(true)}
              />
            </>
          )}
          <input
            type="text"
            defaultValue={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={`w-full p-1 text-lg text-center bg-black border border-red-500 rounded-md focus:outline-none ${
              editName == false ? "hidden" : "flex"
            }`}
          />
        </div>

        <input
          type="button"
          value={"Save"}
          className=" mx-auto bottom-2 w-[300px] h-auto text-white font-Poppins py-2 rounded-full bg-primary"
        />
      </div>
    </div>
  );
};

export default MyProfile;
