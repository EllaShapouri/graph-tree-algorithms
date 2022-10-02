import { Fragment } from "react";
import { useSelector } from "react-redux";
import DepthForm from "./Forms/DepthForm";

const SpecificAlgorithms = () => {
    const algorithm = useSelector((state) => state.data.algorithm);
    return (
        <Fragment>{algorithm.name === "DLS" ? <DepthForm /> : null}</Fragment>
    );
};

export default SpecificAlgorithms;
