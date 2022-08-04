import { Aside, SidebarWrapper } from "./Sidebar.styled";
import GetFlowSidebar from "./GetFlow/GetFlowSidebar";
import DataAlgorithm from "./DataAlgorithm/DataAlgorithm";
import { useDispatch } from "react-redux";
import ValidateFlow from "../ValidateFlow/ValidateFlow";

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <Aside>
            <SidebarWrapper>
                <DataAlgorithm />
                <GetFlowSidebar />
            </SidebarWrapper>

            <ValidateFlow />
        </Aside>
    );
};

export default Sidebar;
