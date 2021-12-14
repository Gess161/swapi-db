import { PersonContainer } from "./styled";

export default function Person(props: any) {
    const { name, id, image, reference } = props;
    return (
        <PersonContainer key={id}>
            <div ref={reference} key={id}>
                <img key={id + 'img'} src={image} alt="" />
                <p key={id + 'name'}>{name}</p>
            </div>
        </PersonContainer>
    )
}