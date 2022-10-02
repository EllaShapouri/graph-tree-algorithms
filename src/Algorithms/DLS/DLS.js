var graphFlow;
var visited = [];

//A Queue to manage the nodes that have yet to be visited
var stack = [];
var resultQueue = [];

// A Queue to manage the visited nodes in each step
var visitedNodesAllSteps = [];
var visitedNodesOneStep = [];

var visitedEdgesAllSteps = [];
var visitedEdgesOneStep = [];

var depth = 0;

export const dls = (graph, start, limit) => {
    graphFlow = [...graph];
    stack.push(start);
    resultQueue.push([...stack]);

    while (stack.length !== 0) {
        var curNode = stack[stack.length - 1];
        visited[curNode] = true;
        visitedEdgesOneStep = [];
        visitedNodesOneStep = [];
        visitedNodesOneStep.push(curNode);
        let adjacentNode = getFirstUnvistedNode(curNode, limit);
        if (adjacentNode !== false) {
            stack.push(adjacentNode);
        } else {
            stack.pop();
            depth--;
        }
        visitedEdgesAllSteps.push([...visitedEdgesOneStep]);
        visitedNodesAllSteps.push([...visitedNodesOneStep]);
        resultQueue.push([...stack]);
    }
    return { resultQueue, visitedNodesAllSteps, visitedEdgesAllSteps };
};

const getFirstUnvistedNode = (curNode, limit) => {
    if (depth < limit) {
        for (let i = 0; i < graphFlow[curNode].length; i++) {
            let newAdjacentNode = graphFlow[curNode][i];
            if (newAdjacentNode.value !== -1 && !visited[i]) {
                visitedEdgesOneStep.push(newAdjacentNode.id);
                depth++;
                return i;
            }
        }
    }
    return false;
};
