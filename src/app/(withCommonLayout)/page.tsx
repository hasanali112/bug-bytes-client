import React from "react";
import Banner from "./_component/Home/Banner/Banner";
import LatestBlog from "./_component/Home/LatestBlog/LatestBlog";
import WebDev from "./_component/Home/WebDev/WebDev";
import DevsOps from "./_component/Home/DevOps/DevOps";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestBlog />
      <WebDev />
      <DevsOps />
    </div>
  );
};

export default Home;
