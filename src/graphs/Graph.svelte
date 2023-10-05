<script lang="ts">
    import {OurGraph} from "./api";

    let counter = 0;
    OurGraph.color_callback = () => {
        counter += 1;
    }
</script>

<main>
    <p>{counter}</p>
</main>