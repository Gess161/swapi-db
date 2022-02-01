import React from "react";
import PersonPage from "../../pages/person";
import { PersonContainer } from "./styled";
import ReactCardFlip from "react-card-flip"

interface IPeopleItem {
    name: string,
    id?: string
    image?: string,
}

export default function PeopleItem(props: IPeopleItem) {
    const { name, id, image } = props;
    const [isHovering, setIsHovering] = React.useState(false)

    const handleMouseHover = () => {
        setIsHovering(!isHovering)
    }

    return (
        <PersonContainer
            data-testid="Person container"
            key={id}
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
        >
            <ReactCardFlip
                isFlipped={isHovering}
                flipDirection="horizontal"
            >
                <div className="person" id={id}>
                    <img key={id + 'img'} src={image} alt="jedi" />
                    <p className="name" key={id + 'name'}>{name}</p>
                </div>
                <PersonPage id={id} />
            </ReactCardFlip>
        </PersonContainer>
    )
}