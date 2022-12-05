import { createMatrixHeuristics } from "./matrixHeuristic";

export const checkHeuristics = (heuristics, nodes, edges) => {
    for (let index = 0; index < heuristics.length; index++) {
        var value = parseInt(heuristics[index]);
        if (!Number.isInteger(parseInt(value))) throw "heuristics are not vlid";
        heuristics[index] = value;
    }
    if (!Array.isArray(heuristics) || heuristics.length !== nodes.length)
        throw "heuristics are not vlid";

    // const matrix = createMatrixHeuristics(nodes, edges);
    // check heuristics
    // var status = false;
    // for (let i = 0; i < heuristics.length; i++) {
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         if (matrix[i][j].value !== -1) {
    //             if (matrix[i][j].value + heuristics[j] > heuristics[i]) {
    //                 status = true;
    //             } else {
    //                 status = false;
    //                 throw "heuristics are not vlid";
    //             }
    //         }
    //     }
    // }
    // if (status)
    return heuristics;
};
