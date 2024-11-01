import Nav from "../../components/Navbar";

const MyProfile = () => {
  return (
    <div className="w-full h-full bg-black pt-20">
      <Nav />
      <div className="fixed left-0 right-0 py-6  mt-6 mx-auto w-3/4 h-auto flex flex-col items-center border border-[#ffffff3d]  shadow-xs shadow-slate-200 rounded-lg ">
        <img
          src="/images/aveng.jpg"
          alt=""
          className="mx-auto w-32 h-32 rounded-full object-cover"
        />
        <h3 className="pb-6 text-lg text-primary font-Poppins  ">@Easy_man</h3>
      </div>
    </div>
  );
};

export default MyProfile;
