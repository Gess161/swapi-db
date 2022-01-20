import { Routes, Route, } from "react-router-dom";
import Films from "./films";
import NotFound from "./notfound";
import People from "./people";
import Home from "./home";
import Layout from "../components/Layout"
import Film from "./film";
import Person from "./person";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="swapi-db" element={<Home />} />
                <Route path="films" element={<Films />} />
                <Route path="films/:filmId" element={<Film />} />
                <Route path="people" element={<People />} />
                <Route path="people/:id" element={<Person />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}