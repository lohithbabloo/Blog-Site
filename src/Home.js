import React  from 'react';


import BlogList from "./BlogList";
import usefetch from "./usefetch";

const Home = () => {
    const {data:blogs,isloading,errorstate} = usefetch('http://localhost:4000/blogs')
    return (
        <div className="Home">
            {errorstate&& <div>{errorstate}</div>}
            {isloading&&  <div>isloading....</div> }
            {blogs&&<BlogList blogs={blogs} title="All blogs" />}
      </div>
    );
}
 
export default Home;