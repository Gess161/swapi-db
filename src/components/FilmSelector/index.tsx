import { FilmSelectorContainer } from "./styled";
import arrow from "../../assets/images/iconarrow.png"

export default function FilmSelector() {
    return (
        <FilmSelectorContainer>
            <h1>Star wars film selector</h1>
            <img src={arrow} />    
        </FilmSelectorContainer>
    )
}