import Navigation from "../../Navigation"
import { AboutFilmContainer } from "./styled"
import logo from "../../../assets/images/logo.png"
import { FilmType } from "../../../types"

interface IAboutFilm {
    episode: number,
    film: FilmType
}

export default function AboutFilm(props: IAboutFilm) {
    const { episode, film } = props
    const { title, opening_crawl, director, producer } = film;

    return (
        <AboutFilmContainer>
            <img className="logo" alt="logo" src={logo} />
            <Navigation title={title} isFilm={true} />
            <div className="container">
                <h1>{title && title}</h1>
                <h3>Episode {episode}</h3>
                <p>{opening_crawl}</p>
                <h4>Director: {director}</h4>
                <h4>Producer: {producer}</h4>
            </div>
        </AboutFilmContainer>
    )
}