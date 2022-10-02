import { useSelector } from "react-redux";
import Acomponent from "../../../AlgorithmsComponent/A/Acomponent";
import BFScomponent from "../../../AlgorithmsComponent/BFS/BFScomponent";
import BIDIRECTIONALcomponent from "../../../AlgorithmsComponent/BIDIRECTIONAL/BIDIRECTIONALcomponent";
import DFScomponent from "../../../AlgorithmsComponent/DFS/DFScomponent";
import GBFScomponent from "../../../AlgorithmsComponent/GBFS/GBFScomponent";
import IDDFScomponent from "../../../AlgorithmsComponent/IDDFS/IDDFScomponent";
import RBFScomponent from "../../../AlgorithmsComponent/RBFS/RBFScomponent";
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
        A: <Acomponent />,
        GBFS: <GBFScomponent />,
        RBFS: <RBFScomponent />,
    };
    return <div>{ENUM_ALGORITHMS[algorithm.name]}</div>;
};

export default ShowReault;
