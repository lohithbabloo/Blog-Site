import React  from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navcontainer'>
        <div className="nav">
            <h1>The Blog Site</h1>
            <div className="links">
                <Link to={"/"}>HOME</Link>
                <Link to={"/Create"}>New Blog</Link>
            </div>
        </div>
        </div>
    );
}
 
export default Navbar;