import { Home } from "../pages/Home";
import { Setting } from "../pages/Setting";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  }
  // {
  //   path:"",
  //   exact:,
  //   children:,
  // }
];
