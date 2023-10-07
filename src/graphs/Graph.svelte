<script lang="ts">
  
  import { onMount } from 'svelte';
  import { ForceGraph } from './ForceGraph'
  import { generateRandomLadderGraph } from './GraphGen'
  import {writable} from "svelte/store";
  import type {Writable} from "svelte/store";
  import {ScriptGraph} from "./api";


  //@ts-ignore

  let svgNode: any;
  let nodeProperties: {attr: (name: string, callback: (d: {id: number}) => void) => void};
  let edgeProperties: {attr: (name: string, callback: (d: {id: number}) => void) => void};
  let graph: any;
  let node_colors: Writable<{[nodeId: string]: string}> = writable({});
  let edges_colors: Writable<{[nodeId: string]: string}> = writable({});

  function newGraph() {
    let [currentGraph, graphologyGraph] = generateRandomLadderGraph()
    window.context = new ScriptGraph(graphologyGraph)
    if (svgNode) {
      graph.removeChild(svgNode);
    }
    [svgNode, nodeProperties, edgeProperties] = ForceGraph(currentGraph, {nodeGroup: d => d.group});
    graph.appendChild(svgNode);
  }

  ScriptGraph.color_node_callback = (id, color) => {
    $node_colors[id] = color;
  }

  ScriptGraph.color_edge_callback = (id, color) => {
    $edges_colors[id] = color;
  }

  onMount(() => {
    newGraph()
    node_colors.subscribe((colors) => {
      nodeProperties.attr("fill", (d) => {
        return colors[d.id] || "black"
      })
    })
    edges_colors.subscribe((colors) => {
      edgeProperties.attr("stroke", (d) => {
        return colors[d.id] || "black"
      })
    })

  })




</script>

<div>
  <div bind:this={graph}></div>
  <button on:click={newGraph}>Generate</button>
</div>