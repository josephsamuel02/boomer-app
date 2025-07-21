import Nav from "../Nav";
import Main from "./Main";
import Sidenav from "./Sidenav";

const Dashboard = () => {
  return (
    <div className="w-full   h-auto bg-black">
      <Nav />

      <div className="pt-20 w-full h-auto flex flex-row   bg-[#01010b]">
        <Sidenav />

        <div className="flex flex-col ">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
