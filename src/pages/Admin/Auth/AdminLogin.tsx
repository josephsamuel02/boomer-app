/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import PUBLIC_ROUTES from "../../../utils/PublicRoutes";
import { clearState, LoginUser } from "../../../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../Redux/store";
import { Loading } from "../../../components/Loading";
import { useNavigate } from "react-router-dom";
import Nav from "../../../components/Navbar";

const AdminLogin: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const Navigate = useNavigate();
  const LogInResponse = useSelector((state: any) => state.Auth.auth.status);
  const status = useSelector((state: any) => state.Auth.status);

  const [loading, setLoading] = useState(status);
  const [loginData, setLoginData] = useState<any>({
    email: "",
    password: "",
  });

  const LoginAction = async (e: MouseEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      dispatch(LoginUser(loginData));

      setTimeout(() => {
        if (LogInResponse === 200) {
          setLoading(false);
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          // window.location.assign("/");
          Navigate(PUBLIC_ROUTES.LANDING_PAGE);
        }
      }, 1000);
    } catch (error) {
      return { error: `${error}, message:unable to login` };
    }
  };

  useEffect(() => {
    if (LogInResponse === 200) {
      setLoading(false);
      Navigate(PUBLIC_ROUTES.LANDING_PAGE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LogInResponse]);

  useEffect(() => {
    dispatch(clearState());
    setLoading(false);
    localStorage.removeItem("boomer_token");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <form className="flex flex-col gap-3 items-center justify-center" action="">
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent rounded border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginData((prev: object) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            className="p-0.5 w-[300px] my-2 bg-transparent rounded border-b border-white font-light placeholder-white font-Raleway outline-none text-sm focus:outline-none text-white underline-offset-1 "
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData((prev: object) => ({ ...prev, password: e.target.value }))
            }
          />
          <button
            onClick={(e: any) => LoginAction(e)}
            className="w-[300px] mt-3 p-3 font-Poppins text-[10px] font-light  text-xs   bg-[#F25b38] hover:bg-[#f5513b] backdrop-filter backdrop-blur-md text-white border-none cursor-pointer rounded-lg"
          >
            Login
          </button>
          <div className="flex flex-row py-3 text-white items-center w-full  ">
            <div className="flex flex-row items-center justify-items-center">
              <input
                type="checkbox"
                className="m-0 h-[11px]   accent-[#f25b38] bg-[#f25b38] mr-1"
              />
              <p className="m-auto text-sm font-Poppins text-[10px] font-light text-white  mt-1">
                Remember me
              </p>
              <p className="text-sm font-Poppins text-[10px] font-light text-white   mt-1 mx-auto text-wrap pl-16 text-right ">
                Forgotten Password?
              </p>
            </div>
          </div>
          <span className="text-center  text-white   font-Poppins text-[12px]  mt-1">
            Or
            <span className="px-1 text-[#f76a32] font-bold">signup</span>
            with
          </span>
        </form>
        <div className="flex flex-row  items-center px-2 justify-items-center w-[100px] rounded mt-2 bg-white cursor-pointer">
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1716794710/google_iztwr2.png"
            alt="Google"
            className="w-5 h-5 object-cover rounded-full bg-white"
          />
          <p className="text-lg font-Raleway font-bold text-sky-950">oogle</p>
        </div>
        <span className="text-center py-3 font-Poppins text-[12px] font-light text-white text-xs mt-1.5">
          Don't have an Account?
          <a href={PUBLIC_ROUTES.SIGNUP} className="px-2 text-[#f76a32] font-bold">
            Signup
          </a>
          for free.
        </span>
      </div>
      {loading == true && <Loading />}
    </div>
  );
};

export default AdminLogin;
