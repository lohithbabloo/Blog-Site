import React from "react";
import { useParams } from "react-router-dom";
import BlogList from "./BlogList";
import Usefetch from "./usefetch";

const blogdetails = (props) => {
    let {id} = useParams();
    const {data:blog,error,loading} = Usefetch('http://localhost:5000/blogs');
    return(
        <div className="blog-details">
        <h2>{blog.key}</h2>
        </div>
    )
}
 
export default blogdetails;