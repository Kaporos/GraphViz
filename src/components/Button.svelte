<script lang="ts">
    export let onclick: (e: any) => void;
</script>

<button on:click={onclick}><slot/></button>


<style>
    button {
        font-size: var(--scale-0);
        font-weight: var(--weight-medium);
        padding: var(--size-2) var(--size-5);
        background: var(--color-blue);
        border-radius: var(--radius-xs);
        color: white;
        border: none;
    }
    button:hover {
        cursor: pointer;
        background: var(--color-blue-700);
    }
</style>