import { ButtonWrapper } from "./Buttonwrapper.styled";
import Button from "./Button";
import {Gradientbox} from "../Common/Gradientbox";

const Buttonwrapper = () => {
    return (
        <ButtonWrapper className="Button-wrapper">
            <Gradientbox width="180px" height="auto">
                <Button>start with Graph</Button>
            </Gradientbox>
            <Gradientbox width="180px" height="auto">
                <Button>start with Tree</Button>
            </Gradientbox>
        </ButtonWrapper>
    );
};

export default Buttonwrapper;
