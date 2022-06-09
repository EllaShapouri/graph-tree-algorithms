import { Fragment, useEffect, useState } from "react";
import LabelForm from "./Forms/LabelForm";
import { useSelector } from "react-redux";
import DnDNodeContainer from "./DnDNode/DnDNodeContainer";

const GetFlowSidebar = () => {
    const selectedElement = useSelector((state) => state.flow.selectedElement);
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (selectedElement.id) {
            if (selectedElement.id.includes("node")) setStatus("node");
            else if (selectedElement.id.includes("edge")) setStatus("edge");
            else setStatus("");
        } else setStatus("");
    }, [selectedElement]);

    return (
        <Fragment>
            <DnDNodeContainer />

            {status === "edge" ? (
                <LabelForm label="set edge path :" placeholder="path" />
            ) : null}

            {status === "node" ? (
                <LabelForm label="change label of node :" placeholder="label" />
            ) : null}
        </Fragment>
    );
};

export default GetFlowSidebar;
