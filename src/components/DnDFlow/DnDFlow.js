import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactFlow, {
    ReactFlowProvider,
    useNodesState,
    Controls,
    useEdgesState,
    addEdge,
    BezierEdge,
} from "react-flow-renderer";

import Sidebar from "../Sidebar/Sidebar";
import { setChangeElement, setSelectedElement } from "../../Redux/mainSlice";
import { DnDFlowStyled, DnDWrapper, FlowWrapper } from "./DnDFlow.styled";

const initialNodes = [];

let id = 0;
const getId = () => `node_${id++}`;

const DnDFlow = () => {
    const reactFlowWrapper = useRef(null);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const selectedElement = useSelector((state) => state.flow.selectedElement);
    const changeElement = useSelector((state) => state.flow.changeElement);
    const dispatch = useDispatch();

    const onNodeClick = (event, node) => {
        dispatch(setSelectedElement(node));
    };
    const onEdgeClick = (event, edge) => {
        dispatch(setSelectedElement(edge));
    };

    useEffect(() => {
        if (changeElement && selectedElement.id) {
            const elementId = selectedElement.id;
            const elementLabel = selectedElement.data.label;
            console.log("nodesa", nodes);
            if (selectedElement.id.includes("node")) {
                setNodes((nds) => {
                    console.log("nds", nds);
                    return nds.map((node) => {
                        if (node.id === elementId) {
                            node.data = {
                                ...node.data,
                                label: elementLabel,
                            };
                        }
                        return node;
                    });
                });
                dispatch(setChangeElement(false));
            } else if (selectedElement.id.includes("edge")) {
                setEdges((eds) => {
                    return eds.map((edge) => {
                        if (edge.id === elementId) {
                            edge.label = elementLabel;
                        }
                        return edge;
                    });
                });
                dispatch(setChangeElement(false));
            } else return;
        } else return;
    }, [changeElement, setNodes, setEdges, selectedElement]);

    const onConnect = (params) =>
        setEdges((eds) => {
            eds.map((edge) => (edge.selected = false));
            const id = `edge_${edges.length + 1}`;
            const edge = { ...params, id, selected: true };
            dispatch(setSelectedElement(edge));
            return addEdge(edge, eds);
        });

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();
            const reactFlowBounds =
                reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData("application/reactflow");
            // check if the dropped element is valid
            if (typeof type === "undefined" || !type) {
                return;
            }
            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type: "default",
                position,
                data: { label: `${type} node` },
            };
            setNodes((nds) => {
                nds.map((node) => {
                    node.selected = false;
                });
                return nds.concat({ ...newNode, selected: true });
            });
            dispatch(setSelectedElement(newNode));
        },
        [reactFlowInstance]
    );

    const onPaneClick = () => {
        dispatch(setSelectedElement({}));
    };

    const edgeTypes = useMemo(() => ({ default: BezierEdge }), []);

    return (
        <DnDWrapper>
            <DnDFlowStyled>
                <ReactFlowProvider>
                    <FlowWrapper ref={reactFlowWrapper}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            onInit={setReactFlowInstance}
                            onDrop={onDrop}
                            onPaneClick={onPaneClick}
                            onDragOver={onDragOver}
                            className="touchdevice-flow"
                            fitView
                            onNodeClick={onNodeClick}
                            onEdgeClick={onEdgeClick}
                            edgeTypes={edgeTypes}
                        >
                            <Controls />
                        </ReactFlow>
                    </FlowWrapper>
                    <Sidebar />
                </ReactFlowProvider>
            </DnDFlowStyled>
        </DnDWrapper>
    );
};

export default DnDFlow;
