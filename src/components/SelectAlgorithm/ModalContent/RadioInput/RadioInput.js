import { InputRadio, Label, RadioWrapper } from "../../../Common/InputRadio";
import { Title } from "../../../Common/Title";

const RadioInput = ({ setDataStructure }) => {
    return (
        <RadioWrapper>
            <Title>Data Structure : </Title>
            <Label>
                <InputRadio
                    type="radio"
                    value="graph"
                    name="data-structure"
                    defaultChecked
                    onChange={() => setDataStructure("graph")}
                />
                graph
            </Label>

            <Label>
                <InputRadio
                    type="radio"
                    value="tree"
                    name="data-structure"
                    onChange={() => setDataStructure("tree")}
                />
                tree
            </Label>
        </RadioWrapper>
    );
};

export default RadioInput;
