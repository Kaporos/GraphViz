import './styles/app.css'
import App from './App.svelte'
import {Initialised} from "./graphs/api";
console.log(Initialised)
const app = new App({
  //@ts-ignore
  target: document.getElementById('app'),
})

export default app
