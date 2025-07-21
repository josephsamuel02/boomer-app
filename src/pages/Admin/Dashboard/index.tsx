import { useState } from "react";
import EditMovie from "../EditMovie";
import Nav from "../Nav";
import Main from "./Main";
import Sidenav from "./Sidenav";

const Dashboard = () => {
  const [menu, setMenu] = useState("dashboard");

  return (
    <div className="w-full h-screen bg-[#01010b]  ">
      <Nav />

      <div className=" pt-16 w-full flex flex-row justify-items-center max-h-screen bg-[#01010b]  ">
        <Sidenav setMenu={setMenu} menu={menu} />

        <div className="flex flex-col items-center justify-start w-full bg-[#01010b]  max-h-screen overflow-y-auto ">
          {menu == "dashboard" && <Main />}
          {menu == "edit" && <EditMovie />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
