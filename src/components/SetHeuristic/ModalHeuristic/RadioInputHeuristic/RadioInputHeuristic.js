import { InputRadio, Label, RadioWrapper } from "../../../Common/InputRadio";
import { Title } from "../../../Common/Title";

const RadioInputHeuristic = ({ setType }) => {
    return (
        <RadioWrapper>
            <Title>get heuristics from : </Title>
            <Label>
                <InputRadio
                    type="radio"
                    value="file"
                    name="create"
                    defaultChecked
                    onChange={() => {
                        setType("file");
                    }}
                />
                file
            </Label>
            <Label>
                <InputRadio
                    type="radio"
                    value="input"
                    name="create"
                    onChange={() => {
                        setType("input");
                    }}
                />
                inputs
            </Label>
        </RadioWrapper>
    );
};

export default RadioInputHeuristic;
