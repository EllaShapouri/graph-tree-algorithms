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
import {
    setChangeElement,
    setDeleteElement,
    setSelectedElement,
} from "../../Redux/getFlowSlice";
import { DnDFlowStyled, DnDWrapper, FlowWrapper } from "./DnDFlow.styled";
import { useNavigate } from "react-router-dom";

import { defaultedges } from "./../../utils/edges";
import { defaultnodes } from "../../utils/nodes";

const DnDFlow = () => {
    const reactFlowWrapper = useRef(null);
    const selectedElement = useSelector((state) => state.flow.selectedElement);
    const deleteElement = useSelector((state) => state.flow.deleteElement);
    const changeElement = useSelector((state) => state.flow.changeElement);
    const algorithm = useSelector((state) => state.data.algorithm);
    const dataStructure = useSelector((state) => state.data.dataStructure);
    const initialNode = useSelector((state) => state.data.initialNode);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [nodes, setNodes, onNodesChange] = useNodesState(defaultnodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(defaultedges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onNodeClick = (event, node) => {
        dispatch(setSelectedElement(node));
    };
    const onEdgeClick = (event, edge) => {
        dispatch(setSelectedElement(edge));
    };

    useEffect(() => {
        if (!algorithm || !dataStructure) navigate("/");
    }, []);

    useEffect(() => {
        if (deleteElement) {
            deleteElementById(selectedElement.id);
            dispatch(setDeleteElement(false));
            dispatch(setSelectedElement({}));
        }
    }, [deleteElement, reactFlowInstance, selectedElement]);

    useEffect(() => {
        if (changeElement && selectedElement.id) {
            const elementId = selectedElement.id;
            const elementLabel = selectedElement.data.label;
            if (selectedElement.id.includes("node")) {
                setNodes((nds) => {
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
    }, [changeElement, setNodes, setEdges, selectedElement, reactFlowInstance]);

    const onConnect = (params) => {
        setEdges((eds) => {
            eds.map((edge) => (edge.selected = false));
            let newEds = [];
            // each node has just one parent in tree
            if (dataStructure === "tree") {
                newEds = eds.filter((edge) => params.target !== edge.target);
            } else {
                newEds = eds;
            }

            let id = "edge_0";
            if (newEds.length != 0) {
                const lastElementId = newEds[newEds.length - 1].id;
                const idNumber = lastElementId.replace(/^\D+/g, "");
                id = `edge_${parseInt(idNumber) + 1}`;
            }
            // just get the number
            const edge = { ...params, id, selected: true };
            dispatch(setSelectedElement(edge));
            return addEdge(edge, newEds);
        });
    };

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
            const lastElementId = nodes[nodes.length - 1].id;
            const idNumber = lastElementId.replace(/^\D+/g, "");
            const nodeId = parseInt(idNumber) + 1;
            const newNode = {
                id: `node_${nodeId}`,
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
        [reactFlowInstance, nodes]
    );

    const deleteElementById = (id) => {
        if (selectedElement.id.includes("node")) {
            setNodes((nds) => nds.filter((node) => node.id !== id));
        } else setEdges((eds) => eds.filter((edge) => edge.id !== id));
    };

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
                            deleteKeyCode={null}
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
