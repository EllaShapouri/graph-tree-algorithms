import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    setAllEdges,
    setAllNodes,
    setHeuristic,
    SetShowHeuristic,
} from "../../../Redux/getFlowSlice";
import Button from "../../Button/Button";
import { ButtonWrapper } from "../../Button/Button.styled";
import { Gradientbox } from "../../Common/Gradientbox";
import ErrorText from "./../../Common/ErrorText";
import { Title } from "../../Common/Title";
import { Form } from "../../Common/Form";
import { InputStyled } from "../../Common/InputStyled";
import { useEdges, useNodes } from "react-flow-renderer";
import { InputsWrapper, InputWrapper } from "./ModalHeuristic.styled";
import { setResult } from "../../../Redux/algorithmResultSlice";
import { runAlgorithm } from "../../../Algorithms/runAlgorithm/runAlgorithm";
import { createMatrix } from "../../../utils/matrix";
import { createMatrixHeuristics } from "../../../utils/matrixHeuristic";

const ModalHeuristic = () => {
    const nodes = useNodes();
    const edges = useEdges();
    const algorithm = useSelector((state) => state.data.algorithm);
    const depth = useSelector((state) => state.flow.depth);
    const [error, setError] = useState();
    // const [heuristicList, setHeuristicList] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        check(getHeuristic);
    };

    const check = (getHeuristic) => {
        if (getHeuristic.length !== 0) {
            const checkStatus = checkHeuristicOne(getHeuristic);
            console.log("checkStatus", checkStatus);
            if (checkStatus) {
                const { status, heuristicList } =
                    checkHeuristicTow(getHeuristic);
                console.log("status", status);
                if (status) run(heuristicList);
                else setError(!status);
            } else setError(!checkStatus);
        } else setError(true);
    };

    const checkHeuristicOne = (getHeuristic) => {
        for (let index = 0; index < getHeuristic.length; index++) {
            var value = getHeuristic[index];
            if (!value.trim()) return false;
            else if (!/^[0-9]+$/.test(value)) return false;
        }
        return true;
    };

    const checkHeuristicTow = (getHeuristic) => {
        const validNodes = Object.freeze(nodes).map(
            ({ selected, ...proprties }) => proprties
        );
        const validEdges = Object.freeze(edges).map(
            ({ selected, ...proprties }) => proprties
        );

        const matrix = createMatrixHeuristics(
            validNodes,
            validEdges,
            algorithm.requiredPath
        );
        console.log("matrix", matrix);
        var status = false;
        var heuristicList = [];
        for (let index = 0; index < getHeuristic.length; index++) {
            heuristicList[index] = parseInt(getHeuristic[index]);
        }
        // check heuristics
        for (let i = 0; i < heuristicList.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j].value !== -1) {
                    if (
                        matrix[i][j].value + heuristicList[j] >
                        heuristicList[i]
                    ) {
                        status = true;
                    } else {
                        console.log("in here", i, j);
                        status = false;
                        return { status, heuristicList };
                    }
                }
            }
        }
        return { status, heuristicList };
    };

    const run = (heuristicList) => {
        const validNodes = Object.freeze(nodes).map(
            ({ selected, ...proprties }) => proprties
        );
        const validEdges = Object.freeze(edges).map(
            ({ selected, ...proprties }) => proprties
        );

        const matrix = createMatrix(
            validNodes,
            validEdges,
            algorithm.requiredPath
        );
        dispatch(setAllNodes(validNodes));
        dispatch(setAllEdges(validEdges));
        dispatch(setHeuristic(heuristicList));
        const resault = runAlgorithm(
            algorithm.name,
            matrix,
            depth,
            heuristicList
        );
        dispatch(setResult(resault));
        // navigate new page
        navigate("/showalgorithm", { replace: true });
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
            {error ? (
                <ErrorText width="9em">
                    Just number is valid and heuristics must be true !
                </ErrorText>
            ) : null}
            <ButtonWrapper margin="0">
                <Gradientbox width="150px" height="auto">
                    <Button type="submit">set heuristics</Button>
                </Gradientbox>
            </ButtonWrapper>
        </Form>
    );
};

export default ModalHeuristic;
