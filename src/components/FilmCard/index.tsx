import { FilmCardContainer } from "./styled";
import movie from "../../assets/images/movieicon.svg"

export default function FilmCard(props: any) {
    const { title, description, episode } = props;
    const episodeId = episode < 4 ? episode + 3 : episode - 3;
    return (
        <FilmCardContainer>
            <div className="info-container">
                <div className="text-container">
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                    <div className="films">
                        <img src={movie} alt="movie" />
                        <p>films</p>
                    </div>
                </div>
            </div>
            <img className="film-img" alt="movie icon" src={`https://starwars-visualguide.com/assets/img/films/${episodeId}.jpg`} />
        </FilmCardContainer>
    )
}