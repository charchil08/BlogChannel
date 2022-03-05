import Home from './Home'
import Create from './Create'
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound'
import { StyledContainer } from './styles/Container.styled'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Container = () => {
    return (
        <Router>
            <Navbar />
            <StyledContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </StyledContainer>
        </Router>
    )
}

export default Container