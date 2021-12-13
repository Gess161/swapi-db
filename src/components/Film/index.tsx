import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export default function FilmComponent(props: any) {
    const { episode, title } = props;
    const navigate = useNavigate()

    return (
        <Container>
            <div onClick={() => navigate(`/film/${episode}`)}>{title}</div>
        </Container>
    )
}