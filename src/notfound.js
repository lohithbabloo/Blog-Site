import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
    return (  
        <div className="notfound">
            <h2>ERROR 404</h2>
            <Link to='/'>to homapage.....</Link>
        </div>
    );
}
 
export default Notfound