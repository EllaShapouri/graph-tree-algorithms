import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../../../Redux/algorithmResultSlice";
import Button from "../../../Button/Button";
import { ButtonWrapper } from "../../../Button/Button.styled";
import { Gradientbox } from "../../../Common/Gradientbox";
import { DoneText } from "./ShowFlowButton.styled";

const ShowFlowButton = () => {
    const dispatch = useDispatch();
    const step = useSelector((state) => state.result.step);
    const lastStep = useSelector((state) => state.result.lastStep);

    const ClickHandler = (e) => {
        e.preventDefault();
        const newStep = step + 1;
        dispatch(setStep(newStep));
    };
    return (
        <ButtonWrapper margin="1em auto">
            {lastStep - 1 > step ? (
                <Gradientbox width="100%" height="auto">
                    <Button onClick={ClickHandler}>
                        {step === 0 ? `start ->` : "next step ->"}
                    </Button>
                </Gradientbox>
            ) : (
                <Gradientbox width="100%" height="auto">
                    <DoneText>Done !!!</DoneText>
                </Gradientbox>
            )}
        </ButtonWrapper>
    );
};

export default ShowFlowButton;
