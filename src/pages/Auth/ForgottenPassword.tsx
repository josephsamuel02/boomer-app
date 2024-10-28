import PUBLIC_ROUTES from "../../utils/PublicRoutes";

const ForgottenPassword = () => {
  return (
    <div>
      <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716658008/e9fe678e1e7d7ec4bf9b8c82af3e8c0d_x0qu3f.png)] bg-cover bg-no-repeat bg-center h-screen w-screen flex flex-col items-center justify-center ">
        <div className="w-[380px] h-auto py-16 bg-[rgba(21,21,54,0.5)] bg-opacity-0 backdrop-filter backdrop-blur-sm rounded-xl flex flex-col justify-center items-center px-6  ">
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716659881/Layer_6_qlz3mp.png"
            className="w-[150px] h-[40px] mb-10 "
            alt=""
          />
          <form className="flex flex-col gap-3 items-center justify-center " action="">
            <div className="flex flex-row gap-4">
              <div className="w-3 h-2 bg-[#F25B38] rounded-full"></div>
              <div className="w-2 h-2 bg-[#EAEAEA] rounded-full"></div>
            </div>

            <label className="p-0.5 w-[300px] font-Poppins font-light text-white " htmlFor="">
              Forgotten Password
            </label>
            <input
              className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
              type="email"
              placeholder="Enter email address"
            />

            <button className="w-[300px] mt-3 p-3 bg-[#F25b38] hover:bg-[#df401d] font-Poppins font-light text-white border-none cursor-pointer rounded-lg">
              Reset Password
            </button>

            <span className="text-center text-white font-Poppins font-light text-xs mt-1">
              Back to
              <a href={PUBLIC_ROUTES.LOGIN} className="px-1 text-[#f76a32] font-bold">
                login
              </a>
              ?
            </span>
          </form>
        </div>

        <div className="mx-auto w-[1200px] h-[40px] mb-3 bg-[rgba(43,43,103,0.5)] bg-opacity-60 backdrop-filter backdrop-blur-md mt-10 rounded-full text-[12px] ">
          <div className="px-6 flex flex-row items-center justify-between p-2 text-white">
            <div className=" flex flex-row justify-center items-center gap-3">
              <img
                src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794458/Ellipse_10_zuglmt.png"
                alt=""
                className="w-7 h-7"
              />

              <p className=" font-light  font-Poppins outline-none text-sm">Grace Bamidele</p>
            </div>
            <div className="flex flex-row  font-light  font-Poppins  text-xs justify-center items-center gap-3">
              <div>Privacy</div>
              <div>Terms & Condition</div>
              <div>FAQ</div>
              <div>About</div>
              <img
                src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716657862/translate_cvxixm.png"
                className="w-6 h-6 rounded-full"
                alt=""
              />
              <div>Language</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPassword;
