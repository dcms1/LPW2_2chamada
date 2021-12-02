import logo from "../../assets/better_language.png";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
        <img src={logo} alt="python is better than js" />
        <h1>School</h1>
    </Container>
  );
}
