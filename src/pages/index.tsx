import { Routes, Route } from "react-router-dom";
import FilmsPage from "./films";
import NotFound from "./notfound";
import PeoplePage from "./people";
import Layout from "../components/Layout";


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="films" element={<FilmsPage />} />
                <Route path="people" element={<PeoplePage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}