import styled from 'styled-components'

export const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid #f2f2f2;
    max-width: 600px;
    margin:0 auto;
    padding:16px;
    
    & > h1,
    & > a:hover {
        color:#f1356d;
    }

    & > a {
        text-decoration: none;
        padding:6px;
    }
`