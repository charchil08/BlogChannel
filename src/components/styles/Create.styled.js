import styled from 'styled-components'

export const StyledCreate = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;

    & > h2 {
        color: #f1356d;
    }

    & > form {
        margin:30px;
        display:flex;
        flex-direction:column;
    }

    & > form > div {
        margin:12px 0;
    }

    & > form > div > label {
        display: block;
        margin:4px 0;
        padding:4px 0;
    }

    & > form > div > :nth-child(2) {
        width:20rem;
        font-size: 16px;
        padding:4px;
        border-radius:8px;
    }

    & > form > div > textarea {
        height: 12rem;
        padding:8px;
    }

    & > form > div > button {
        font-size:16px;
        width:100%;
        padding:8px;
        color:white;
        background-color:#f1356d;
        border:none;
        border-radius:8px;
        cursor:pointer;
        margin:32px 0;
    }

    & > form > div > button:hover {
        box-shadow:1px 3px 5px rgba(0,0,0,0.2) ;
    }
`