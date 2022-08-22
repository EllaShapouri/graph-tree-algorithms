import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    Controls,
    useEdgesState,
} from "react-flow-renderer";
import { DnDWrapper, FlowWrapper } from "./DnDFlow.styled";
import { useNavigate } from "react-router-dom";
import SidebarShowFlow from "../Sidebar/SidebarShowFlow";
import { ShowFlowStyled } from "./ShowFlow.styled";
import { setStep } from "../../Redux/algorithmResultSlice";

const ShowFlow = () => {
    const reactFlowWrapper = useRef(null);
    const step = useSelector((state) => state.result.step);
    const lastStep = useSelector((state) => state.result.lastStep);
    const nodeQueue = useSelector((state) => state.result.nodeQueue);
    const edgeQueue = useSelector((state) => state.result.edgeQueue);
    const initialNodes = useSelector((state) => state.flow.nodes);
    const initialEdges = useSelector((state) => state.flow.edges);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const elementsSelectable = false;

    useEffect(() => {
        if (initialNodes.length == 1 || initialEdges.length == 0) navigate("/");

        return () => {
            dispatch(setStep("start"));
        };
    }, []);

    useEffect(() => {
        if (step > -1 && step < lastStep && nodeQueue[step] !== undefined) {
            // get index of nodes that they was changed in this step
            const changedNodes = nodeQueue[step];
            // set visited className to visited edges and nodes
            changedNodes.forEach((changedNode) => {
                if (changedNode == 0) {
                    setNodes((nds) => {
                        nds[changedNode].className = "startNode visited";
                        return [...nds];
                    });
                } else {
                    setNodes((nds) => {
                        nds[changedNode].className = "visited";
                        return [...nds];
                    });
                }
            });
            if (step > 0 && step <= lastStep) {
                const changedEdges = edgeQueue[step - 1];
                changedEdges.forEach((changedEdge) => {
                    setEdges((eds) => {
                        return eds.map((edge) => {
                            if (edge.id === changedEdge) {
                                edge = { ...edge, className: "visited" };
                            }
                            return edge;
                        });
                    });
                });
            }
        }
    }, [step, setNodes, nodeQueue, edgeQueue, reactFlowInstance]);

    return (
        <DnDWrapper>
            <ShowFlowStyled>
                <ReactFlowProvider>
                    <FlowWrapper ref={reactFlowWrapper}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            deleteKeyCode={null}
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
