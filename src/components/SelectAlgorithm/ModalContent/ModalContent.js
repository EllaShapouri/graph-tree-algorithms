import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSelectedData } from "../../../Redux/dataSlice";
import Button from "../../Button/Button";
import { ButtonWrapper } from "../../Button/Button.styled";
import { Form } from "../../Common/Form";
import { Gradientbox } from "../../Common/Gradientbox";
import { ModalWrapper } from "../../Common/StyledModal";
import Getdatafile from "./Getdatafile/Getdatafile";
import RadioInput from "./RadioInput/RadioInput";
import RadioInputFile from "./RadioInput/RadioInutFile";
import SelectComponent from "./Select/Select";

const ModalContent = () => {
    const [dataStructure, setDataStructure] = useState("graph");
    const [algorithm, setAlgorithm] = useState("BFS");
    const [create, setCreate] = useState("draw");
    const [fileFlowValid, setFileFlowValid] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const dataModal = (e) => {
        e.preventDefault();
        // store in redux
        dispatch(setSelectedData({ algorithm, create, dataStructure }));
        navigate("/getflow", { replace: true });
    };

    return (
        <ModalWrapper>
            <Form onSubmit={dataModal}>
                <SelectComponent
                    algorithm={algorithm}
                    setAlgorithm={setAlgorithm}
                />
                <RadioInput setDataStructure={setDataStructure} />
                <RadioInputFile
                    setCreate={setCreate}
                    setFileFlowValid={setFileFlowValid}
                />

                {create === "file" ? (
                    <Getdatafile setFileFlowValid={setFileFlowValid} />
                ) : null}
                {fileFlowValid ? (
                    <ButtonWrapper margin="2em 0 0">
                        <Gradientbox width="150px" height="auto">
                            <Button type="submit">next step</Button>
                        </Gradientbox>
                    </ButtonWrapper>
                ) : null}
            </Form>
        </ModalWrapper>
    );
};

export default ModalContent;
