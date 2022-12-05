import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SetShowHeuristic } from "../../../../Redux/getFlowSlice";
import ErrorText from "../../../Common/ErrorText";
import { Title } from "../../../Common/Title";
import { Form } from "../../../Common/Form";
import { InputStyled } from "../../../Common/InputStyled";
import {
    ButtonWrapper,
    InputsWrapper,
    InputWrapper,
} from "../ModalHeuristic.styled";
import { Gradientbox } from "../../../Common/Gradientbox";
import Button from "../../../Button/Button";
import { checkHeuristics } from "../../../../utils/chekHeuristics";

const InputHeuristics = ({ run, nodes, edges }) => {
    const [valid, setValid] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(SetShowHeuristic(false));
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        var getHeuristic = [];
        for (let index = 0; index < nodes.length; index++) {
            var currentValue = document.querySelector(
                `#heuristic_${index}`
            ).value;
            getHeuristic.push(currentValue);
        }
        try {
            const heuristics = checkHeuristics(getHeuristic, nodes, edges);
            run(heuristics);
        } catch (error) {
            setValid(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Title>set heuristics for all nodes :</Title>
            <InputsWrapper>
                {nodes.map((node, index) => (
                    <InputWrapper key={node.id}>
                        <Title>{node.data.label} : </Title>
                        <InputStyled id={`heuristic_${index}`} />
                    </InputWrapper>
                ))}
            </InputsWrapper>
            {!valid ? (
                <ErrorText width="9em">
                    Just number is valid and heuristics must be true !
                </ErrorText>
            ) : null}
            <ButtonWrapper margin="1.5em 0 0">
                <Gradientbox width="150px" height="auto">
                    <Button type="submit">set</Button>
                </Gradientbox>
            </ButtonWrapper>
        </Form>
    );
};

export default InputHeuristics;
