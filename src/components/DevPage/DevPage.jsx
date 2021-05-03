import React from "react";
import { Route, NavLink } from "react-router-dom";
import Calculator from "./calculator/Calculator";

function DevPage(props) {
  return (
    <div>
      <div>
        <div>
          <NavLink to="/dev/calculator">Calculator</NavLink>
        </div>
      </div>
      <Route path="/dev/calculator" render={() => <Calculator />} />
    </div>
  );
}

export default DevPage;
