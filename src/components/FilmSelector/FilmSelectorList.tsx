import { StyledSelectorList } from "./styled";
import FilmSelectorItem from "./FilmSelectorItem";

export default function FilmSelectorList (props: any){
    const { films } = props;
    return (
        <StyledSelectorList>
            {films.map((item: any) => <FilmSelectorItem key={item.title} film={item.title}/>)}
        </StyledSelectorList>
    )
}
