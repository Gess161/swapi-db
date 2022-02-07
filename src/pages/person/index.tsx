import * as React from "react"
import { Container } from "./styled";
import PersonDetails from "../../components/PersonDetails";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPerson } from "../../redux/actions/peopleActions";
import { PersonType } from "../../types";
import fetchPersonById from "../../services/api/fetchPersonById";
import { Loading } from "../../components/Loading";


export default function PersonPage(props: any) {
    const { id } = props;
    const dispatch = useAppDispatch()
    const person: any = useAppSelector(state => state.persistedReducer.peopleReducer.person)
    const getPerson = async () => {
        const person: PersonType = await fetchPersonById(id)
        dispatch(setPerson({
            person: person,
            id: id
        }))
    }
    React.useEffect(() => {
        getPerson()
        // eslint-disable-next-line
    }, [])
    return (
        <Container data-testid="person-info">
            {person[id] ? <PersonDetails person={person[id]} id={id} /> : <Loading data-testid="loader" />}
        </Container>

    )
}