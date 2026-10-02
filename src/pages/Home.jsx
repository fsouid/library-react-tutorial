import React from "react";
import Landing from "../componenets/Landing";
import Highlights from "../componenets/Highlights";
import Featured from "../componenets/Featured";
import Discounted from "../componenets/Discounted";
import Explore from "../componenets/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
