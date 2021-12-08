import { Routes, Route } from "react-router-dom";
import Films from "./films";
import NotFound from "./notfound";
import People from "./people";
import Home from "./home";
import Layout from "./layout"


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="films" element={<Films />} />
                <Route path="people" element={<People />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}