<script lang="ts">
  
  import { onMount } from 'svelte';
  import { ForceGraph } from './ForceGraph'
  import miserables_data from './miserables.json'
  import { generateRandomLadderGraph } from './GraphGen'
  import {writable} from "svelte/store";
  import type {Writable} from "svelte/store";


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