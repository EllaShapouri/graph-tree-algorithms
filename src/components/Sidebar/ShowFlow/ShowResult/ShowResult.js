import { useSelector } from "react-redux";
import BFScomponent from "../../../AlgorithmsComponent/BFS/BFScomponent";
import DFScomponent from "../../../AlgorithmsComponent/DFS/DFScomponent";

const ShowReault = () => {
    const algorithm = useSelector((state) => state.data.algorithm);
    const ENUM_ALGORITHMS = {
        BFS: <BFScomponent />,
        DFS: <DFScomponent />,
        DLS: <DFScomponent />,
        IDDFS: <DFScomponent />,
    };
    return <div>{ENUM_ALGORITHMS[algorithm.name]}</div>;
};

export default ShowReault;
