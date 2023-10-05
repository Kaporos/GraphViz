import Graph from 'graphology';
import ladder from 'graphology-generators/classic/ladder';

export function generateRandomLadderGraph() {

    let dataObject:{
      nodes : any
      links : any
    } = {
      nodes: [],
      links: []
    };
    
    let graph = ladder(Graph, 20);

    // Transform nodes
    graph.forEachNode((node, attributes) => {
      dataObject["nodes"].push({
        id: node,
        group: attributes.group || 1  // Assumes a default group of 1 if no group attribute is found
      });
    });
    
    // Transform edges
    graph.forEachEdge((e, a, source, target) => {
      dataObject["links"].push({
        source: source,
        target: target,
        value : 1
      });
    });
    return dataObject;
}

