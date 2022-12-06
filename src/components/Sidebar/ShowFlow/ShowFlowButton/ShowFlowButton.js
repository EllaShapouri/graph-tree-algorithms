import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../../../Redux/algorithmResultSlice";
import Button from "../../../Button/Button";
import { ButtonWrapper } from "../../../Button/Button.styled";
import { Gradientbox } from "../../../Common/Gradientbox";
import { Label } from "../../../Common/InputRadio";
import { CheckInput, DoneText } from "./ShowFlowButton.styled";

const ShowFlowButton = () => {
    const [animation, setAnimation] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    const step = useSelector((state) => state.result.step);
    const lastStep = useSelector((state) => state.result.lastStep);

    const ClickHandler = (e) => {
        setAnimation(false);
        e.preventDefault();
        const newStep = step + 1;
        dispatch(setStep(newStep));
    };
    useEffect(() => {
        if (animation) {
            const timeout = setTimeout(() => {
                if (lastStep - 1 > step) {
                    const newStep = step + 1;
                    dispatch(setStep(newStep));
                } else clearTimeout(timeout);
            }, 1500);
        }
    }, [animation, step]);
    const animationHandler = () => {
        setAnimation(true);
        setDisabled(true);
    };
    return (
        <Fragment>
            <Label>
                <CheckInput
                    type="checkbox"
                    onChange={animationHandler}
                    disabled={disabled}
                />
                show animation
            </Label>

            <ButtonWrapper margin="1em auto">
                {lastStep - 1 > step ? (
                    <Gradientbox width="100%" height="auto">
                        <Button onClick={ClickHandler} disabled={disabled}>
                            {step === 0 ? `step by step ->` : "next step ->"}
                        </Button>
                    </Gradientbox>
                ) : (
                    <Gradientbox width="100%" height="auto">
                        <DoneText>Done !!!</DoneText>
                    </Gradientbox>
                )}
            </ButtonWrapper>
        </Fragment>
    );
};

export default ShowFlowButton;
