import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/home"></Route>
    </Switch>
  );
});
