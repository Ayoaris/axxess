import Series from "../pages/Series";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
const coreRoutes = [
  {
    path: "/",
    title: "Home Page",
    component: Home,
  },
  {
    path: "/series",
    title: "Series Page",
    component: Series,
  },

  {
    path: "/movies",
    title: "Movies Page",
    component: Movies,
  },
];

const routes = [...coreRoutes];
export default routes;
