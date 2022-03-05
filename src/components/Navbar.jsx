import {Link} from 'react-router-dom'
import { StyledNavbar } from './styles/Navbar.styled'

const Navbar = () => {
  return (
    <StyledNavbar>
        <h1>The Dojo Blog</h1>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
    </StyledNavbar>
  )
}

export default Navbar