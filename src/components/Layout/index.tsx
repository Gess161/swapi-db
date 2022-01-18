import { Outlet } from "react-router-dom";
import StarrySky from "../Background";
import Navigation from "../Navigation";
import { Wrapper } from "./styled";

export default function Layout() {
    return (
        <Wrapper>
            <Outlet />
            <StarrySky />
        </Wrapper>
    )
}