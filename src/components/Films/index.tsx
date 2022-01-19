import { Container } from "./styled";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { fetchFilmsRequest } from "../../redux/actions/filmsActions";
import FilmComponent from "../Film";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LoadingComponent from "../Loading";
import logo from "../../assets/images/logo.png"

export default function FilmsComponent() {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.rootReducer.filmsReducer)
    const films = state.films
    const navigate = useNavigate()


    useEffect(() => {
        if (films.length < 1) {
            dispatch(fetchFilmsRequest(''))
        }
        // eslint-disable-next-line
    }, [])
    return (
        <Container>
            <div>
                <img className="logo" alt="logo" src={logo} />
            </div>
            {films.length > 0 ? films.map((film: any) => {
                return <FilmComponent
                    navigate={navigate}
                    episode={film.episode_id}
                    key={film.title}
                    title={film.title}
                />
            }) : <LoadingComponent />}
            <Outlet />
        </Container>
    )
}