<script lang="ts" context="module">

    import { graphOptions } from './optionsObject';

    function toggleWeighted() {    
        graphOptions.weighted = document.getElementById('link-text').style.visibility === 'visible';
        if (graphOptions.weighted) {
            document.getElementById('link-text').style.visibility = 'hidden';
        } else {
            document.getElementById('link-text').style.visibility = 'visible';
        }
    }

</script>

<button on:click={toggleWeighted}>Toggle Weights</button>
<input bind:value={graphOptions.nodeCount} placeholder="Node Count" />
<div>
    <input type="checkbox" bind:checked={graphOptions.ladder} placeholder="Node Count" />
    <label for="directed">Ladder</label>
</div>

