import { Routes, Route } from "react-router-dom";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ExplorePage from "./pages/ExplorePage.tsx";
import MoviePage from "./pages/MoviePage/index.tsx";
import Upload from "./pages/Upload/index.tsx";
import MyProfile from "./pages/Profile/MyProfile.tsx";

const App = () => {
  return (
    <div className="bg-[#01010b] text-white min-h-screen">
      <Routes>
        <Route path={PUBLIC_ROUTES.LANDING_PAGE} element={<Landing />} />
        <Route path={`${PUBLIC_ROUTES.EXPLORE_PAGE}`} element={<ExplorePage />} />
        {/* you can  use query string url?search= , genre= or type="series" in addition to explore page */}
        <Route path={`${PUBLIC_ROUTES.MOVIE}/:id`} element={<MoviePage />} />
        <Route path={PUBLIC_ROUTES.UPLOAD} element={<Upload />} />
        <Route path={PUBLIC_ROUTES.MY_PROFILE} element={<MyProfile />} />

        <Route path={PUBLIC_ROUTES.SIGNUP} element={<Signup />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
