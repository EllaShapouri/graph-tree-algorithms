import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    Controls,
    useEdgesState,
} from "react-flow-renderer";
import { DnDFlowStyled, DnDWrapper, FlowWrapper } from "./DnDFlow.styled";
import { useNavigate } from "react-router-dom";
import SidebarShowFlow from "../Sidebar/SidebarShowFlow";
import { ShowFlowStyled } from "./ShowFlow.styled";

const ShowFlow = () => {
    const reactFlowWrapper = useRef(null);
    const algorithm = useSelector((state) => state.data.algorithm);
    const dataStructure = useSelector((state) => state.data.dataStructure);
    const initialNodes = useSelector((state) => state.flow.nodes);
    const initialEdges = useSelector((state) => state.flow.edges);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const elementsSelectable = false;

    useEffect(() => {
        if (initialNodes.length == 0 || initialEdges.length == 0) navigate("/");
    }, []);

    return (
        <DnDWrapper>
            <ShowFlowStyled>
                <ReactFlowProvider>
                    <FlowWrapper ref={reactFlowWrapper}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onInit={setReactFlowInstance}
                            className="touchdevice-flow"
                            fitView
                            elementsSelectable={elementsSelectable}
                        >
                            <Controls />
                        </ReactFlow>
                    </FlowWrapper>
                    <SidebarShowFlow />
                </ReactFlowProvider>
            </ShowFlowStyled>
        </DnDWrapper>
    );
};

export default ShowFlow;
