export default function AboutFilm(props: any) {
    const { filmId, film } = props
    const { title, opening_crawl, director, producer } = film

    return (
        <div>
            <h1>{title}</h1>
            <h3>Episode {filmId}</h3>
            <p>{opening_crawl}</p>
            <h4>Director: {director}</h4>
            <h4>Producer: {producer}</h4>
            <h2>Characters:</h2>
        </div>
    )
}