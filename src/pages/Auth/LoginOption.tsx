const LoginOption = () => {
  return (
    <div>
      <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716657921/52f815ef99b62d1351fcc7c3db448e8b_ucxlyz.png)] bg-cover bg-no-repeat bg-center h-screen w-screen flex flex-col items-center justify-center ">
        <div className="w-[380px] h-[420px] bg-[rgba(43,43,103,0.5)] bg-opacity-0 backdrop-filter backdrop-blur-md rounded-xl flex flex-col justify-center items-center px-6  ">
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716659881/Layer_6_qlz3mp.png"
            className="w-[150px] h-[40px] mb-10  "
            alt="art-sony logo"
          />
          <form className="flex flex-col gap-3 items-center justify-center " action="">
            <div className="w-[310px] mt-0 p-1 bg-[white] text-black border-none cursor-pointer rounded-lg flex flex-row justify-normal">
              <img
                src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794710/google_iztwr2.png"
                alt="google logo"
                className="w-[25px] h-[25px] my-2 ml-2"
              />
              <div className="pl-[100px]">Google</div>
            </div>

            <button className="w-[300px] h-[] mt-3 p-3 bg-[#F25B38] text-white border-none cursor-pointer rounded-lg">
              Login
            </button>

            <span className="text-center text-white text-xs mt-1">
              Or sign in with <span className="text-[#8ac5c7]">Email ?</span>
            </span>
          </form>
        </div>

        <div className="mx-auto w-[1200px] h-[40px] bg-[rgba(43,43,103,0.5)] bg-opacity-0 backdrop-filter backdrop-blur-md mt-10 rounded-full text-[12px] ">
          <div className="flex flex-row items-center justify-between p-2 text-white">
            <div className="flex flex-row justify-center items-center gap-3">
              <div>
                <img
                  src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794458/Ellipse_10_zuglmt.png"
                  alt=""
                  className="w-7 h-7"
                />
              </div>
              <div>Grace Bamidele</div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
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

export default LoginOption;
