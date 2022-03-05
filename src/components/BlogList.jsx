import React from 'react'
import { Link } from 'react-router-dom'
import { Blog } from './styles/BlogList.styled'

const BlogList = ({ blogs, title }) => {
    return (
        <div>
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <Blog key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </Blog>
            ))}
        </div>
    )
}

export default BlogList