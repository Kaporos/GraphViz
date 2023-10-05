<script lang="ts">
    import Monaco from "./Monaco.svelte";
    import type {Writable} from "svelte/store";
    export let content: Writable<string>;

</script>

<Monaco bind:content={content}/>