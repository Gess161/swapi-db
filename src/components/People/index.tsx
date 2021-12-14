import { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchPeopleRequest } from "../../redux/actions/peopleActions"
import getId from "../../services/getId"
import getImageUrl from "../../services/getUrlArray"
import { PersonType } from "../../types"
import { Loading } from "../Loading/styled"
import Person from "../Person"
import PeopleContainer  from "./styled"


export default function People() {
    const state = useAppSelector(state => state.rootReducer.peopleReducer)
    const people = state.people
    const dispatch = useAppDispatch()
    const url: string = state.next

    const fetchData = () => {
        dispatch(fetchPeopleRequest(url))
    }

    useEffect(() => {
        if (people.length < 1) {
            fetchData()
        }
        // eslint-disable-next-line
    }, [])

    return (
        <InfiniteScroll
            dataLength={people.length}
            hasMore={!!url}
            loader={<Loading />}
            next={fetchData}
        >
            <PeopleContainer>
                {people.map((person: PersonType, index: number) => {
                    if (people.length === index + 1) {
                        return <Person key={person.name} name={person.name} image={getImageUrl(getId(person.url))} />
                    } else {
                        return <Person key={person.name} name={person.name} image={getImageUrl(getId(person.url))} />
                    }
                })}
            </PeopleContainer>
        </InfiniteScroll>
    )
}