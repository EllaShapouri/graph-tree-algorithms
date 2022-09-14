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
    var resualts = {};
    switch (algorithm) {
        case "BFS":
            // start node is always node_0
            resualts = bfs(matrix, 0);
            break;
        case "UCS":
            // goal node is always node_1
            resualts = ucs(matrix, 0, 1);
            break;
        case "RBFS":
            break;
        case "DFS":
            resualts = dfs(matrix, 0);
            break;
        case "DLS":
            resualts = dls(matrix, 0, depth);
            break;
        case "IDDFS":
            resualts = iddfs(matrix, 0);
            break;
        case "BIDIRECTIONAL":
            resualts = bidirectional(matrix, 0, 1);
            break;
        case "A":
            resualts = a(matrix, 0, 1, heuristic);
            break;
        case "GBFS":
            resualts = gbfs(matrix, 0, 1, heuristic);
            break;
        case "RBFS":
            resualts = rbfs(matrix, 0, 1, heuristic);
            break;

        default:
            break;
    }
    return resualts;
};
