import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const list = [
  { name: "START", path: "/", exact: true },
  { name: "PRODUCTS", path: "/products" },
  { name: "CONTACT", path: "/contact" },
  { name: "ADMIN", path: "/admin" },
];

const menu = list.map((e) => {
  return (
    <li key={e.name}>
      <NavLink to={e.path} exact={e.exact}>
        {e.name}
      </NavLink>
    </li>
  );
});

const Navigation = () => {
  return (
    <div>
      <nav className="main">
        <ul>{menu}</ul>
      </nav>
    </div>
  );
};

export default Navigation;
