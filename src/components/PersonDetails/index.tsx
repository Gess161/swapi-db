import { useAppSelector } from "../../hooks";
import { PersonType } from "../../types";
import { PersonContainer } from "../PersonDetails/styled";
import logo from "../../assets/images/logo.png"
import Navigation from "../Navigation";

export default function PersonDetails(props: { id: string | undefined, person: PersonType }) {
    const { id } = props;
    const person: any = useAppSelector(state => state.rootReducer.peopleReducer.person)
    const {
        birth_year,
        eye_color,
        gender,
        hair_color,
        height,
        mass,
        name,
        skin_color,
    } = person;
    const img = `${process.env.REACT_APP_IMG_API_URL}${id}.jpg`

    return (
        <PersonContainer>
            <img className="logo" alt="logo" src={logo} />
            <Navigation person={name} />
            <div className="info">
                <img src={img} alt="character" className="person" />
                <div>
                    <h1>{name}</h1>
                    <div>
                        <ul>
                            <li>Birth Year: {birth_year}</li>
                            <li>Height: {height}</li>
                            <li>Mass: {mass}</li>
                            <li>Gender: {gender}</li>
                            <li>Eye color: {eye_color}</li>
                            <li>Hair color: {hair_color}</li>
                            <li>Skin color: {skin_color}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </PersonContainer>
    )
}