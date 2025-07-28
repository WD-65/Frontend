import { Route, Routes } from "react-router";

import Details from "./pages/Details";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/pokemon/:name" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
