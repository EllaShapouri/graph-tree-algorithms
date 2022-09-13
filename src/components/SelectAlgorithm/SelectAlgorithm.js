import { useState } from "react";
import Button from "../Button/Button";
import { Gradientbox } from "../Common/Gradientbox";
import { StyledModal } from "../Common/StyledModal";
import ModalContent from "./ModalContent/ModalContent";
import { ButtonWrapper } from "./SelectAlgorithm.styled";

const SelectAlgorithm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (e) => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <ButtonWrapper>
                <Gradientbox width="150px" height="auto">
                    <Button onClick={toggleModal}>start</Button>
                </Gradientbox>
            </ButtonWrapper>
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
            >
                <ModalContent />
            </StyledModal>
        </div>
    );
};

export default SelectAlgorithm;
