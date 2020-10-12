import React from "react";
import Article from "./Article";

const articles = [
  {
    id: 1,
    title: "Artyukl1",
    author: "Munio Tunio",
    text:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  },
  {
    id: 2,
    title: "Artyukl2",
    author: "Pablo Pavlo",
    text:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  },
  {
    id: 3,
    title: "Artyukl3",
    author: "Ciotka Klotka",
    text:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  },
];

const HomePage = () => {
  const artList = articles.map((e) => {
    return <Article key={e.id} {...e} />;
  });
  return <div className="artList">{artList}</div>;
};

export default HomePage;
