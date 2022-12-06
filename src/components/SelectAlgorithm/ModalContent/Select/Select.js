import { Fragment } from "react";
import { Title } from "../../../Common/Title";
import { Option, Select } from "./Select.styled";

const SelectComponent = ({ algorithm, setAlgorithm }) => {
    return (
        <Fragment>
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
                <Option value="A">A*</Option>
                <Option value="GBFS">Greedy Best First Search - GBFS</Option>
                <Option value="RBFS">Recursive Best First Search - RBFS</Option>
            </Select>
        </Fragment>
    );
};

export default SelectComponent;
