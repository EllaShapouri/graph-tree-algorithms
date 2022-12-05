import { InputRadio, Label, RadioWrapper } from "../../../Common/InputRadio";
import { Title } from "../../../Common/Title";

const RadioInputFile = ({ setCreate, setFileFlowValid }) => {
    return (
        <RadioWrapper>
            <Title>Create : </Title>
            <Label>
                <InputRadio
                    type="radio"
                    value="draw"
                    name="create"
                    defaultChecked
                    onChange={() => {
                        setCreate("draw");
                        setFileFlowValid(true);
                    }}
                />
                drawing
            </Label>
            <Label>
                <InputRadio
                    type="radio"
                    value="file"
                    name="create"
                    onChange={() => {
                        setCreate("file");
                        setFileFlowValid(false);
                    }}
                />
                from file
            </Label>
        </RadioWrapper>
    );
};

export default RadioInputFile;
