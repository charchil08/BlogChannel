import { Link } from "react-router-dom";
import { StyledNotFound } from "./styles/NotFound.styled";

const NotFound = () => {
    return ( 
        <StyledNotFound>
            <h1>Page Not Found ...</h1>
            <Link to={"/"}>Back To Home</Link>
        </StyledNotFound>
     );
}

export default NotFound;