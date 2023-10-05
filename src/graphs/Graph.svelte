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
  let graph: any;
  let colors: Writable<{[nodeId: number]: string}> = writable({});

  function newGraph() {
    let currentGraph = generateRandomLadderGraph()
    //@ts-ignore
    window.currentGraph = currentGraph
    if (svgNode) {
      graph.removeChild(svgNode);
    }
    [svgNode, nodeProperties] = ForceGraph(currentGraph, {nodeGroup: d => d.group});
    graph.appendChild(svgNode);
  }

  ScriptGraph.color_callback = (id, color) => {
    $colors[id] = color;
  }

  onMount(() => {
    newGraph()
    colors.subscribe((colors) => {
      nodeProperties.attr("fill", (d) => {
        return colors[d.id] || "black"
      })
    })

  })




</script>

<div>
  <div bind:this={graph}></div>
  <button on:click={newGraph}>Run</button>
</div>