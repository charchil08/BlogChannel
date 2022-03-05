import styled from 'styled-components'

export const Blog = styled.div`
    padding:10px 16px;
    margin:20px 0;
    border-bottom: 1px solid #fafafa;
    
    &:hover {
        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    }
    
    & h2 {
        cursor:pointer;
        font-size:20px;
        color:#f1356d;
        margin-bottom: 8px;
    }
    
    & a {
        text-decoration: none;
    }
`