import { useSelector } from "react-redux";
import BFScomponent from "../../../AlgorithmsComponent/BFS/BFScomponent";
import DFScomponent from "../../../AlgorithmsComponent/DFS/DFScomponent";
import UCScomponent from "../../../AlgorithmsComponent/UCS/UCScomponent";

const ShowReault = () => {
    const algorithm = useSelector((state) => state.data.algorithm);
    const ENUM_ALGORITHMS = {
        BFS: <BFScomponent />,
        DFS: <DFScomponent />,
        DLS: <DFScomponent />,
        IDDFS: <DFScomponent />,
        UCS: <UCScomponent />,
    };
    return <div>{ENUM_ALGORITHMS[algorithm.name]}</div>;
};

export default ShowReault;
