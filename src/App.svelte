<script lang="ts">
  import Monaco from "./editor/Monaco.svelte";
  import type {Writable} from "svelte/store";
  import Editor from "./editor/Editor.svelte";
  import Graph from "./graphs/Graph.svelte";
  let content: Writable<string>;
  const runCode = () => {
    eval($content)
  }
</script>

<main>

  <div class="topbar">
      <button on:click={runCode}>Run</button>
  </div>
  <div class="content">
    <div class="editor">
      <Editor bind:content={content}/>
    </div>
    <div class="graph">
      <Graph/>
    </div>
  </div>


</main>

<style>

  main {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  main > div {
    width: 100%;
  }

  .topbar {
    display: flex;
    align-items: center;
    padding-left: 5px;
    height: 6vh;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }

  .content {
    height: 100%;
    display: flex;

  }

  .editor {
    width: 40vw;
  }

  .graph {
    flex-grow: 1;
  }









</style>
