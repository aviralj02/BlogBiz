import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const { data: blogs, isPending, error } = useFetch(process.env.REACT_APP_URL);

    return ( 
        <div className="home">
            {error && <div><h2>{ error }</h2></div>}
            {isPending && <div><h2>Fetching Data...</h2></div>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs" />}
        </div>
     );
}

export default Home;