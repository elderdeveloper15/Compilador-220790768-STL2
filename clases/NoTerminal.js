import { ElementoPila } from "./ElementoPila.js"
import { Nodo } from "./Nodo.js";

export class NoTerminal extends ElementoPila{
    
    constructor(dato){
        super(dato);
        this.sig = new Nodo();
    }
}