import { Routes, Route, } from "react-router-dom";
import Films from "./films";
import NotFound from "./notfound";
import People from "./people";
import Home from "./home";
import Layout from "../components/Layout"
import Film from "./film";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="swapi-db" element={<Home />} />
                <Route path="films" element={<Films />} />
                <Route path="film/:filmId" element={<Film />} />
                <Route path="people" element={<People />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}