<script lang="ts" context="module">

    import { graphOptions } from './optionsObject';

    function newGraph() {
    let [currentGraph, graphologyGraph] = generateRandomLadderGraph()
    window.context = new ScriptGraph(graphologyGraph)
    if (svgNode) {
      graph.removeChild(svgNode);
    }
    [svgNode, nodeProperties, edgeProperties] = ForceGraph(currentGraph, {nodeGroup: d => d.group});
    graph.appendChild(svgNode);
    }

    function toggleWeighted() {    
        graphOptions.weighted = document.getElementById('link-text').style.visibility === 'visible';
        if (graphOptions.weighted) {
            document.getElementById('link-text').style.visibility = 'hidden';
        } else {
            document.getElementById('link-text').style.visibility = 'visible';
        }
    }

    function toggleLadder() {
        for (let i in graphOptions.graphType) {
            graphOptions.graphType[i] = false;
        }
        graphOptions.graphType.ladder = true;
    }

    function toggleComplete() {
        for (let i in graphOptions.graphType) {
            graphOptions.graphType[i] = false;
        }
        graphOptions.graphType.complete = true;
    }

    function togglePath() {
        for (let i in graphOptions.graphType) {
            graphOptions.graphType[i] = false;
        }
        graphOptions.graphType.path = true;
    }

    function toggleErdosRenyi() {
        for (let i in graphOptions.graphType) {
            graphOptions.graphType[i] = false;
        }
        graphOptions.graphType.erdosRenyi = true;
    }

</script>

<button on:click={toggleWeighted}>Toggle Weights</button><br>
<input bind:value={graphOptions.nodeCount} placeholder="Node Count" /><br>
<label for="graph-type-radio">Select your graph type :</label>
<div id="graph-type-radio">
    <input type="radio" on:click={toggleLadder} id="ladder-radio" name="gType-rd">
    <label for="ladder-radio">Ladder</label><br>
    <input type="radio" on:click={toggleComplete} id="complete-radio" name="gType-rd">
    <label for="complete-radio">Complete</label><br>
    <input type="radio" on:click={togglePath} id="path-radio" name="gType-rd">
    <label for="path-radio">Path</label><br>
    <input type="radio" on:click={toggleErdosRenyi} id="erdosRenyu-radio" name="gType-rd">
    <label for="erdosRenyu-radio">Erdős-Rényi</label>

</div>
