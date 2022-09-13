import { useEffect, useRef, useState } from "react";
import { FormStyled, SetButton } from "./LabelForm.Styled";
import { useDispatch, useSelector } from "react-redux";
import {
    setChangeElement,
    setDeleteElement,
    setSelectedElement,
} from "../../../../Redux/getFlowSlice";
import ErrorText from "../../../Common/ErrorText";
import Notice from "../../../Common/Notice";
import { InputStyled } from "../../../Common/InputStyled";

const LabelForm = ({ placeholder, label }) => {
    const [value, setValue] = useState("");
    const [emptyError, setEmptyError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const input = useRef(null);
    const selectedElement = useSelector((state) => state.flow.selectedElement);
    const dispatch = useDispatch();

    const checkNumber = (event) => {
        const inputValue = event.target.value;
        if (label.includes("edge")) {
            if (!/^[0-9]+$/.test(inputValue)) {
                setNumberError(true);
            } else {
                setNumberError(false);
            }
        }
        setValue(inputValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            setEmptyError(true);
        } else if (value.trim() && !numberError) {
            setEmptyError(false);
            const element = { ...selectedElement };
            element.data = { ...element.data, label: value };
            dispatch(setSelectedElement(element));
            dispatch(setChangeElement(true));
            setValue("");
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(setDeleteElement(true));
    };

    useEffect(() => {
        input.current.focus();
    }, [selectedElement]);

    return (
        <FormStyled>
            <Notice>{label}</Notice>
            <InputStyled
                placeholder={placeholder}
                onChange={checkNumber}
                value={value}
                ref={input}
            />
            {numberError ? (
                <ErrorText width="10em">Just number is valid !</ErrorText>
            ) : null}
            {emptyError ? <ErrorText width="10em">Empty!!</ErrorText> : null}
            <SetButton bg="blue" type="submit" onClick={handleSubmit}>
                set
            </SetButton>
            {Object.keys(selectedElement).length !== 0 &&
            !selectedElement.data.startNode ? (
                <SetButton bg="red" onClick={handleDelete}>
                    remove
                </SetButton>
            ) : null}
        </FormStyled>
    );
};

export default LabelForm;
