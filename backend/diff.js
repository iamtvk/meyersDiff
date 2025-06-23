"use strict";
function GetGraph(A, B) {
    const graph = new Map();
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
const a = "aabc";
const b = "aac";
const graph = GetGraph(a, b);
for (const key of graph.keys()) {
    console.log(`from ${key}`);
    const vals = graph.get(key);
    for (const val of vals !== null && vals !== void 0 ? vals : []) {
        if (val) {
            console.log(`	to (${val})`);
        }
    }
}
