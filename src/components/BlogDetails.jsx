import {useParams, useNavigate} from 'react-router-dom'
import useFetch from './hooks/useFetch'
import { StyledBlogDetail } from './styles/BlogDetails.styled';

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method : 'DELETE'
        })
        .then(() => {
            navigate('/')
        })
    }

    return (
        <div>
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && 
                <StyledBlogDetail>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>
                        <p>{blog.body}</p>
                    </div>
                    <button type="submit" onClick={handleDelete}>Delete</button>
                </StyledBlogDetail>
            }
        </div>
    );
}

export default BlogDetails;