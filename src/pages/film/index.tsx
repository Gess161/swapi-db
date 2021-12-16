import { useParams } from "react-router-dom";
import FilmDetailsComponent from "../../components/FilmDetails";

export default function FilmPage() {
    const params = useParams()
    return (
        <FilmDetailsComponent params={params} />
    )
}