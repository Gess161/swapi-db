import { Container } from "./styles";

export default function FilmComponent(props: any) {
    const { episode, title, navigate } = props;
    const episodeId = episode < 4 ? episode + 3 : episode - 3;
    const img = `${process.env.REACT_APP_IMG_FILM_URL + episodeId}.jpg`
    return (
        <Container onClick={() => navigate(`/films/${episode}`)}>
            <img alt="film" src={img} /> 
            <p> {title} </p>
        </Container>
    )
}