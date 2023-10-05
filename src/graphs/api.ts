export class OurGraph implements GraphNode {
    static color_callback: () => void

    color(color: string) {
        OurGraph.color_callback()
    }


}


let nodes = [new OurGraph()]


const handler = {
    get(target: any, props: any, receiver: any) {
        return Reflect.get(target, props, receiver)
    }
}

window.nodes = new Proxy(nodes, handler)

export  const Initialised = true;