import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    setSelectedAlgorithm,
    setSelectedDataStructure,
} from "../../../Redux/dataSlice";
import Button from "../../Button/Button";
import { ButtonWrapper } from "../../Button/Button.styled";
import { Form } from "../../Common/Form";
import { Gradientbox } from "../../Common/Gradientbox";
import { Title } from "../../Common/Title";
import {
    InputRadio,
    Label,
    Option,
    RadioWrapper,
    Select,
} from "./ModalContent.styled";

const ModalContent = () => {
    const [dataStructure, setDataStructure] = useState("graph");
    const [algorithm, setAlgorithm] = useState("BFS");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const dataModal = (e) => {
        e.preventDefault();
        // store in redux
        dispatch(setSelectedAlgorithm(algorithm));
        dispatch(setSelectedDataStructure(dataStructure));
        navigate("/getflow", { replace: true });
    };

    return (
        <Form onSubmit={dataModal}>
            <Title>Algorithm :</Title>
            <Select
                name="algorithm"
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
            >
                <Option value="BFS" defaultValue>
                    Breadth First Search - BFS
                </Option>
                <Option value="UCS">Uniform Cost Search - UCS</Option>
                <Option value="DFS">Depth First Search - DFS</Option>
                <Option value="DLS">Depth Limited Search - DLS</Option>
                <Option value="IDDFS">
                    Iterative Deepening Depth First Search - IDDFS
                </Option>
                <Option value="BIDIRECTIONAL">Bidirectional Search</Option>
                <Option value="A">A</Option>
                <Option value="GBFS">Greedy Best First Search - GBFS</Option>
                <Option value="RBFS">Recursive Best First Search - RBFS</Option>
            </Select>
            <br />

            <RadioWrapper>
                <Title>Data Structure : </Title>
                <Label>
                    <InputRadio
                        type="radio"
                        value="graph"
                        name="data-structure"
                        defaultChecked
                        onChange={() => setDataStructure("graph")}
                    />
                    graph
                </Label>

                <Label>
                    <InputRadio
                        type="radio"
                        value="tree"
                        name="data-structure"
                        onChange={() => setDataStructure("tree")}
                    />
                    tree
                </Label>
            </RadioWrapper>

            <ButtonWrapper margin="2em 0 0">
                <Gradientbox width="150px" height="auto">
                    <Button type="submit">next step</Button>
                </Gradientbox>
            </ButtonWrapper>
        </Form>
    );
};

export default ModalContent;
