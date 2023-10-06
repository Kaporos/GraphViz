<script lang="ts">
    let graphOptions: {
        bipartite: Boolean,
        // directed: Boolean,
        weighted: Boolean,
        allowSelfLoops: Boolean,
        allowMultipleEdges: Boolean,
        allowCycles: Boolean,
        simple: Boolean,
        complete: Boolean,
        tree: Boolean,
        connected: Boolean,
        eulerian: Boolean,
        hamiltonian: Boolean,
        containsIsthmus: Boolean
    } = {
        bipartite: false,
        // directed: false,
        weighted: false,
        allowSelfLoops: false,
        allowMultipleEdges: false,
        allowCycles: false,
        simple: false,
        complete: false,
        tree: false,
        connected: false,
        eulerian: false,
        hamiltonian: false,
        containsIsthmus: false
    }

    function toggleWeighted() {    
        let isVisibile = document.getElementById('link-text').style.visibility === 'visible';
        if (isVisibile) {
            document.getElementById('link-text').style.visibility = 'hidden';
        } else {
            document.getElementById('link-text').style.visibility = 'visible';
        }
    }


</script>

<button on:click={toggleWeighted}>Toggle Weights</button>
