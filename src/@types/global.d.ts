declare class Graph {
    color(id: number, color: string): void
}


interface Window { graph: Graph; sleep: (time: number) => void}


window.graph = window.graph || {};
window.sleep = window.sleep || {};