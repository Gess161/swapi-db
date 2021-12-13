import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { Wrapper } from "./styled";

export default function Layout() {
    return (
        <Wrapper>
            <Navigation />
            <Outlet />
        </Wrapper>
    )
}