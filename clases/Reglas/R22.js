import { Nodo } from "../Nodo.js";

export class R22 extends Nodo{
    constructor(pila){
        super();
        this.pila = pila;
        this.si = " ";
        this.parentAbre = " ";
        this.parentCierra = " ";
    }

    quitarDePila(){
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.parentCierra = this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.pila.shift();
        this.parentAbre = this.pila.shift();
        this.pila.shift();
        this.si = this.pila.shift();
    }
}