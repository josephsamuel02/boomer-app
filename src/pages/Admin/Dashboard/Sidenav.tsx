import {
  MdCheckCircleOutline,
  MdManageAccounts,
  MdMovieEdit,
  MdOutlineDashboard,
} from "react-icons/md";

const Sidenav = () => {
  return (
    <div className=" w-[80px] md:w-[240px]  h-screen p-4 bg-[#010107] border-r-2 border-gray-800">
      <div className="w-full h-full pt-5 flex flex-col  ">
        <h2 className="hidden md:flex text-lg font-bold text-white font-Nunito mb-4">
          Admin Dashboard
        </h2>
        <ul className="w-full space-y-3">
          <li className="flex flex-row items-center text-white p-2 hover:text-gray-400 hover:bg-[#0f0a24] cursor-pointer ">
            <MdOutlineDashboard className="text-gray-600 text-[30px]" />
            <span className="hidden md:flex ml-2">Dashboard</span>
          </li>
          <li className="flex flex-row items-center text-white p-2 hover:text-gray-400 hover:bg-[#0f0a24] cursor-pointer ">
            <MdMovieEdit className="text-gray-600 text-[30px]" />
            <span className="hidden md:flex ml-2">Edit Movies</span>
          </li>

          <li className="flex flex-row items-center text-white p-2 hover:text-gray-400 hover:bg-[#0f0a24] cursor-pointer ">
            <MdCheckCircleOutline className="text-gray-600 text-[30px]" />
            <span className="hidden md:flex ml-2">Recommends</span>
          </li>

          <li className="flex flex-row items-center text-white p-2 hover:text-gray-400 hover:bg-[#0f0a24] cursor-pointer ">
            <MdManageAccounts className="text-gray-600 text-[30px]" />
            <span className="hidden md:flex ml-2"> Manage Users</span>
          </li>
          <li className="flex flex-row items-center text-white p-2 hover:text-gray-400 hover:bg-[#0f0a24] cursor-pointer ">
            <MdManageAccounts className="text-gray-600 text-[30px]" />
            <span className="hidden md:flex ml-2"> MdOutlineSettings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
