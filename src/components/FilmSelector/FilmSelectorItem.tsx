import { StyledSelectorItem } from "./styled"

export default function FilmSelectorItem(props: any) {
    const { film } = props;
    return (
        <StyledSelectorItem>
            {film}
        </StyledSelectorItem>
    )
}