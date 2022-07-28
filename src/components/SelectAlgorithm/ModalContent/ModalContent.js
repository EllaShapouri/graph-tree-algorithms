import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    setSelectedAlgorithm,
    setSelectedDataStructure,
} from "../../../Redux/dataSlice";
import Button from "../../Button/Button";
import { Gradientbox } from "../../Common/Gradientbox";
import { Title } from "../../Common/Title";
import {
    Form,
    InputRadio,
    Label,
    Option,
    RadioWrapper,
    Select,
    FormButtonWrapper,
} from "./ModalContent.styled";

const ModalContent = (props) => {
    console.log("props", props);

    const [dataStructure, setDataStructure] = useState("graph");
    const [algorithm, setAlgorithm] = useState("BFS");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const dataModal = (e) => {
        e.preventDefault();
        // store in redux
        dispatch(setSelectedAlgorithm(algorithm));
        dispatch(setSelectedDataStructure(dataStructure));
        navigate("/getflow");
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
                <Option value="RBFS">RBFS</Option>
                <Option value="UCS">Uniform Cost Search - UCS</Option>
                <Option value="DFS">Depth-first Search</Option>
                <Option value="A*">A*</Option>
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

            <FormButtonWrapper>
                <Gradientbox width="150px" height="auto">
                    <Button type="submit">next step</Button>
                </Gradientbox>
            </FormButtonWrapper>
        </Form>
    );
};

export default ModalContent;
