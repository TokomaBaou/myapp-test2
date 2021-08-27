import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Setting } from "../pages/Setting";
import { Top } from "../pages/Top";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Top />
      </Route>
      <Route path="/home">
        <Switch>
          {/* <Home /> */}
          <Route>
            <HeaderLayout></HeaderLayout>
          </Route>
        </Switch>
      </Route>
      <Route path="/setting">
        <Setting />
      </Route>
    </Switch>
  );
});
