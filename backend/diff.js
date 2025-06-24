"use strict";
function GetGraph(A, B) {
    const graph = new Map();
    for (let i = 0; i <= A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            const from = coords(i, j);
            const neighbors = [];
            if (A[i] == B[j] && i < A.length && j < B.length) {
                neighbors.push(coords(i + 1, j + 1));
            }
            if (i < A.length) {
                neighbors.push(coords(i + 1, j));
            }
            if (j < B.length) {
                neighbors.push(coords(i, j + 1));
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
function traverse(start) {
    var _a;
    let n = 0;
    const queue = [[start]];
    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];
        // console.log("exploring path:", path.join(" -> "));
        // if (visited.has(node)) continue;
        // visited.add(node);
        if (node === coords(a.length, b.length)) {
            console.log("found complete path:", path.join(" -> "));
            n++;
            continue;
        }
        for (const neighbor of (_a = graph.get(node)) !== null && _a !== void 0 ? _a : []) {
            if (!path.includes(neighbor)) {
                queue.push([...path, neighbor]);
            }
        }
    }
    console.log(n);
}
traverse(coords(0, 0));
