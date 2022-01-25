import InfiniteScroll from "react-infinite-scroll-component"
import getId from "../../services/getId"
import getImageUrl from "../../services/getUrlArray"
import { PersonType } from "../../types"
import { Loading } from "../Loading"
import PeopleItem from "../PeopleItem"
import Container from "./styled"
import logo from "../../assets/images/logo.png"
import Navigation from "../Navigation"
import { NavigateFunction } from "react-router-dom"

interface IPeople {
    people: PersonType[],
    url: string,
    fetchData: () => void,
    navigate: NavigateFunction,
}

export default function People(props: IPeople) {
    const { people, url, fetchData, navigate } = props;
    return (
        <InfiniteScroll
            dataLength={people.length}
            hasMore={!!url}
            loader={<Loading />}
            next={fetchData}
        >
            <Container data-testid="container">
                <img className="logo" alt="logo" src={logo} />
                <Navigation />
                {people.length > 0 ?
                    <div className="list">
                        {
                            people.map((person: PersonType, index: number) => {
                                if (people.length === index + 1) {
                                    return <PeopleItem navigate={navigate} key={person.name} name={person.name} id={getId(person.url)} image={getImageUrl(getId(person.url))} />
                                } else {
                                    return <PeopleItem navigate={navigate} key={person.name} name={person.name} id={getId(person.url)} image={getImageUrl(getId(person.url))} />
                                }
                            })
                        }
                    </div> : <Loading data-testid="loader" />}
            </Container>

        </InfiniteScroll>
    )
}