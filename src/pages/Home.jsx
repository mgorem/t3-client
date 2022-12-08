import React from "react";
// import Contributors from "../components/main-page/Contributors";
import Gems from "../components/main-page/Gems";
import Navbar from "../components/Navbar";
import Welcome from "../components/main-page/Welcome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Gems />
      {/* <Contributors /> */}
    </div>
  );
};

export default Home;
