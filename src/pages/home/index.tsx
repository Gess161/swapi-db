import { useNavigate } from "react-router-dom"
import HomeComponent from "../../components/Home"

export default function HomePage(props: any) {
    const navigate = useNavigate();
    return(
        <HomeComponent navigate={navigate}/>
    )
}