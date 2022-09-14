import { useState } from "react";
import { FormStyled, SetButton } from "./LabelForm.Styled";
import { useDispatch } from "react-redux";
import { setDepth } from "../../../../Redux/getFlowSlice";
import ErrorText from "../../../Common/ErrorText";
import Notice from "../../../Common/Notice";
import { InputStyled } from "../../../Common/InputStyled";

const DepthForm = () => {
    const [value, setValue] = useState("");
    const [emptyError, setEmptyError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const dispatch = useDispatch();

    const checkNumber = (event) => {
        const inputValue = event.target.value;

        if (!/^[0-9]+$/.test(inputValue)) {
            setNumberError(true);
        } else {
            setNumberError(false);
            setValue(inputValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            setEmptyError(true);
        } else if (value.trim() && !numberError) {
            setEmptyError(false);
            dispatch(setDepth(value));
        }
    };

    return (
        <FormStyled>
            <Notice>Depth : </Notice>
            <InputStyled
                placeholder="just number is valid"
                onChange={checkNumber}
                value={value}
            />
            {numberError ? (
                <ErrorText width="10em">Just number is valid !</ErrorText>
            ) : null}
            {emptyError ? <ErrorText width="10em">Empty!!</ErrorText> : null}
            <SetButton bg="blue" type="submit" onClick={handleSubmit}>
                set
            </SetButton>
        </FormStyled>
    );
};

export default DepthForm;
