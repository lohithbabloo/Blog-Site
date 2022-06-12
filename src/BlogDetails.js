import React from "react";
import { useParams } from "react-router-dom";
function blogdetails() {
    const  {id}  = useParams();
    return ( 
        <div className="blog-details">
            <h2>blog details-{id}</h2>
        </div>
     );
}
 
export default blogdetails;