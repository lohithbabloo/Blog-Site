import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      // fetch data from json-server
      let blogs = await fetch(`http://localhost:5000/blogs/${id}`);
      blogs = await blogs.json();

      // set the data to state
      setBlog(blogs);
    };

    fetchData();
  }, [id]);

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </div>
  );
}

export default BlogDetails;
