// A Queue to manage the visited nodes in each step
var visitedNodesAllSteps = [];
var visitedNodesOneStep = [];

var visitedEdgesAllSteps = [];
var visitedEdgesOneStep = [];

var resultQueue = [];
// Booleanean array for BFS started from
// source and target(front and backward BFS)
// for keeping track on visited nodes
var startVisitedQueue = [];
var targetVisitedQueue = [];

// queue for front and backward search
var startQueue = [];
var targetQueue = [];

// Keep track on parents of nodes
// for front and backward search
var startParent = [];
var targetParent = [];

var intersectNode = -1;

export const bidirectional = function (graph, start, target) {
    for (let i = 0; i < graph.length; i++) {
        startVisitedQueue[i] = false;
        targetVisitedQueue[i] = false;
    }

    startQueue.push(start);
    startVisitedQueue[start] = true;
    startParent[start] = -1;
    visitedNodesOneStep.push(start);
    targetQueue.push(target);
    targetVisitedQueue[target] = true;
    targetParent[target] = -1;
    visitedNodesOneStep.push(target);
    visitedNodesAllSteps.push(visitedNodesOneStep);
    visitedNodesOneStep = [];

    var result = [-1, intersectNode];
    resultQueue.push([...result]);

    var path = [];

    while (startQueue.length !== 0 && targetQueue.length !== 0) {
        // Do BFS from source and target vertices
        bfs(graph, startQueue, startVisitedQueue, startParent);
        bfs(graph, targetQueue, targetVisitedQueue, targetParent);

        intersectNode = isIntersecting(
            graph,
            startVisitedQueue,
            targetVisitedQueue
        );

        if (intersectNode != -1) {
            path = printPath(
                startParent,
                targetParent,
                start,
                target,
                intersectNode
            );
            result = [[...path], intersectNode];
            resultQueue.push([...result]);
            visitedNodesAllSteps.push(visitedNodesOneStep);
            visitedNodesOneStep = [];
            visitedEdgesAllSteps.push(visitedEdgesOneStep);
            visitedEdgesOneStep = [];
            return { resultQueue, visitedNodesAllSteps, visitedEdgesAllSteps };
        }
        resultQueue.push([...result]);
        visitedNodesAllSteps.push(visitedNodesOneStep);
        visitedNodesOneStep = [];
        visitedEdgesAllSteps.push(visitedEdgesOneStep);
        visitedEdgesOneStep = [];
    }

    return { resultQueue, visitedNodesAllSteps, visitedEdgesAllSteps };
};

const bfs = (graph, queue, visitedNodes, parent) => {
    var node = queue.shift();

    for (let i = 1; i < graph[node].length; i++) {
        if (graph[node][i].value != -1 && !visitedNodes[i]) {
            // Do whatever you want to do with the node here.
            // Visit it, set the distance and add it to the queue
            visitedNodes[i] = true;
            queue.push(i);
            parent[i] = node;
            visitedNodesOneStep.push(i);
            visitedEdgesOneStep.push(graph[node][i].id);
        }
    }
};

const isIntersecting = (graph, startVisitedQueue, targetVisitedQueue) => {
    for (let i = 0; i < graph.length; i++) {
        // if a vertex is visited by both front
        // and back BFS search return that node
        // else return -1
        if (startVisitedQueue[i] && targetVisitedQueue[i]) return i;
    }
    return -1;
};

const printPath = (startParent, targetParent, start, target, intersectNode) => {
    var pathList = [];
    pathList.push(intersectNode);
    let i = intersectNode;
    while (i != start) {
        pathList.push(startParent[i]);
        i = startParent[i];
    }

    pathList.reverse();

    i = intersectNode;
    while (i != target) {
        pathList.push(targetParent[i]);
        i = targetParent[i];
    }

    return pathList;
};
