const UNVISITED = 0;
const RED = 1;
const BLACK = 2;
class KingdomDivision {
    constructor(input) {
        this.graph = this.makeGraph(input);
    }
    get getGraph() {
        return this.graph;
    }
    solve(node) {
        let children = this.graph[node];
        let total = 0;
        let track = [];
        for (let i = 0; i < this.graph.length + 1; i++) {
            track.push(UNVISITED);
        }
        track[0] = -1;
        let redTrack = track.slice();
        let blackTrack = track.slice();
        redTrack[node] = RED;
        blackTrack[node] = BLACK;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            this.recurse(child, node, RED, redTrack);
            this.recurse(child, node, BLACK, blackTrack);
        }
        return total;
    }
    recurse(node, parent, parentColor, track) {
        let children = this.graph[node];
        children = children.
        ;
    }
    makeGraph(input) {
        let n = parseInt(input[0]);
        let graph = [];
        for (let i = 0; i <= n; i++) {
            graph.push([]);
        }
        for (let i = 1; i < n; i++) {
            let parsed = input[i].split(" ");
            let a = parseInt(parsed[0]);
            let b = parseInt(parsed[1]);
            graph[a].push(b);
            graph[b].push(a);
        }
        return graph;
    }
}
let saif = new KingdomDivision(['5', '1 2', '1 3', '3 4', '3 5']);
console.log(saif.getGraph);
console.log("final answer: " + saif.solve(1));
//# sourceMappingURL=kingdomDivision.js.map