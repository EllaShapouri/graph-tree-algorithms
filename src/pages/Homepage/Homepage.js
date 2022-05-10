import { Container } from "./Homepage.styled.js";
import Header from "../../components/Header/Header";
import Steps from "../../components/Steps/Steps";
import Buttonwrapper from "../../components/Button/Buttonwrapper";

const Homepage = () => {
    return (
        <Container>
            <Header />
            <main>
                <Steps />
                <Buttonwrapper />
            </main>
        </Container>
    );
};

export default Homepage;
