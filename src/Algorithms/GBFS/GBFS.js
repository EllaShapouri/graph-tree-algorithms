export const gbfs = function (graph, start, goal,heuristic) {
    //A queue to manage the nodes that have yet to be visited
    var frontier = { node: start, fx: heuristic[0], path: [] };
    var frontierQueue = [];
    var resultQueue = [];

    // A queue to manage the visited nodes in each step
    var visitedNodesAllSteps = [];
    var visitedNodesOneStep = [];

    var visitedEdgesAllSteps = [];
    var visitedEdgesOneStep = [];
    //Adding the node to start from
    frontierQueue.push({ ...frontier });
    //A boolean array indicating whether we have already visited a node
    var visited = [];

    while (frontierQueue.length > 0) {
        frontierQueue.sort((a, b) => b.fx - a.fx);
        resultQueue.push([...frontierQueue]);
        const expanded = frontierQueue[frontierQueue.length - 1];
        frontierQueue = frontierQueue.slice(0, frontierQueue.length - 1);
        const node = expanded.node;

        visited[node] = true;
        visitedNodesOneStep.push(node);
        // if (graph[node][lastNode].value !== -1)

        if (node === goal) {
            visitedNodesAllSteps.push([...visitedNodesOneStep]);
            visitedNodesOneStep = [];
            visitedEdgesAllSteps.push([...visitedEdgesOneStep]);
            visitedEdgesOneStep = [];
            // solution is when the target is the shortest cost element in frontier :)
            return { resultQueue, visitedNodesAllSteps, visitedEdgesAllSteps };
        }

        //...for all neighboring nodes that haven't been visited yet....
        for (var i = 0; i < graph[node].length; i++) {
            if (graph[node][i].value != -1 && !visited[i]) {
                visitedEdgesOneStep.push(graph[node][i].id);
                const fx = heuristic[i];
                frontier = {
                    node: i,
                    fx,
                    path: [...expanded.path, expanded.node],
                };
                frontierQueue.push({ ...frontier });
            }
        }

        visitedNodesAllSteps.push([...visitedNodesOneStep]);
        visitedNodesOneStep = [];
        visitedEdgesAllSteps.push([...visitedEdgesOneStep]);
        visitedEdgesOneStep = [];
    }
};
