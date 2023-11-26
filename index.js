import { Lexico } from "./lexico/lexico.js";
import { Sintactico } from "./sintactico/sintactico.js";
import { Semantico } from "./Semantico/semantico.js";
import { Nodo } from "./clases/Nodo.js";
import { GenCode } from "./gencode/generaCode.js";


//Ejemplo funciones
//int main(){int hola,a,b; func(); hola = 23; if(hola == 7){hola = 8;}else{hola = 0;} while(a == 0){b = b+1;}} void func(){int var,x; x = 5;}
//Ejemplo Genera code
//int main(){int a,b; a = 45; if(a != 20){b = a;}else{b = 9;} while(b <= 50){b = b+1;}}
//Ejemplo con todo
//int main(){int hola,a,b,res; res = func(); b = 0; hola = 23; if(hola == 7){hola = 8;}else{a = (10 + 2) * 5;} while(b <= 15){b = b+1;}} int func(){int var,x; x = 5; return x;}
let src = "int main(){int hola,a,b,res; res = func(); b = 0; hola = 23; if(hola == 7){hola = 8;}else{a = (10 + 2) * 5;} while(b <= 15){b = b+1;}} int func(){int var,x; x = 5; return x;}";
let lexico = new Lexico(src);
let sintactico = new Sintactico(lexico);
let semantico = new Semantico();
let gencode = new GenCode();
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
        gencode.arbol = arbol;
        //gencode.generaCodigo();

        let myBlob = gencode.generaCodigo();
        console.log("Codigo generado")

        // blob.text().then(res => {
        //     //console.log(res);
        //     for(let i = 0; i < res.length; i++){
        //         if(res[i] == "\n"){
        //             document.write("<br>");
        //         }
        //         else{
        //             document.write(res[i]);
        //         }
        //     }
        // });
        const botonDescargar = document.querySelector("#descargar");

        botonDescargar.onclick = () => {
            const a = document.createElement("a");
            const url = URL.createObjectURL(myBlob);
            a.href = url;
            a.download = "codigo asm";
            a.click();
            URL.revokeObjectURL(url);
        }
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