import React from "react";
import { Route } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h4>stopka</h4>
      <Route
        path="/"
        exact
        render={() => {
          return (
            <p>
              jestes na <span>stronie glownej</span>
            </p>
          );
        }}
      ></Route>
      <Route
        path="/:page"
        exanct
        render={({ match }) => {
          // console.log(match)
          return (
            <p>
              jestes na <span>{match.params.page}</span>
            </p>
          );
        }}
      ></Route>
      <Route
        path="/:page/:idProduct"
        exact
        render={({ match }) => {
          // console.log(match)
          return (
            <p>
              jestes na <span>{match.params.idProduct}</span>
            </p>
          );
        }}
      ></Route>
    </div>
  );
};

export default Footer;
