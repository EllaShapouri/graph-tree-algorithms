export const ucs = function (graph, start, goal) {
    //A queue to manage the nodes that have yet to be visited
    var frontier = { node: start, cost: 0, path: [] };
    var frontierQueue = [];
    var resultQueue = [];
    var lastNode = 0;

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
        frontierQueue.sort((a, b) => b.cost - a.cost);
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
                const cost = expanded.cost + graph[node][i].value;
                frontier = {
                    node: i,
                    cost,
                    path: [...expanded.path, expanded.node],
                };
                frontierQueue.push({ ...frontier });
            }
        }

        visitedNodesAllSteps.push([...visitedNodesOneStep]);
        visitedNodesOneStep = [];
        visitedEdgesAllSteps.push([...visitedEdgesOneStep]);
        visitedEdgesOneStep = [];
        lastNode = node;
    }
};
