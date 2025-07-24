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

const checkTokenExpiry = () => {
  const token = localStorage.getItem("boomer_token");
  if (token) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decoded: any = jwtDecode(token);

      const expiryTime = decoded.exp * 1000;
      const currentTime = Date.now();

      if (currentTime > expiryTime) {
        // Token is expired
        return true;
      }
    } catch (error) {
      return { message: "Error decoding token:", error: error };
    }
  }

  return false; // Token is valid or not present
};
const App = () => {
  const dispatch = useDispatch();

  if (checkTokenExpiry()) {
    dispatch(clearState());
    localStorage.removeItem("boomer_token");
  }

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
        <Route path={PUBLIC_ROUTES.ADMIN_EDIT_MOVIE} element={<EditMovie />} />
        <Route path={`${PUBLIC_ROUTES.ADMIN_EDIT_MOVIE}/:id`} element={<EditMovie />} />

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
