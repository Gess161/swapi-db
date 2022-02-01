import React from "react";
import { FilmSelectorContainer } from "./styled";
import arrow from "../../assets/images/iconarrow.png";
import FilmSelectorList from "./FilmSelectorList";

export default function FilmSelector(props: any) {
    const { films } = props;
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    
    return (
        <FilmSelectorContainer>
            <div className="selector-container" onClick={handleOpen}>
                <h1>Star wars film selector</h1>
                <img className="arrow" src={arrow} alt="arrow" />
            </div>
            {open && <FilmSelectorList films={films} />}
        </FilmSelectorContainer>
    )
}