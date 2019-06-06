import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Default from "../use/pages/default/Default";
import Lifetime from "../use/pages/lifetime/Lifetime";

class Use extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/use" component={Default} />
          <Route exact path="/use/lifetime" component={Lifetime} />
        </Switch>
      </div>
    );
  }
}

export default Use;
