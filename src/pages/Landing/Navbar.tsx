import { useState } from "react";

const Nav = () => {
  const [auth, setAuth] = useState(false);
  const Menu = [
    { title: "Home", url: "" },
    { title: "Genre", url: "" },
    { title: "Top Picks", url: "" },
    { title: "Help", url: "" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex flex-row w-full h-auto px-4 py-4 shadow-md bg-white items-center z-20">
        {/* Logo */}
        <a href="" className="flex-shrink-0 ml-3">
          BOOMER
          <img src="" alt="" />
        </a>

        {/* Centered Menu */}
        <div className="mx-auto hidden md:flex flex-grow justify-center items-center space-x-8">
          {Menu.map((i, n) => (
            <p
              className={`text-[16px] px-2 font-roboto cursor-pointer hover:text-green-800 ${
                i.title === "Expert Categories" || i.title === "Faq"
                  ? "text-[#007F00]"
                  : "text-whitesmoke"
              }`}
              key={n}
            >
              {i.title}
            </p>
          ))}
        </div>

        {/* Sign Up Button aligned to the right */}
        <div className="flex-shrink-0 mr-3">
          <p className="text-[12px] md:text-[16px] text-white text-center px-3 md:px-10 py-1.5 md:py-2 bg-[#F25B38] hover:bg-[#efa898] font-roboto font-semibold rounded-full cursor-pointer">
            Sign Up
          </p>
        </div>
      </div>
    </>
  );
};

export default Nav;

