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

export const dfs = (graph, start, goal) => {
    graphFlow = [...graph];
    stack.push(start);
    resultQueue.push([...stack]);

    while (stack.length !== 0) {
        var curNode = stack[stack.length - 1];
        visited[curNode] = true;
        visitedEdgesOneStep = [];
        visitedNodesOneStep = [];
        visitedNodesOneStep.push(curNode);
        if (curNode === goal) {
            visitedEdgesAllSteps.push([...visitedEdgesOneStep]);
            visitedNodesAllSteps.push([...visitedNodesOneStep]);
            resultQueue.push([...stack]);
            return { resultQueue, visitedNodesAllSteps, visitedEdgesAllSteps };
        }
        let adjacentNode = getFirstUnvistedNode(curNode);
        if (adjacentNode !== false) {
            stack.push(adjacentNode);
        } else {
            stack.pop();
        }
        visitedEdgesAllSteps.push([...visitedEdgesOneStep]);
        visitedNodesAllSteps.push([...visitedNodesOneStep]);
        resultQueue.push([...stack]);
    }
    return { resultQueue, visitedNodesAllSteps, visitedEdgesAllSteps };
};

const getFirstUnvistedNode = (curNode) => {
    for (let i = 0; i < graphFlow[curNode].length; i++) {
        let newAdjacentNode = graphFlow[curNode][i];
        if (newAdjacentNode.value !== -1 && !visited[i]) {
            visitedEdgesOneStep.push(newAdjacentNode.id);
            return i;
        }
    }
    return false;
};
