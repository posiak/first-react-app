import React from "react";
import "../styles/header.css";
import { Route, Switch } from "react-router-dom";
// import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import img4 from "../images/header4.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        {/* <Route
          path="/"
          exact
          render={() => <img src={img1} alt="tlo"></img>}
        ></Route> */}
        <Route
          path="/products"
          render={() => <img src={img2} alt="tlo"></img>}
        ></Route>
        <Route
          path="/contact"
          render={() => <img src={img3} alt="tlo"></img>}
        ></Route>
        <Route render={() => <img src={img4} alt="tlo"></img>}></Route>
      </Switch>
    </>
  );
};

export default Header;
