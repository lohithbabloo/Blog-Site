import React  from 'react';
const Navbar = () => {
    return (
        <div className='navcontainer'>
        <div className="nav">
            <h1>The blog site</h1>
            <div className="links">
                <a href="/">HOME</a>
                <a href="/Create">New Blog</a>
            </div>
        </div>
        </div>
    );
}
 
export default Navbar;