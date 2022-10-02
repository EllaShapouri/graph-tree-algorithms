import { checkDepth } from "./checkDepth";
import { validateEdges } from "./validateEdges";
import { validateNodes } from "./validateNodes";

export const checkFlow = (edges, nodes, algorithm, depth) => {
    var errorStatusEdges = validateEdges(edges,algorithm.requiredPath);
    var errorStatusNodes = validateNodes(nodes);
    var errorStatusDepth = checkDepth(algorithm, depth);
    if (
        errorStatusEdges.valid &&
        errorStatusNodes.valid &&
        errorStatusDepth.valid
    ) {
        return {
            status: true,
            errors: null,
        };
    } else
        return {
            status: false,
            errors: [errorStatusEdges, errorStatusNodes, errorStatusDepth],
        };
};
