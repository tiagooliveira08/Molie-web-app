import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Presentation = lazy(() =>
  import("containers").then((module) => ({ default: module.Presentation }))
);

export function Routes() {
  return (
    <Switch>
      {/* //menu */}
      <Route path={["/apresentacao"]} component={Presentation} />
      <Route path="/" exact render={() => <Redirect to="/apresentacao" />} />
    </Switch>
  );
}
