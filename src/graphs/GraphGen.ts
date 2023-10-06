import Graph, { UndirectedGraph } from 'graphology';
import ladder from 'graphology-generators/classic/ladder';
import { graphOptions } from './optionsObject';
import hexagon from './graph-examples/hexagon.json'

export function generateRandomLadderGraph() {

    let dataObject:{
      nodes : any
      links : any
    } = {
      nodes: [],
      links: []
    };

    let graph = new UndirectedGraph();

    for (let i= 0; i < hexagon.nodes.length; i++) {
      console.log(hexagon.nodes[i]);
      graph.addNode(hexagon.nodes[i].id);
    }
    for (let i= 0; i < hexagon.links.length; i++) {
      console.log(hexagon.links[i]);
      graph.mergeEdge(hexagon.links[i].source, hexagon.links[i].target);
    }

    if (graphOptions.ladder === true) {
      console.log("Generating ladder graph");
      graph = ladder(Graph, graphOptions.nodeCount / 2);
    } 
    
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
        id: e,
        source: source,
        target: target,
        value : 50,
      });
    });
    return [dataObject, graph];
}

