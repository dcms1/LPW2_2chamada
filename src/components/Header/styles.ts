import styled from "styled-components";

export const Container = styled.header`
    background: var(--header);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 45px 0 45px;

  h1 {
   color: var(--text-body);
   font-weight: 500;
  }
  
  img {
   width: 200px;
  }
`;
