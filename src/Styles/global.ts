import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --header: #A3B2BF; 
    --text-body: #777777;
    --green: #33cc95;
    --yellow: #FFDE56;
 
}
* {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
}
body {
    -webkit-font-smoothing: antialiased;
}
body, input, button{
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
}
button {
    cursor:pointer;
}
`;