import { FilmCardContainer } from "./styled";
import movie from "../../assets/images/movieicon.svg"

export default function FilmCard() {
    return (
        <FilmCardContainer>
            <div className="info-container">
                <div className="text-container">
                    <h1>Star wars: the rise of skywalker</h1>
                    <p> Board the Millennium Falcon and journey to a galaxy far, far away in Solo: A Star Wars Story,
                        an all-new adventure with the most beloved scoundrel in the galaxy.
                        Through a series of daring escapades deep within a dark and dangerous criminal underworld,
                        Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.
                    </p>
                    <div className="films">
                        <img src={movie} />
                        <p>films</p>
                    </div>
                </div>
            </div>
            <img className="film-img" src="https://starwars-visualguide.com/assets/img/films/4.jpg" />
        </FilmCardContainer>
    )
}