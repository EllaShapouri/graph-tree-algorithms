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
    const result = useSelector((state) => state.result.result);
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
        if (initialNodes.length === 1 || initialEdges.length === 0)
            navigate("/");

        return () => {
            dispatch(setStep("start"));
        };
    }, []);

    useEffect(() => {
        if (step > -1 && step < lastStep && nodeQueue[step] !== undefined) {
            if (result[step].length > 0) {
                const changedNodes = nodeQueue[step];
                // set visited className to visited edges and nodes
                changedNodes.forEach((changedNode) => {
                    setClassNamesNodes("visited", changedNode);
                });
                if (step > 0 && step <= lastStep) {
                    const changedEdges = edgeQueue[step - 1];
                    changedEdges.forEach((changedEdge) => {
                        setClassNamesEdges("visited", changedEdge);
                    });
                }
            } else if (step < lastStep - 1) {
                console.log("in the else");
                nodes.map((node, index) => setClassNamesNodes("", index));
                edges.map((edge, index) => setClassNamesEdges("", edge.id));
            }
        }
    }, [step, nodeQueue, edgeQueue, reactFlowInstance]);

    const setClassNamesEdges = (className, changedEdge) => {
        setEdges((eds) => {
            return eds.map((edge) => {
                if (edge.id === changedEdge) {
                    edge = { ...edge, className: className };
                }
                return edge;
            });
        });
    };

    const setClassNamesNodes = (className, changedNode) => {
        setNodes((nds) => {
            if (nodes[changedNode].className.includes("StartNode")) {
                nds[changedNode].className = `StartNode ${className}`;
                return [...nds];
            } else if (nodes[changedNode].className.includes("GoalNode")) {
                nds[changedNode].className = `GoalNode ${className}`;
                return [...nds];
            } else {
                nds[changedNode].className = `${className}`;
                return [...nds];
            }
        });
    };

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
