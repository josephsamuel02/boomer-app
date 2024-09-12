import { Routes, Route } from "react-router-dom";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div className="bg-[#01010b] text-white min-h-screen">
      <Routes>
        <Route path={PUBLIC_ROUTES.LANDING_PAGE} element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
