import { SocialsContainer } from "./styled";
import twitter from "../../assets/images/Twitter.png"
import youtube from "../../assets/images/Youtube.png"
import instagram from "../../assets/images/Instagram.png"
import facebook from "../../assets/images/Facebook.png"

export default function Socials() {
    return (
        <SocialsContainer>
            <h1>Follow starwars</h1>
            <div className="icons-container">
                <input type="image" src={instagram} alt="instagram" />
                <input type="image" src={facebook} alt="facebook" />
                <input type="image" src={youtube} alt="youtube" />
                <input type="image" src={twitter} alt="twitter" />
            </div>
        </SocialsContainer>
    )
}