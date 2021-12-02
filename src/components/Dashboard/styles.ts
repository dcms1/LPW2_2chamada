import styled from "styled-components";

export const Container = styled.form`
    display: block;
    text-align: center;
    margin-top: 15px;
 h1{
    color:black;
    margin: 25px;
 }
 input{
    width: 60%;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 5px;
    border: 1px solid black;
    color:black;
    font-weight: 400;
    font-size: 1rem;

    
    &::placeholder {
        color:#646464 ;
    }
    & + input {
        margin-top: 1rem;
    }
 }
 
 button{
    width: 60%;
    padding: 0 3rem;
    height: 4rem;
    margin-top: 14px;
    background: var(--yellow);
    color:black;
    border: 0;
    font-size: 16px;
    border-radius: 0.25rem;
    font-weight: 600;
    transition: 0.2s;

    &:hover{
        filter: brightness(0.9);
    }
 }
`
export const SubmitButton = styled.form`    

`