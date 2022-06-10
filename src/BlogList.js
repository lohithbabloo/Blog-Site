const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handledelete = props.handledelete;
        return ( 
        <div className="bloglist">
            <h2> {title} </h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <button onClick={()=>handledelete(blog.id)}>deleteblog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;