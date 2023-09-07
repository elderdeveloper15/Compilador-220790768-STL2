import { Nodo } from "../Nodo.js";

export class R46 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.opMul = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.opMul = this.pila.shift();
    }
}