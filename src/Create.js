import React  from 'react';
import { useState } from 'react';
import {   useNavigate } from 'react-router-dom'

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setbody] = useState('')
    const [author,setauthor] = useState('')
    const [isloading,setisloading] = useState(false)
    const history = useNavigate()
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        const blog = {title,body,author}
        fetch(`http://localhost:5000/blogs`,{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(() =>{
            console.log("blog added")
            setisloading(false)
            history("/")
        }
        )
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                type="text"
                required
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Data</label>
                <textarea
                type="text"
                required
                value = {body}
                onChange={(e)=>setbody(e.target.value)}
                ></textarea>
                <label >Blog Author</label>
                <input
                type="text"
                required
                value={author}
                onChange={(e)=>setauthor(e.target.value)}
                >
                </input>
                {!isloading && <button>Add Blog</button>}
                {isloading && <button>Adding your Blog....</button>}
            </form>
        </div>
    );
}
export default Create;