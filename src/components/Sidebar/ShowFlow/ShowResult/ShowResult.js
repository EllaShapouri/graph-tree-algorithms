import { Fragment } from "react";
import { useSelector } from "react-redux";
import BFScomponent from "../../../AlgorithmsComponent/BFS/BFScomponent";

const ShowReault = () => {
    const algorithm = useSelector((state) => state.data.algorithm);
    const ENUM_ALGORITHMS = {
        BFS: <BFScomponent />,
    };
    return <div>{ENUM_ALGORITHMS[algorithm.name]}</div>;
};

export default ShowReault;
