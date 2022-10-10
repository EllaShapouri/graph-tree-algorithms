import { Aside, SidebarWrapper } from "./Sidebar.styled";
import DataAlgorithm from "./DataAlgorithm/DataAlgorithm";
import ShowReault from "./ShowFlow/ShowResult/ShowResult";
import ShowFlowButton from "./ShowFlow/ShowFlowButton/ShowFlowButton";
import { setStep } from "../../Redux/algorithmResultSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SidebarShowFlow = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(setStep("start"));
        };
    }, []);
    return (
        <Aside>
            <SidebarWrapper>
                <DataAlgorithm />
                <ShowFlowButton />
                <ShowReault />
            </SidebarWrapper>
        </Aside>
    );
};

export default SidebarShowFlow;
