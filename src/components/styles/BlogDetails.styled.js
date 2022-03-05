import styled from 'styled-components'

export const StyledBlogDetail = styled.article`
    h2 {
        cursor:pointer;
        font-size:20px;
        color:#f1356d;
        margin-bottom: 8px;
    }

    & > p {
        font-weight: bold;
        padding: 10px 0;
    }

    & > div > p {
        line-height: 1.75;
        text-align: justify;
    }

    & > button {
        margin: 20px 0;
        padding: 10px 20px;
        font-size: 14px;
        border:none;
        background-color: #f1356d;
        color:#fff;
        cursor: pointer;
        border-radius:4px;
    }
`