import { NavigateFunction } from "react-router-dom";
import { PersonContainer } from "./styled";

interface IPeopleItem {
    name: string,
    id?: string
    image?: string,
    navigate: NavigateFunction
}

export default function PeopleItem(props: IPeopleItem) {
    const { name, id, image, navigate } = props;
    return (
        <PersonContainer key={id}>
            <div id={id} onClick={(e) => navigate(`/people/${e.currentTarget.id}`)}>
                <img key={id + 'img'} src={image} alt="jedi" />
                <p key={id + 'name'}>{name}</p>
            </div>
        </PersonContainer>
    )
}