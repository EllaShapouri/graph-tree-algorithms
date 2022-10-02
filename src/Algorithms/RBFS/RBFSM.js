var frontierQueue = [];
var resultQueue = [];
// A queue to manage the visited nodes in each step
var visitedNodesAllSteps = [];
var visitedNodesOneStep = [];
var visitedEdgesAllSteps = [];
var visitedEdgesOneStep = [];
var visited = [];
var closeList = [];
var openList = [];

export const rbfs = (graph, start, goal, limit, heuristic) => {
    console.log("in here");
    visitedEdgesOneStep = [];
    visitedNodesOneStep = [];
    if (start === 0) {
        start = {
            node: start,
            fx: heuristic[start] + 0,
            gx: 0,
            path: [],
        };
    }
    var goalSucc = false;
    visitedNodesOneStep.push(start);
    console.log(
        "in here after push start to visitedNodesOneStep",
        visitedNodesOneStep
    );
    if (start === goal) {
        goalSucc = true;
        console.log("in if aproach goal");
    } else {
        console.log("in else not aproach goal");
        var successors = [];
        for (var i = 0; i < graph[start.node].length; i++) {
            if (graph[start.node][i].value != -1 && !visited[i]) {
                visitedEdgesOneStep.push(graph[start.node][i].id);
                const gx = start.gx + graph[start.node][i].value;
                const fx = heuristic[i] + gx;
                const frontier = {
                    node: i,
                    fx,
                    gx,
                    path: [...start.path, start.node],
                };
                successors.push({ ...frontier });
            }
        }
        console.log("edges visited", visitedEdgesOneStep);
        console.log("successores", successors);
        successors.sort((a, b) => b.fx - a.fx);
        console.log("successores sort", successors);
        if (successors[0].fx > limit) return successors[0];
        else {
            console.log("successores [0] < limit", successors[0].fx, limit);
            closeList[start] = true;
            successors.forEach((s) => {
                if (!closeList[s.node]) openList.push(s);
            });
            openList.sort((a, b) => b.fx - a.fx);
            console.log("open list", openList);
            var bestNode = openList[openList.length - 1];
            openList = openList.slice(0, openList.length - 1);
            var alternativeNode = openList[openList.length - 1];
            openList = openList.slice(0, openList.length - 1);
            console.log("bestNode,alternativeNode", bestNode, alternativeNode);
            while (!goalSucc) {
                console.log("in while");
                bestNode = rbfs(
                    graph,
                    bestNode,
                    goal,
                    Math.min(limit, alternativeNode.fx),
                    heuristic
                );
                openList.push(bestNode);
                openList.sort((a, b) => b.fx - a.fx);
                bestNode = openList[openList.length - 1];
                openList = openList.slice(0, openList.length - 1);
                alternativeNode = openList[openList.length - 1];
                openList = openList.slice(0, openList.length - 1);
                visitedNodesAllSteps.push([...visitedNodesOneStep]);
                visitedNodesOneStep = [];
                visitedEdgesAllSteps.push([...visitedEdgesOneStep]);
                visitedEdgesOneStep = [];
                resultQueue.push({ openList, bestNode, alternativeNode });
            }
        }
    }
    visitedNodesAllSteps.push([...visitedNodesOneStep]);
    visitedNodesOneStep = [];
    visitedEdgesAllSteps.push([...visitedEdgesOneStep]);
    visitedEdgesOneStep = [];
    console.log(resultQueue);
    return { resultQueue, visitedNodesAllSteps, visitedEdgesAllSteps };
};

const shiftMethod = () => {
    const expanded = openList[openList.length - 1];
    openList = openList.slice(0, openList.length - 1);
    return expanded;
};
