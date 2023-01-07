import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('');

const [isPending, setIsPending] = useState(false);
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();                    //prevents from refreshing the page
    const newBlog = {
        "title": title,
        "body": body,
        "author": author
    };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newBlog)
    }).then(() => {
        console.log('New Blog Added');
        setIsPending(false);
        navigate('/');
    })

}

    return ( 
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                { !isPending && <button>Add Blog</button>}
                { isPending && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;