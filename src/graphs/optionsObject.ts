export let graphOptions: {
    nodeCount: number,
    edgeCount: number,
    graphType : {
        bipartite: boolean,
        ladder: boolean,
        simple: boolean,
        complete: boolean,
        tree: boolean,
        eulerian: boolean,
        path: boolean,
        erdosRenyi: boolean,
        connected: boolean,
        hamiltonian: boolean,
        containsIsthmus: boolean
    },
    // directed: Boolean,
    weighted: Boolean,
} = {
    nodeCount: 10,
    edgeCount: 20,
    graphType: {
        bipartite: false,
        ladder: true,
        simple: true,
        complete: false,
        tree: false,
        eulerian: false,
        path: false,
        erdosRenyi: false,
        connected: false,
        hamiltonian: false,
        containsIsthmus: false
    },
    // directed: false,
    weighted: false,
}