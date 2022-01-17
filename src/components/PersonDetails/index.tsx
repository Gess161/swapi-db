import * as React from "react"
import Person from "../Person";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPerson } from "../../redux/actions/peopleActions";
import fetchPersonById from "../../services/api/fetchPersonById";
import { PersonType } from "../../types";
import { PersonContainer } from "../PersonDetails/styled";

export default function PersonDetails(props: { id: string | undefined, person: PersonType }) {
    const { id } = props;
    const person: any = useAppSelector(state => state.rootReducer.peopleReducer.person)
    const {
        birth_year,
        eye_color,
        films,
        gender,
        hair_color,
        height,
        homeworld,
        mass,
        name,
        skin_color,
        createdDate,
        editedDate,
        species,
        starships,
        url,
        vehicles,
    } = person;
    const img = `${process.env.REACT_APP_IMG_API_URL}${id}.jpg`

    return (
        <PersonContainer>
            <img src={img} />
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
        </PersonContainer>
    )
}