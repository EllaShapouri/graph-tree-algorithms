import { bfs } from "../BFS/BFS";
import { dfs } from "../DFS/DFS";
import { dls } from "../DLS/DLS";
import { iddfs } from "../IDDFS/IDDFS";
import { ucs } from "../UCS/UCS";

export const runAlgorithm = (algorithm, matrix, depth) => {
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
        case "A*":
            break;

        default:
            break;
    }
    return resualts;
};
