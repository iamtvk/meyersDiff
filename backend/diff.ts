type Graph = Map<string, string[]>;

interface Node {
	Delete();
	Unchange();
	Insert();
}

function GetGraph(A: string, B: string): Graph {
	const graph = new Map<string, string[]>();
	for (let i = 0; i <= A.length; i++) {
		for (let j = 0; j < B.length; j++) {
			const from = coords(i, j);
			const neighbors: string[] = [];
			if (A[i] == B[j] && i < A.length && j < B.length) {
				neighbors.push("unchange");
			}
			if (i < A.length) {
				neighbors.push("delete");
			}
			if (j < B.length) {
				neighbors.push("insert");
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

function traverse(start: string) {
	let n = 0;
	const queue: string[][] = [[start]];
	while (queue.length > 0) {
		const path = queue.shift()!;
		const node = path[path.length - 1];
		// console.log("exploring path:", path.join(" -> "));
		// if (visited.has(node)) continue;
		// visited.add(node);
		if (node === coords(a.length, b.length)) {
			console.log("found complete path:", path.join(" -> "));
			n++;
			continue;
		}
		for (const neighbor of graph.get(node) ?? []) {
			if (!path.includes(neighbor)) {
				queue.push([...path, neighbor]);
			}
		}
	}
	console.log(n);
}

traverse(coords(0, 0));
