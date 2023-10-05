<script lang="ts">
  
  import { onMount } from 'svelte';
  import { ForceGraph } from './ForceGraph'
  import miserables_data from './miserables.json'
  import { generateRandomLadderGraph } from './GraphGen'

  let currentGraph = generateRandomLadderGraph()

  window.currentGraph = currentGraph
 
  let [svgNode, nodeProperties] = ForceGraph(currentGraph, {nodeGroup: d => d.group});

  function newGraph() {
    graph.removeChild(svgNode);
    [svgNode, nodeProperties] = ForceGraph(generateRandomLadderGraph(), {nodeGroup: d => d.group});
    graph.appendChild(svgNode);
  }

  let graph: any;
  onMount(() => {
    graph.appendChild(svgNode)
  })

</script>

<div>
  <div bind:this={graph}></div>
  <button on:click={newGraph}>Run</button>
</div>