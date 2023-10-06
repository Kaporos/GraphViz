export let graphOptions: {
    nodeCount: number,
    edgeCount: number,
    bipartite: Boolean,
    // directed: Boolean,
    weighted: Boolean,
    allowSelfLoops: Boolean,
    allowMultipleEdges: Boolean,
    allowCycles: Boolean,
    ladder: Boolean,
    simple: Boolean,
    complete: Boolean,
    tree: Boolean,
    connected: Boolean,
    eulerian: Boolean,
    hamiltonian: Boolean,
    containsIsthmus: Boolean
} = {
    nodeCount: 10,
    edgeCount: 20,
    bipartite: false,
    // directed: false,
    weighted: false,
    allowSelfLoops: false,
    allowMultipleEdges: false,
    allowCycles: false,
    ladder: true,
    simple: false,
    complete: false,
    tree: false,
    connected: false,
    eulerian: false,
    hamiltonian: false,
    containsIsthmus: false
}