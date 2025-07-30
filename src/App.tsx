/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route } from "react-router-dom";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ExplorePage from "./pages/ExplorePage.tsx";
import MoviePage from "./pages/MoviePage/index.tsx";
import Upload from "./pages/Upload/index.tsx";
import MyProfile from "./pages/Profile/MyProfile.tsx";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { clearState } from "./Redux/AuthSlice.ts";
import AdminLogin from "./pages/Admin/Auth/AdminLogin.tsx";
import Dashboard from "./pages/Admin/Dashboard/index.tsx";
import EditMovie from "./pages/Admin/EditMovie/index.tsx";
import AdminMoviePage from "./pages/Admin/MoviePage/index.tsx";
import RecommendsPage from "./pages/Admin/Recomends/index.tsx";
import AdminExplorePage from "./pages/Admin/ExplorePage.tsx/index.tsx";
import { useEffect } from "react";
import AboutUs from "./pages/WebsiteInfo/About.tsx";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkTokenExpiry = () => {
      const token = localStorage.getItem("boomer_token");
      if (token) {
        try {
          const decoded: any = jwtDecode(token);
          const expiryTime = decoded.exp * 1000;
          const currentTime = Date.now();

          if (currentTime > expiryTime) {
            dispatch(clearState());
            localStorage.removeItem("boomer_token");
          }
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    };

    checkTokenExpiry();
  }, [dispatch]);

  return (
    <div className="bg-[#01010b] text-white min-h-screen">
      <Routes>
        <Route path={PUBLIC_ROUTES.LANDING_PAGE} element={<Landing />} />

        {/* you can  use query string url?search= , genre= or type="series" in addition to explore page */}
        <Route path={`${PUBLIC_ROUTES.EXPLORE_PAGE}`} element={<ExplorePage />} />

        <Route path={`${PUBLIC_ROUTES.MOVIE}/:id`} element={<MoviePage />} />
        <Route path={PUBLIC_ROUTES.UPLOAD} element={<Upload />} />
        <Route path={PUBLIC_ROUTES.MY_PROFILE} element={<MyProfile />} />

        <Route path={PUBLIC_ROUTES.SIGNUP} element={<Signup />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />

        <Route path={PUBLIC_ROUTES.ADMIN_LOGIN} element={<AdminLogin />} />
        <Route path={PUBLIC_ROUTES.ADMIN_DASHBOARD} element={<Dashboard />} />
        <Route path={`${PUBLIC_ROUTES.ADMIN_MOVIE_PAGE}/:id`} element={<AdminMoviePage />} />
        {/* you can  use query string url?search= , genre= or type="series" in addition to explore page */}
        <Route path={`${PUBLIC_ROUTES.ADMIN_EXPLORE_PAGE}`} element={<AdminExplorePage />} />

        <Route path={PUBLIC_ROUTES.ADMIN_EDIT_MOVIE} element={<EditMovie />} />
        <Route path={`${PUBLIC_ROUTES.ADMIN_EDIT_MOVIE}/:id`} element={<EditMovie />} />
        <Route path={PUBLIC_ROUTES.ADMIN_RECOMMENDS} element={<RecommendsPage />} />

        <Route path={PUBLIC_ROUTES.ABOUT_US} element={<AboutUs />} />

        {/* 404 page */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
