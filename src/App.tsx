import { Routes, Route } from "react-router-dom";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PUBLIC_ROUTES.LANDING_PAGE} element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;
