export const bfs = function (graph, start) {
    //A Queue to manage the nodes that have yet to be visited
    var queue = [];
    var resultQueue = [];
    // A Queue to manage the visited nodes in each step
    var visitedNodesAllSteps = [];
    var visitedNodesOneStep = [];

    var visitedEdgesAllSteps = [];
    var visitedEdgesOneStep = [];
    //Adding the node to start from
    queue.push(start);
    resultQueue.push(queueCopyEachStep(queue));
    //A boolean array indicating whether we have already visited a node
    var visited = [];
    //(The start node is already visited)
    visited[start] = true;
    visitedNodesOneStep.push(start);
    visitedNodesAllSteps.push(visitedNodesOneStep);
    visitedNodesOneStep = [];
    //While there are nodes left to visit...
    while (queue.length > 0) {
        // The shift() method removes the first element from an array and returns that removed element.
        var node = queue.shift();
        //...for all neighboring nodes that haven't been visited yet....
        for (var i = 1; i < graph[node].length; i++) {
            if (graph[node][i].value != -1 && !visited[i]) {
                visitedNodesOneStep.push(i);
                visitedEdgesOneStep.push(graph[node][i].id);
                // Do whatever you want to do with the node here.
                // Visit it, set the distance and add it to the queue
                visited[i] = true;
                queue.push(i);
            }
        }
        resultQueue.push(queueCopyEachStep(queue));
        visitedNodesAllSteps.push(visitedNodesOneStep);
        visitedNodesOneStep = [];
        visitedEdgesAllSteps.push(visitedEdgesOneStep);
        visitedEdgesOneStep = [];
    }
    return { resultQueue, visitedNodesAllSteps, visitedEdgesAllSteps };
};
const queueCopyEachStep = (queue) => {
    return [...queue];
};
