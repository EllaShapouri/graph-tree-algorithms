import { Fragment, useState } from "react";
import { checkHeuristics } from "../../../../utils/chekHeuristics";
import ErrorText from "../../../Common/ErrorText";
import {
    ButtonInputFile,
    InputFile,
    LabelInputFile,
} from "../../../Common/InputFile";

const FileHeuristic = ({ run, nodes, edges }) => {
    const [valid, setValid] = useState(true);
    var heuristics = [];

    const showFile = (e) => {
        e.preventDefault();
        setValid(true);
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            try {
                const heuristicList = JSON.parse(reader.result);
                heuristics = checkHeuristics(heuristicList, nodes, edges);
                run(heuristics);
            } catch (error) {
                setValid(false);
            }
        };
        reader.onerror = (error) => {
            setValid(false);
        };
    };

    return (
        <Fragment>
            <ButtonInputFile>
                <LabelInputFile htmlFor="nodes"> upload +</LabelInputFile>
                <InputFile id="nodes" type="file" onChange={showFile} />
                {valid ? null : (
                    <ErrorText width="auto">heuristics are not valid</ErrorText>
                )}
            </ButtonInputFile>
        </Fragment>
    );
};

export default FileHeuristic;
