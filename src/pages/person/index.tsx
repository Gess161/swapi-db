import * as React from "react"
import { useParams } from "react-router-dom"
import PersonDetails from "../../components/PersonDetails";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setPerson } from "../../redux/actions/peopleActions";
import { PersonType } from "../../types";
import fetchPersonById from "../../services/api/fetchPersonById";
import LoadingComponent from "../../components/Loading";

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
    },[])
    return (
        person ? <PersonDetails person={person} id={id} />: <LoadingComponent />
    )
}