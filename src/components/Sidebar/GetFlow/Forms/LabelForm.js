import { useEffect, useRef, useState } from "react";
import { FormStyled, Img, Inputstyled, SetButton } from "./LabelForm.Styled";
import { Paragraph } from "./../../../Common/Paragraph";

import Notice from "./../../../../assets/images/info.svg";
import { useDispatch, useSelector } from "react-redux";
import {
    setChangeElement,
    setSelectedElement,
} from "../../../../Redux/mainSlice";
import ErrorText from "../../../Common/ErrorText";

const LabelForm = ({ placeholder, label }) => {
    const [value, setValue] = useState("");
    const [emptyError, setEmptyError] = useState(false);
    const input = useRef(null);
    const selectedElement = useSelector((state) => state.flow.selectedElement);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            setEmptyError(true);
        } else {
            setEmptyError(false);
            const element = { ...selectedElement };
            element.data = { label: value };
            dispatch(setSelectedElement(element));
            dispatch(setChangeElement(true));
            setValue("");
        }
    };

    useEffect(() => {
        input.current.focus();
    }, [selectedElement]);

    return (
        <FormStyled>
            <Paragraph>
                <Img src={Notice} alt="" />
                {label}
            </Paragraph>
            <Inputstyled
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                ref={input}
            />
            {emptyError ? <ErrorText width="10em">Empty!!</ErrorText> : null}
            <SetButton type="submit" onClick={handleSubmit}>
                set
            </SetButton>
        </FormStyled>
    );
};

export default LabelForm;
