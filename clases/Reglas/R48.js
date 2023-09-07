import { Nodo } from "../Nodo.js";

export class R48 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.opRelac = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.opRelac = this.pila.shift();
    }
}