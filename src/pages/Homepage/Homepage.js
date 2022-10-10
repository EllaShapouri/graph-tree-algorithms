import { Container } from "./Homepage.styled.js";
import Header from "../../components/Header/Header";
import Steps from "../../components/Steps/Steps";
import SelectAlgorithm from "../../components/SelectAlgorithm/SelectAlgorithm.js";

const Homepage = () => {
    return (
        <Container>
            <Header />
            <main>
                <Steps />
                <SelectAlgorithm />
            </main>
        </Container>
    );
};

export default Homepage;
