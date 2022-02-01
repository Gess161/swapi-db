import InfiniteScroll from "react-infinite-scroll-component"
import getId from "../../services/getId"
import getImageUrl from "../../services/getUrlArray"
import { PersonType } from "../../types"
import { Loading } from "../Loading"
import PeopleItem from "../PeopleItem"
import Container from "./styled"
import Socials from "../Socials"
import DatabankSearch from "./DatabankSearch"

interface IPeople {
    people: PersonType[],
    url: string,
    fetchData: () => void,
}

export default function People(props: IPeople) {
    const { people, url, fetchData } = props;
    return (
        <InfiniteScroll
            className="scroll"
            dataLength={people.length}
            hasMore={!!url}
            loader={<Loading />}
            next={fetchData}
        >
            <Container data-testid="container">
                <h2>Databank</h2>
                <DatabankSearch              />
                {people.length > 0 ?
                    <div className="list">
                        {
                            people.map((person: PersonType, index: number) => {
                                if (people.length === index + 1) {
                                    return <PeopleItem  key={person.name} name={person.name} id={getId(person.url)} image={getImageUrl(getId(person.url))} />
                                } else {
                                    return <PeopleItem  key={person.name} name={person.name} id={getId(person.url)} image={getImageUrl(getId(person.url))} />
                                }
                            })
                        }
                    </div> : <Loading data-testid="loader" />}
                    <Socials />
            </Container>
        </InfiniteScroll>
    )
}