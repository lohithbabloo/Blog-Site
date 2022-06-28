import React from "react";
import BlogList from "./BlogList";
import usefetch from "./usefetch";

const Home = () => {
  const {
    data: blogs,
    isloading,
    errorstate,
  } = usefetch("http://localhost:5000/blogs");
  return (
    <div className="Home">
      {errorstate && <div>{errorstate}</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {isloading && <div>isloading....</div>}
    </div>
  );
};
export default Home;
