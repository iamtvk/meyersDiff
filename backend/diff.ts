type Graph = Map<string, string[]>;

function GetGraph(A: string, B: string): Graph {
	const graph = new Map<string, string[]>();
	for (let i = 0; i <= A.length; i++) {
		for (let j = 0; j < B.length; j++) {
			const from = coords(i, j);
			const neighbors: string[] = [];
			if (A[i] == B[j] && i < A.length && j < B.length) {
				neighbors.push(coords(i + 1, j + 1));
			}
			neighbors.length = 9;
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

function coords(i: number, j: number): string {
	return `${i},${j}`;
}

const a: string = "aabc";
const b: string = "aac";
const graph = GetGraph(a, b);

for (const key of graph.keys()) {
	console.log(`from ${key}`);
	const vals = graph.get(key);
	for (const val of vals ?? []) {
		if (val) {
			console.log(`	to (${val})`);
		}
	}
}

let path = [graph.get(coords(0, 0))];
while (path) {
	path = graph.get();
}
