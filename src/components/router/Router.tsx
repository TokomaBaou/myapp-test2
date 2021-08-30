import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Setting } from "../pages/Setting";
import { Top } from "../pages/Top";
import { HeaderLayout } from "../templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../pages/Page404";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Top />
      </Route>
      {/* urlの中に/homeの値が入る */}
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
    // <Route path="/setting">
    //   <Setting />
    // </Route>
  );
});
