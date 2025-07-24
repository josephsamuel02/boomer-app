import Nav from "../Nav";
import Main from "./Main";
import Sidenav from "./Sidenav";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-[#01010b]  ">
      <Nav />

      <div className=" pt-16 w-full flex flex-row justify-items-center max-h-screen bg-[#01010b]  ">
        <Sidenav />

        <div className="flex flex-col items-center justify-start w-full bg-[#01010b]  max-h-screen overflow-y-auto ">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
