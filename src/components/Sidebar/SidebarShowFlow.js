import { Aside, SidebarWrapper } from "./Sidebar.styled";
import DataAlgorithm from "./DataAlgorithm/DataAlgorithm";
import { useDispatch } from "react-redux";

const SidebarShowFlow = () => {
    const dispatch = useDispatch();
    return (
        <Aside>
            <SidebarWrapper>
                <DataAlgorithm />
            </SidebarWrapper>
        </Aside>
    );
};

export default SidebarShowFlow;
