declare interface GraphNode {
    color(color: string): void
}


interface Window { nodes: GraphNode[]; }


window.nodes = window.nodes || {};