import {
  MdCheckCircleOutline,
  MdManageAccounts,
  MdMovieEdit,
  MdOutlineDashboard,
  MdOutlineSettings,
} from "react-icons/md";
interface SidenavProps {
  setMenu: (menu: string) => void;
  menu: string;
}

const Sidenav: React.FC<SidenavProps> = ({ setMenu, menu }) => {
  return (
    <div className="mx-auto items-center justify-items-center w-[70px] md:w-[240px]  h-auto p-2  md:p-4 bg-[#010107] border-r-2 border-gray-800">
      <div className="w-full h-full pt-5 flex flex-col  ">
        <h2 className="hidden md:flex text-lg font-bold text-white font-Nunito mb-4">
          Admin Dashboard
        </h2>
        <ul className="w-full space-y-3">
          <li
            // href={PUBLIC_ROUTES.ADMIN_DASHBOARD}
            onClick={() => setMenu("dashboard")}
            className="flex flex-row items-center text-white p-2 hover:text-gray-400 hover:bg-[#0f0a24] rounded cursor-pointer "
            style={{ background: menu == "dashboard" ? "#0f0a24" : "transparent" }}
          >
            <MdOutlineDashboard className="text-gray-600 text-[30px]" />
            <span className="hidden md:flex ml-2">Dashboard</span>
          </li>
          <li
            // href={PUBLIC_ROUTES.ADMIN_EDIT_MOVIE}
            onClick={() => setMenu("edit")}
            className="flex flex-row items-center text-white p-2 hover:text-gray-400 hover:bg-[#0f0a24]  rounded cursor-pointer "
            style={{ background: menu == "edit" ? "#0f0a24" : "transparent" }}
          >
            <MdMovieEdit className="text-gray-600 text-[30px]" />
            <span className="hidden md:flex ml-2">Edit Movies</span>
          </li>

          <li
            className="flex flex-row items-center text-white p-2 hover:text-gray-400 hover:bg-[#0f0a24]  rounded cursor-pointer "
            style={{ background: menu == "recommends" ? "#0f0a24" : "transparent" }}
            onClick={() => setMenu("recommends")}
          >
            <MdCheckCircleOutline className="text-gray-600 text-[30px]" />
            <span className="hidden md:flex ml-2">Recommends</span>
          </li>

          <li
            className="flex flex-row items-center text-white p-2 hover:text-gray-400 hover:bg-[#0f0a24]  rounded cursor-pointer "
            style={{ background: menu == "manageUsers" ? "#0f0a24" : "transparent" }}
            onClick={() => setMenu("manageUsers")}
          >
            <MdManageAccounts className="text-gray-600 text-[30px]" />
            <span className="hidden md:flex ml-2"> Manage Users</span>
          </li>
          <li
            className="flex flex-row items-center text-white p-2 hover:text-gray-400 hover:bg-[#0f0a24]  rounded cursor-pointer "
            onClick={() => setMenu("settings")}
            style={{ background: menu == "settings" ? "#0f0a24" : "transparent" }}
          >
            <MdOutlineSettings className="text-gray-600 text-[30px]" />
            <span className="hidden md:flex ml-2"> Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
