<script lang="ts">
    import { onMount } from "svelte";
    import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
    import JsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
    import CssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
    import HtmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
    import TsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
    import {writable} from "svelte/store";
    import libSource from "../@types/global.d.ts?raw"
    export let content = writable("console.log('hello world')");

    let divEl: HTMLDivElement;
    let editor: any;
    let Monaco;

    //@ts-ignore
    onMount(async () => {
        self.MonacoEnvironment = {
            getWorker: function (_moduleId, label) {
                if (label === "json") {
                    return new JsonWorker();
                }
                if (label === "css" || label === "scss" || label === "less") {
                    return new CssWorker();
                }
                if (label === "html" || label === "handlebars" || label === "razor") {
                    return new HtmlWorker();
                }
                if (label === "typescript" || label === "javascript") {
                    return new TsWorker();
                }
                return new EditorWorker();
            },
        };

        Monaco = await import("monaco-editor");
        // validation settings
        Monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: false,
        });

        // compiler options
        Monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            target: Monaco.languages.typescript.ScriptTarget.ES2015,
            allowNonTsExtensions: true,
        });





        var libUri = "ts:filename/facts.d.ts";

        Monaco.languages.typescript.javascriptDefaults.addExtraLib(libSource, libUri);
        //@ts-ignore
        if (!window.didMonacoInit) {
            Monaco.editor.createModel(libSource, "typescript", Monaco.Uri.parse(libUri));
            //@ts-ignore
            window.didMonacoInit = true;
        }


        editor = Monaco.editor.create(divEl, {
            value: $content,
            language: "typescript",
            theme: "vs-dark",
            readOnly: false,
        });
        editor.onDidChangeModelContent(() => {
            const text = editor.getValue();
            content.set(text)

        });
        console.log(editor);

        return () => {
            editor.dispose();
        };
    });
</script>

<div class="flex-grow">
    <div bind:this={divEl} class="h-full w-full" />
</div>
<svelte:window
        on:resize={() => {
    editor.layout({ width: 0, height: 0 });
    window.requestAnimationFrame(() => {
      const rect = divEl.parentElement?.getBoundingClientRect();
      editor.layout({ width: rect?.width, height: rect?.height });
    });
  }}
/>


<style>
    .h-full {
        height: 100%;
    }
    .w-full {
        width: 100%;
    }
    .flex-grow {
        height: 100%;
    }
</style>