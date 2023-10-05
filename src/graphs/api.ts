import type AbstractGraph from "graphology-types";

export class ScriptGraph implements Context {

    static color_node_callback: (id: string, color: string) => void;
    static color_edge_callback: (id: string, color: string) => void;
    graph: AbstractGraph;
    constructor(graph: AbstractGraph) {
        this.graph = graph
    }
    colorNode(id: string, color: string) {
        ScriptGraph.color_node_callback(id, color)
    }
    colorEdge(id: string, color: string) {
        ScriptGraph.color_edge_callback(id, color)
    }

}



function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.sleep = sleep

export const Initialised = true;