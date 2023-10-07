import Graph, { UndirectedGraph } from 'graphology';
import { ladder, complete, path } from 'graphology-generators/classic';
import { erdosRenyi } from 'graphology-generators/random';
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

    if (graphOptions.graphType.ladder === true) {
      console.log("Generating ladder graph");
      graph = ladder(Graph, graphOptions.nodeCount / 2);
    } 

    if (graphOptions.graphType.complete === true) {
      console.log("Generating ladder graph");
      graph = complete(Graph, graphOptions.nodeCount);
    } 

    if (graphOptions.graphType.path === true) {
      console.log("Generating ladder graph");
      graph = path(Graph, graphOptions.nodeCount);
    } 
    
    if (graphOptions.graphType.erdosRenyi === true) {
      console.log("Generating ladder graph");
      console.log(graphOptions.nodeCount);
      graph = erdosRenyi(Graph, {order: parseInt(graphOptions.nodeCount), probability: 0.1});
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

