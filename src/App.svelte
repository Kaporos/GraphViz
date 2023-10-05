<script lang="ts">
  import Monaco from "./editor/Monaco.svelte";
  import type {Writable} from "svelte/store";
  let content: Writable<string>;
  const runCode = () => {
    eval($content)
  }



</script>

<main>

  <div class="left">
    <div>
      <button on:click={runCode}>Play</button>
    </div>
    <div class="editor">
      <Monaco bind:content={content}/>
    </div>
  </div>
  <div class="right">

  </div>

</main>

<style>

  main {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;

  }
  .left, .right{
    height: 100%;
    width: 50vw;
  }

  .editor {
    height: 75%;
  }
  
</style>
