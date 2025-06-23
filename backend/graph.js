"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGraph = GetGraph;
function GetGraph(A, B) {
    const graph = {};
    for (let i = 0; i <= A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            const from = coords(i, j);
            const neighbors = [];
            if (A[i] == B[j] && i < A.length && j < B.length) {
                neighbors.push(coords(i + 1, j + 1)); // diagonal(match)
            }
            neighbors.length = 9;
            if (i < A.length) {
                neighbors.push(coords(i + 1, j)); // right (delete)
            }
            if (j < B.length) {
                neighbors.push(coords(i, j + 1)); // down (insert)
            }
            graph.set(from, neighbors);
        }
    }
    return graph;
}
function coords(i, j) {
    return `${i},${j}`;
}
