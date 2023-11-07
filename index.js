import { Lexico } from "./lexico/lexico.js";
import { Sintactico } from "./sintactico/sintactico.js";
import { Semantico } from "./Semantico/semantico.js";
import { Nodo } from "./clases/Nodo.js";

//hola+mundo
//int main(){int a; if(a == 7){a = 8;}}
//int main(){int a;}
//int main(int x, int y){int a,b; funcion(hola, adios, okay);}
//int main(int x, float y){int a,b; funcion(10 == (20 - 1));}
let src = "int main(float x, float y) { int a,b; if(a == 20) { b = a+x; } else { b = a-x; } }";
let lexico = new Lexico(src);
let sintactico = new Sintactico(lexico);
let semantico = new Semantico();
let arbol = new Nodo();
let num = 1;

//analizaLexico();

arbol = sintactico.analizaSintactico(lexico)
if(arbol){
    console.log("Sintactica correcta");
    semantico.arbol = arbol;
    semantico.analizaSemantico();
    if(semantico.valido){
        console.log("Semantica correcta");
    }
    else{
        console.log("Error semantico");
        //semantico.muestraError();
    }
    //semantico.muestraArbol();
}

function analizaLexico(){
    if(src.length <= 0) { 
        console.log("entrada invalida");
    } 
    else{
        lexico.getSimbolo();
        do{
            muestraResultado(lexico.cad, lexico.simbolo, lexico.tipo);
            lexico.getSimbolo();
        } while(lexico.cad != "$");
    }
}

function muestraResultado(sim, tipo, id){
    console.log(sim + "\t\t\t\t" + tipo + "\t\t\t\t" + id); 
}

function muestraArbol(arbol){
    console.log("Arbol Semantico");
    console.log(arbol.dato);
    printHijos(arbol.hijos, num);
}

function printHijos(hijos, nEspacios){
    let cad;
    num++;
    if(typeof hijos != "undefined"){
        for(let i = 0; i < hijos.length; i++){
            cad = "";
            for(let j = 0; j < nEspacios; j++){
                cad += " ";
            }
            cad += hijos[i].dato;
            console.log(cad);
            printHijos(hijos[i].hijos, num);
        }
    }

    
}