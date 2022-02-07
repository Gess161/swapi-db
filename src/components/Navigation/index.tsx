import { Container } from "./styled";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

export default function HomeComponent() {
  return (
    <Container>
      <nav>
        <div className="item-container item-container-small">
          <Link className="item" to="/films">Movie</Link>
          <Link className="item" to="/people">Databank</Link>
          <Link className="item" to="/">News</Link>
        </div>
        <div className="item-container" />
        <div className="item-container" />
        <div className="item-container item-container-small">
          <input className="item" placeholder="Search" />
        </div>
      </nav>
      <img src={logo} alt="logo" />
    </Container>
  )
}