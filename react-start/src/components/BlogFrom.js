import {useState} from 'react'
import axios from "axios";



const BlogForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const onSubmit = () => {
        axios.post('http://localhost:3001/posts', {
            title,
            body
        })
    };


    return (
        <div>
            <h1>Create a blog post</h1>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text"
                    className="form-control"
                    value={title}
                    placeholder="제목을 작성해주세요"
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Content</label>
                <textarea
                    className="form-control"
                    value={body}
                    placeholder="내용을 작성해주세요"
                    onChange={(event) => {
                        setBody(event.target.value)
                    }}
                    rows="10"
                />
            </div>
            <button
                className="btn btn-success"
                onClick={onSubmit}
            >Post</button>
        </div>
    )
};

export default BlogForm