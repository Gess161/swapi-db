import { Outlet } from "react-router-dom";
import StarrySky from "../Background";
import HomeComponent from "../Home";
import Socials from "../Socials";
import { Wrapper } from "./styled";

export default function Layout() {
    return (
        <Wrapper>
            <HomeComponent />
            <Outlet />
            <StarrySky />
            <Socials />
        </Wrapper>
    )
}