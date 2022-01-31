
import { PersonType } from "../../types";
import { PersonContainer } from "../PersonDetails/styled";
import Navigation from "../Navigation";

interface IPersonDetails {
    id?: string;
    person: PersonType
}

export default function PersonDetails(props: IPersonDetails) {
    const { person } = props;
    const {
        gender,
        hair_color,
        height,
        mass,
        skin_color,
    } = person;

    return (
        <PersonContainer
            data-testid="info"
        >
            <div className="info">
                <div className="info-item">
                    <h1>height</h1>
                    <p>{height}</p>
                </div>
                <div className="info-item">
                    <h1>mass</h1>
                    <p>{mass}</p>
                </div>
                <div className="info-item">
                    <h1>gender</h1>
                    <p>{gender}</p>
                </div>
                <div className="info-item">
                    <h1>hair color</h1>
                    <p>{hair_color}</p>
                </div>
                <div className="info-item">
                    <h1>skin color</h1>
                    <p>{skin_color}</p>
                </div>
            </div>

        </PersonContainer>
    )
}