import { Aside, SidebarWrapper } from "./Sidebar.styled";
import GetFlowSidebar from "./GetFlow/GetFlowSidebar";
import DataAlgorithm from "./DataAlgorithm/DataAlgorithm";
import { useDispatch } from "react-redux";
import ValidateFlow from "../ValidateFlow/ValidateFlow";
import SpecificAlgorithms from "./GetFlow/SpecificAlgorithms";

const Sidebar = () => {
    return (
        <Aside>
            <SidebarWrapper>
                <DataAlgorithm />
                <SpecificAlgorithms/>
                <GetFlowSidebar />
            </SidebarWrapper>

            <ValidateFlow />
        </Aside>
    );
};

export default Sidebar;
