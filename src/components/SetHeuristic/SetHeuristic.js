import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetShowHeuristic } from "../../Redux/getFlowSlice";
import { StyledModal } from "../Common/StyledModal";
import ModalHeuristic from "./ModalHeuristic/ModalHeuristic";

const SetHeuristic = () => {
    const openModal = useSelector((state) => state.flow.showHeuristic);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const toggleModal = (e) => {
        setOpen(false);
        dispatch(SetShowHeuristic(false));
    };

    useEffect(() => {
        if (openModal) setOpen(openModal);
    }, [openModal]);

    return (
        <Fragment>
            <StyledModal
                isOpen={open}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
            >
                <ModalHeuristic />
            </StyledModal>
        </Fragment>
    );
};

export default SetHeuristic;
