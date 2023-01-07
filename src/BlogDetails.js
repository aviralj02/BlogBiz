import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(process.env.URL + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(process.env.REACT_APP_URL + blog.id,{
            method: 'DELETE',
        }).then(() => {
            navigate('/');
        })
    }
    
    return ( 
        <div className="blog-details">
            {isPending && <div><h2>Fetching Data...</h2></div>}
            {error && <div><h2>{ error }</h2></div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleDelete }>Delete Blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;