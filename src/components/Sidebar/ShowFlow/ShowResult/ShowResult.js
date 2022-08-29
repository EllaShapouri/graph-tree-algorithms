import { useSelector } from "react-redux";
import BFScomponent from "../../../AlgorithmsComponent/BFS/BFScomponent";
import BIDIRECTIONALcomponent from "../../../AlgorithmsComponent/BIDIRECTIONAL/BIDIRECTIONALcomponent";
import DFScomponent from "../../../AlgorithmsComponent/DFS/DFScomponent";
import IDDFScomponent from "../../../AlgorithmsComponent/IDDFS/IDDFScomponent";
import UCScomponent from "../../../AlgorithmsComponent/UCS/UCScomponent";

const ShowReault = () => {
    const algorithm = useSelector((state) => state.data.algorithm);
    const ENUM_ALGORITHMS = {
        BFS: <BFScomponent />,
        DFS: <DFScomponent />,
        DLS: <DFScomponent />,
        IDDFS: <IDDFScomponent />,
        UCS: <UCScomponent />,
        BIDIRECTIONAL: <BIDIRECTIONALcomponent />,
    };
    return <div>{ENUM_ALGORITHMS[algorithm.name]}</div>;
};

export default ShowReault;
