import * as React from "react"
import { useParams } from "react-router-dom"
import PersonDetails from "../../components/PersonDetails";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPerson } from "../../redux/actions/peopleActions";
import { PersonType } from "../../types";
import fetchPersonById from "../../services/api/fetchPersonById";
import { Loading } from "../../components/Loading";
import logo from "../../assets/images/logo.png"
import { Container } from "./styled";

export default function PersonPage() {
    const params = useParams()
    const { id } = params;
    const dispatch = useAppDispatch()
    const person: any = useAppSelector(state => state.rootReducer.peopleReducer.person)
    const getPerson = async () => {
        const person: PersonType = await fetchPersonById(id)
        dispatch(setPerson(person))
    }
    React.useEffect(() => {
        getPerson()
        // eslint-disable-next-line
    }, [])
    return (
        <Container>
            <img className="logo" alt="logo" src={logo} />
            {person ? <PersonDetails person={person} id={id} /> : <Loading data-testid="loader" />}
        </Container>

    )
}