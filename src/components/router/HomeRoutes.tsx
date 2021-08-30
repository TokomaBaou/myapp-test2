import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";
import { Setting } from "../pages/Setting";
import { UserManagement } from "../pages/userManagement";

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
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
