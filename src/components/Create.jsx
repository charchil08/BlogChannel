import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledCreate } from './styles/Create.styled';

const Create = () => {
    const [newBlog, setNewBlog] = useState({
        title: '',
        body: '',
        author: ''
    })
    const [isPending, setIsPending] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(() => {
                setIsPending(false)
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    return (
        <StyledCreate>
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Blog title </label>
                    <input type="text"
                        name="title"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({
                            ...newBlog,
                            title: e.target.value
                        })}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="body">Body </label>
                    <textarea name='body'
                        value={newBlog.body}
                        onChange={(e) => setNewBlog({
                            ...newBlog,
                            body: e.target.value
                        })}
                        required >
                    </textarea>
                </div>
                <div>
                    <label htmlFor="author">Blog Author </label>
                    <select name="author"
                        value={newBlog.author}
                        onChange={(e) => setNewBlog({
                            ...newBlog,
                            author: e.target.value
                        })}
                        required>
                        <option value="Mario">Mario</option>
                        <option value="Yoshi">Yoshi</option>
                    </select>
                </div>
                <div>
                    {!isPending && <button type="submit">Add Blog</button>}
                    {isPending && <button type="button" disabled>Adding Blog</button>}
                </div>
            </form>
        </StyledCreate>
    );
}

export default Create;