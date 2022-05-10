import { Headerwapper } from "./Header.styled";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
    return (
        <Headerwapper>
            <h1>
                <img src={Logo} alt="Learn Algorithm" />
            </h1>

            <p>
                To better learn Tree and Graph algorithms in the form of example
                solving and interaction
            </p>
        </Headerwapper>
    );
};

export default Header;
