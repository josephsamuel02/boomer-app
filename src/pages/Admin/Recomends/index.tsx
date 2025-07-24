import Sidenav from "../Dashboard/Sidenav";
import Nav from "../Nav";
import Movies from "./Movies";
import Recommends from "./Recommends";

const RecommendsPage = () => {
  return (
    <div className="w-full h-screen bg-[#01010b]  ">
      <Nav />

      <div className=" pt-16 w-full flex flex-row justify-items-center max-h-screen bg-[#01010b]  ">
        <Sidenav />

        <div className="flex flex-col items-center justify-start w-full bg-[#01010b]  max-h-screen overflow-y-auto ">
          <Recommends />
          <Movies />
        </div>
      </div>
    </div>
  );
};

export default RecommendsPage;
