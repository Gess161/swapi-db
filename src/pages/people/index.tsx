import People from "../../components/People";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { PeopleState, PersonType } from "../../types";
import { fetchPeopleRequest } from "../../redux/actions/peopleActions";
import { useNavigate } from "react-router-dom";

export default function PeoplePage(){
    const state: PeopleState = useAppSelector(state => state.rootReducer.peopleReducer)
    const people: PersonType[] = state.people
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const url: string = state.next

    const fetchData = () => {
        dispatch(fetchPeopleRequest(url))
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])


    return (
        <People 
            people={people}
            url={url}
            fetchData={fetchData}
            navigate={navigate} 
        />
    )
}