import { Aside, SidebarWrapper } from "./Sidebar.styled";
import GetFlowSidebar from "./GetFlow/GetFlowSidebar";
import DataAlgorithm from "./DataAlgorithm/DataAlgorithm";

const Sidebar = () => {
    return (
        <Aside>
            <SidebarWrapper>
                <DataAlgorithm />
                <GetFlowSidebar />
            </SidebarWrapper>
        </Aside>
    );
};

export default Sidebar;
