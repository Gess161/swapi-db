import { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { fetchPeopleRequest } from "../../redux/actions/peopleActions"
import getId from "../../services/getId"
import getImageUrl from "../../services/getUrlArray"
import { PeopleState, PersonType } from "../../types"
import { Loading } from "../Loading/styled"
import Person from "../Person"
import PeopleContainer from "./styled"
import logo from "../../assets/images/logo.png"
import Navigation from "../Navigation"

export default function People() {
    const state: PeopleState = useAppSelector(state => state.rootReducer.peopleReducer)
    const people: PersonType[] = state.people
    const dispatch = useAppDispatch()
    const url: string = state.next

    const fetchData = () => {
        dispatch(fetchPeopleRequest(url))
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <InfiniteScroll
            dataLength={people.length}
            hasMore={!!url}
            loader={<Loading />}
            next={fetchData}
        >
            {people.length > 0 ?
                <PeopleContainer>
                    <div>
                        <img className="logo" alt="logo" src={logo} />
                    </div>
                    <div className="block">
                        <Navigation />
                    </div>
                    {people.map((person: PersonType, index: number) => {
                        if (people.length === index + 1) {
                            return <Person key={person.name} name={person.name} id={getId(person.url)} image={getImageUrl(getId(person.url))} />
                        } else {
                            return <Person key={person.name} name={person.name} id={getId(person.url)} image={getImageUrl(getId(person.url))} />
                        }
                    })}
                </PeopleContainer> : <Loading />}

        </InfiniteScroll>
    )
}