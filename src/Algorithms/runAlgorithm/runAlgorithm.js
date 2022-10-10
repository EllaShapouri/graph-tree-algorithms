import { a } from "../A/A";
import { bfs } from "../BFS/BFS";
import { bidirectional } from "../BIDIRECTIONAL/BIDIRECTIONAL";
import { dfs } from "../DFS/DFS";
import { dls } from "../DLS/DLS";
import { gbfs } from "../GBFS/GBFS";
import { iddfs } from "../IDDFS/IDDFS";
import { rbfs } from "../RBFS/RBFS";
import { ucs } from "../UCS/UCS";

export const runAlgorithm = (algorithm, matrix, depth, heuristic) => {
    var results = {};
    switch (algorithm) {
        case "BFS":
            // start node is always node_0
            results = bfs(matrix, 0);
            break;
        case "UCS":
            // goal node is always node_1
            results = ucs(matrix, 0, 1);
            break;
        case "DFS":
            results = dfs(matrix, 0);
            break;
        case "DLS":
            results = dls(matrix, 0, depth);
            break;
        case "IDDFS":
            results = iddfs(matrix, 0);
            break;
        case "BIDIRECTIONAL":
            results = bidirectional(matrix, 0, 1);
            break;
        case "A":
            results = a(matrix, 0, 1, heuristic);
            break;
        case "GBFS":
            results = gbfs(matrix, 0, 1, heuristic);
            break;
        case "RBFS":
            results = rbfs(matrix, 0, 1, heuristic);
            break;

        default:
            break;
    }
    return results;
};
