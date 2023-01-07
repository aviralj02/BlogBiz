import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Error Finding that Page</h2>
            <p>Sorry! That page cannot be found</p>
            <Link to='/'>Back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;