import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Presentation } from "containers";

export function Routes() {
  return (
    <Switch>
      {/* //menu */}
      <Route path={["/apresentacao"]} component={Presentation} />
      <Route path="/" exact render={() => <Redirect to="/apresentacao" />} />
    </Switch>
  );
}
