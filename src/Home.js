import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setblogs] = useState(null);

    const handledelete =(id) =>{
        const newblog = blogs.filter(blog => blog.id!==id)
        setblogs(newblog)
    }
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            console.log(data);
        })
    },[])
    return (
        <div className="Home">
            {/* <BlogList blogs={blogs} title="All blogs" handledelete={handledelete} /> */}
        </div>
    );
}
 
export default Home;