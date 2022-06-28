import React from "react";
import { useParams } from "react-router-dom";
import Usefetch from "./usefetch";
import { useNavigate } from "react-router-dom";



const blogdetails = (props) => {
    let {id} = useParams();
    const {data:blogs,error,loading} = Usefetch(`http://localhost:5000/blogs/${id}`);
    const history = useNavigate()
    const handleClick = () =>{
        fetch(`http://localhost:5000/blogs/${id}`,{
            method:"DELETE"
        }).then(() => {
            history(`/`)
        })
    }
    return(
        <div className="blog-details">
            {loading && <div>loading....</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by:{blogs.author}</p>
                    <div>
                        {blogs.body}
                    </div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    )
}
 
export default blogdetails;