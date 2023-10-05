export class ScriptGraph {
    static color_callback: (id: number, color: string) => void;
    static color(id: number, color: string) {
        this.color_callback(id, color)
    }
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.graph = ScriptGraph
window.sleep = sleep

export const Initialised = true;