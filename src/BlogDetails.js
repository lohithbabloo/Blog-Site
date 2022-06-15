import React from "react";
import { useParams } from "react-router-dom";
import Usefetch from "./usefetch";



const blogdetails = (props) => {
    let {id} = useParams();
    const {data:blogs,error,loading} = Usefetch('http://localhost:5000/blogs');
    return(
        <div className="blog-details">
        <h2>{blogs.id}</h2>
        </div>
    )
}
 
export default blogdetails;