var resultQueue = [];
// A queue to manage the visited nodes in each step
var visitedNodesAllSteps = [];
var visitedNodesOneStep = [];
var visitedEdgesAllSteps = [];
var visitedEdgesOneStep = [];
var closeList = [];
var openList = [];
var graph,
    heuristic = [];

const setInitial = (g, h) => {
    graph = [...g];
    heuristic = [...h];
};

const setOpenList = (nodeObject) => {
    const node = { ...nodeObject };
    openList.push(node);
};

const sortOpenList = () => {
    openList.sort((a, b) => b.fx - a.fx);
};

const getLowestOpenList = () => {
    const openListArrey = [...openList];
    if (openListArrey.length > 0) {
        const value = openListArrey.pop();
        openList = [...openListArrey];
        return value;
    } else return null;
};

const getOpenList = () => {
    return [...openList];
};

const setVisitedEdge = (edgeID) => {
    visitedEdgesOneStep.push(edgeID);
};

const setVisitedEdges = () => {
    visitedEdgesAllSteps.push([...visitedEdgesOneStep]);
    visitedEdgesOneStep = [];
};

const setVisitedNode = (node) => {
    visitedNodesOneStep.push(node);
};

const setVisitedNodes = () => {
    visitedNodesAllSteps.push([...visitedNodesOneStep]);
    visitedNodesOneStep = [];
};

const setResultQueue = (bestNode, alterNode, limit, list) => {
    var resultObject = [bestNode, alterNode, limit, list];
    resultQueue.push([...resultObject]);
};

export const rbfs = (graph, start, goal, heuristic) => {
    setInitial(graph, heuristic);
    const startNode = {
        node: start,
        fx: heuristic[start] + 0,
        gx: 0,
    };
    setResultQueue(startNode, null, Infinity, [startNode]);
    const endResult = rbfsALgorithm(startNode, goal, Infinity);
    if (endResult.result !== "fail")
        return { resultQueue, visitedNodesAllSteps, visitedEdgesAllSteps };
};

const rbfsALgorithm = (start, goal, limit) => {
    setVisitedNode(start.node);
    if (start.node === goal) {
        setVisitedEdges();
        setVisitedNodes();
        return { result: start, limit };
    }
    var successors = [];
    for (var i = 0; i < graph[start.node].length; i++) {
        if (graph[start.node][i].value !== -1 && !closeList[i]) {
            setVisitedEdge(graph[start.node][i].id);
            const gx = start.gx + graph[start.node][i].value;
            const fx = heuristic[i] + gx;
            // const fx = Math.max(heuristic[i] + gx,start.fx )
            const frontier = {
                node: i,
                fx,
                gx,
            };
            successors.push({ ...frontier });
        }
    }
    closeList[start.node] = true;
    successors.forEach((s) => {
        if (!closeList[s.node]) setOpenList(s);
    });
    if (successors.length === 0) return { result: "fail", limit: Infinity };

    successors.map((s) => {
        if (!closeList[s.node]) {
            return { ...s, fx: Math.max(s.fx, start.fx) };
        }
    });
    successors.sort((a, b) => b.fx - a.fx);
    sortOpenList();
    setVisitedEdges();
    setVisitedNodes();
    while (true) {
        var openListSHow = getOpenList();
        var bestNode = getLowestOpenList();
        if (bestNode.fx > limit) return { result: "fail", limit: bestNode.fx };
        var alternativeNode = getLowestOpenList();
        var newLimit = limit;
        if (alternativeNode) {
            newLimit = Math.min(limit, alternativeNode.fx);
        }
        setResultQueue(bestNode, alternativeNode, newLimit, openListSHow);
        var resultobj = rbfsALgorithm(bestNode, goal, newLimit);
        setOpenList(bestNode);
        sortOpenList();
        limit = resultobj.limit;
        if (resultobj.result !== "fail") return resultobj;
    }
};
