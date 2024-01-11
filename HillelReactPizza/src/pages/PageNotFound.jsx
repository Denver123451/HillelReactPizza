import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <h2>Page not found</h2>
            <Link to="/"> Main page </Link>
        </>
    );
};

export default PageNotFound;