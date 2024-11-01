/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, useState } from "react";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useDispatch, useSelector } from "react-redux";
import { UserSignup } from "../../Redux/AuthSlice";
import { AppDispatch } from "../../Redux/store";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";
import Nav from "../../components/Navbar";

function Signup() {
  const dispatch = useDispatch<AppDispatch>();
  const Navigate = useNavigate();
  const LogInResponse = useSelector((state: any) => state.Auth.user.status);
  const status = useSelector((state: any) => state.Auth.status);

  const [loading, setLoading] = useState(status);
  const [passwordCheck, setPasswordCheck] = useState(status);
  const [signupData, setSignupData] = useState<object | any>({
    user_name: "",
    email: "",
    password: "",
  });

  const SignupAction = (e: MouseEvent) => {
    e.preventDefault();

    if (passwordCheck !== signupData.password) {
      return alert("Password didn't match");
    }

    dispatch(UserSignup(signupData));
    setLoading(true);

    setTimeout(() => {
      if (LogInResponse === 200) {
        setLoading(false);
        // window.location.assign;
        Navigate(PUBLIC_ROUTES.LANDING_PAGE);
      }
    }, 1000);
    // console.log(setSignupData);
  };
  return (
    <div className="bg-[#070503] h-screen w-screen md:pt-20 flex flex-col items-center justify-center">
      <Nav />
      <div className="w-[380px] h-auto py-8 bg-black border border-[#fff8]  bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl flex flex-col justify-center items-center px-6  ">
        {/* <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716659881/Layer_6_qlz3mp.png"
          className="w-[150px] h-[40px] mb-10"
          alt="Logo"
        /> */}
        <h3 className="text-3xl font-Raleway font-bold">BOOMER</h3>
        <form className="flex flex-col gap-3 items-center justify-center " action="">
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setSignupData((prev: object) => ({ ...prev, user_name: e.target.value }))
            }
          />
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setSignupData((prev: object) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="password"
            placeholder="Password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="password"
            placeholder="confirm Password"
            onChange={(e) =>
              setSignupData((prev: object) => ({ ...prev, password: e.target.value }))
            }
          />
          <button
            onClick={(e) => SignupAction(e)}
            className="w-[300px] mt-3 p-3 bg-[#F25b38] hover:bg-[#f3512c] text-white font-light font-Raleway border-none cursor-pointer rounded-lg"
          >
            Create Account
          </button>
          <span className="text-center font-Poppins text-[9px] font-light text-white text-xs mt-1 space-x-1 w-[290px] ">
            By creating account, you hereby acknowledge and accept Boomer's Terms and service
            Policy
          </span>
          <span className="text-center  text-white   font-Poppins text-[12px]  mt-1">
            Or
            <span className="px-1 text-[#f76a32] font-bold">signup</span>
            with
          </span>
        </form>

        <div className="flex flex-row  items-center px-2  w-[100px] rounded  mt-2 bg-white cursor-pointer">
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794710/google_iztwr2.png"
            alt="Google"
            className="w-5 h-5 object-cover rounded-full bg-white"
          />
          <p className="text-lg font-Raleway font-bold text-sky-950">oogle</p>
        </div>
        <span className="text-center py-5 font-Poppins text-[12px] font-light text-white text-xs mt-1.5">
          Already have an Account?
          <a href={PUBLIC_ROUTES.LOGIN} className="px-2 text-[#f76a32] font-bold">
            Login
          </a>
        </span>
      </div>

      {loading == "loading" && <Loading />}
    </div>
  );
}

export default Signup;
