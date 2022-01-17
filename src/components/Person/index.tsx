import { useNavigate } from "react-router-dom";
import { PersonContainer } from "./styled";

export default function Person(props: any) {
    const { name, id, image, reference } = props;
    const navigate = useNavigate()
    return (
        <PersonContainer key={id}>
            <div ref={reference} id={id} onClick={(e) => navigate(`/people/${e.currentTarget.id}`)}>
                <img key={id + 'img'} src={image} alt="jedi" />
                <p key={id + 'name'}>{name}</p>
            </div>
        </PersonContainer>
    )
}