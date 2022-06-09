import { Aside, SidebarWrapper } from "./Sidebar.styled";
import GetFlowSidebar from "./GetFlow/GetFlowSidebar";

const Sidebar = () => {
    return (
        <Aside>
            <SidebarWrapper>
                <GetFlowSidebar />
            </SidebarWrapper>
        </Aside>
    );
};

export default Sidebar;
