//las celdas vacias son 0
//las reducciones son numeros negativos r0 (aceptacion) es -1, r1 es -2, etc.
//los desplazamientos son numeros positivos d3 es 3, d2 es 2, etc.

import { NoTerminal } from "../clases/NoTerminal.js";
import { Terminal } from "../clases/Terminal.js";
import { Elemento } from "../clases/Elemento.js";
import { Nodo } from "../clases/Nodo.js";
import { R1 } from "../clases/Reglas/R1.js";
import { R2 } from "../clases/Reglas/R2.js";
import { R3 } from "../clases/Reglas/R3.js";
import { R4 } from "../clases/Reglas/R4.js";
import { R5 } from "../clases/Reglas/R5.js";
import { R6 } from "../clases/Reglas/R6.js";
import { R7 } from "../clases/Reglas/R7.js";
import { R8 } from "../clases/Reglas/R8.js";
import { R9 } from "../clases/Reglas/R9.js";
import { R10 } from "../clases/Reglas/R10.js";
import { R11 } from "../clases/Reglas/R11.js";
import { R12 } from "../clases/Reglas/R12.js";
import { R13 } from "../clases/Reglas/R13.js";
import { R14 } from "../clases/Reglas/R14.js";
import { R15 } from "../clases/Reglas/R15.js";
import { R16 } from "../clases/Reglas/R16.js";
import { R17 } from "../clases/Reglas/R17.js";
import { R18 } from "../clases/Reglas/R18.js";
import { R19 } from "../clases/Reglas/R19.js";
import { R20 } from "../clases/Reglas/R20.js";
import { R21 } from "../clases/Reglas/R21.js";
import { R22 } from "../clases/Reglas/R22.js";
import { R23 } from "../clases/Reglas/R23.js";
import { R24 } from "../clases/Reglas/R24.js";
import { R25 } from "../clases/Reglas/R25.js";
import { R26 } from "../clases/Reglas/R26.js";
import { R27 } from "../clases/Reglas/R27.js";
import { R28 } from "../clases/Reglas/R28.js";
import { R29 } from "../clases/Reglas/R29.js";
import { R30 } from "../clases/Reglas/R30.js";
import { R31 } from "../clases/Reglas/R31.js";
import { R32 } from "../clases/Reglas/R32.js";
import { R33 } from "../clases/Reglas/R33.js";
import { R34 } from "../clases/Reglas/R34.js";
import { R35 } from "../clases/Reglas/R35.js";
import { R36 } from "../clases/Reglas/R36.js";
import { R37 } from "../clases/Reglas/R37.js";
import { R38 } from "../clases/Reglas/R38.js";
import { R39 } from "../clases/Reglas/R39.js";
import { R40 } from "../clases/Reglas/R40.js";
import { R41 } from "../clases/Reglas/R41.js";
import { R42 } from "../clases/Reglas/R42.js";
import { R43 } from "../clases/Reglas/R43.js";
import { R44 } from "../clases/Reglas/R44.js";
import { R45 } from "../clases/Reglas/R45.js";
import { R46 } from "../clases/Reglas/R46.js";
import { R47 } from "../clases/Reglas/R47.js";
import { R48 } from "../clases/Reglas/R48.js";
import { R49 } from "../clases/Reglas/R49.js";
import { R50 } from "../clases/Reglas/R50.js";
import { R51 } from "../clases/Reglas/R51.js";
import { R52 } from "../clases/Reglas/R52.js";

export class Sintactico{
    
    constructor(src) {
        this.lexico = src;  
        this.pila = [];
        this.auxPila = [];
        this.aceptacion = false;
        this.accion = 0;
        this.tablaLR = [
            [0,	0,	0,	0,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-3,	1,	2,	3,	4,	0,	6,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-2,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-3,	0,	7,	3,	4,	0,	6,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	-5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [8,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	-6,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-6,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-4,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-8,	10,	11,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	9,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	12,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [13,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	15,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-11,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	14,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-7,	0,	0,	0,	-7,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-7,	0,	-7,	-7,	-7,	0,	-7,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-8,	10,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	16,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	17,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [18,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-9,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	20,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	19,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	22,	0,	-13,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	21,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	-10,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-10,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [27,	0,	0,	0,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-16,	0,	28,	29,	30,	0,	0,	0,	0,	0,	25,	0,	0,	0,	0,	0,	23,	24,	0,	26,	0,	0,	0,	0,	0,	0,	31,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-12,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	32,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	33,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [27,	0,	0,	0,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-16,	0,	28,	29,	30,	0,	0,	0,	0,	0,	25,	0,	0,	0,	0,	0,	34,	24,	0,	26,	0,	0,	0,	0,	0,	0,	31,	0,	0,],
            [-18,	0,	0,	0,	-18,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-18,	0,	-18,	-18,	-18,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-19,	0,	0,	0,	-19,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-19,	0,	-19,	-19,	-19,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	36,	0,	0,	0,	35,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	37,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	38,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	-30,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	39,	0,	0,	44,	45,	0,	40,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	50,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [51,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	-15,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-15,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-17,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	52],
            [46,    47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	-32,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	53,	0,	44,	45,	0,	54],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	55],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	56],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	57,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	-31,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	64],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	65],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	66],
            [0,	0,	0,	0,	0,	-53,	-53,	-53,	-53,	-53,	0,	-53,	-53,	-53,	0,	-53,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-36,	-36,	-36,	-36,	-36,	0,	-36,	-36,	-36,	0,	-36,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-37,	-37,	-37,	-37,	-37,	0,	-37,	-37,	-37,	36,	-37,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-38,	-38,	-38,	-38,	-38,	0,	-38,	-38,	-38,	0,	-38,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-39,	-39,	-39,	-39,	-39,	0,	-39,	-39,	-39,	0,	-39,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-40,	-40,	-40,	-40,	-40,	0,	-40,	-40,	-40,	0,	-40,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-26,	0,	0,	0,	-26,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-26,	0,	-26,	-26,	-26,	-26,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	22,	0,	-13,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	67,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	68,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	69,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	0,	71,	0,	-34,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	70,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	0,	0,	0,	72,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	0,	0,	0,	73,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-25,	0,	0,	0,	-25,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-25,	0,	-25,	-25,	-25,	-25,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	74],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	75],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	76],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	77],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	78],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	79],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	0,	0,	0,	80,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-45,	-45,	-45,	-45,	-45,	0,	-45,	-45,	-45,	0,	-45,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-46,	-46,	-46,	-46,	-46,	0,	-46,	-46,	-46,	0,	-46,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-14,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-22,	0,	0,	0,	-22,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-22,	0,	-22,	-22,	-22,	-22,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-41,	-41,	-41,	-41,	-41,	0,	-41,	-41,	-41,	0,	-41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-33,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	81],
            [27,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	85,	0,	0,	28,	29,	30,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	83,	0,	84,	0,	0,	0,	0,	31,	82,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	85,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	86,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-47,	-47,	-47,	-47,	-47,	0,	-47,	-47,	-47,	0,	-47	,0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-48,	58,	-48,	-48,	-48,	0,	-48,	-48,	-48,	0,	-48,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	-49,	-49,	-49,	0,	-49,	-49,	-49,	0,	-49,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	-50,	-50,	0,	-50,	-50,	-50,	0,	-50,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	-51,	-51,	0,	61,	-51	-51,	0,	-51,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	-52,	62,	0,	61,	-52,	-52,	0,	-52,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-44,	-44,	-44,	-44,	-44,	0,	-44,	-44,	-44,	0,	-44,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	0,	71,	0,	-34,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	87,	0,	0,	0,	0,],
            [-27,	0,	0,	0,	-27,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-27,	0,	-27,	-27,	-27,	89,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	88,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-42,	0,	0,	0,	-42,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-42,	0,	-42,	-42,	-42,	-42,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-43,	0,	0,	0,	-43,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-43,	0,	-43,	-43,	-43,	-43,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [27,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-20,	0,	28,	29,	30,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	90,	91,	0,	0,	0,	0,	0,	0,	31,	0,	0,],
            [-24,	0,	0,	0,	-24,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-24,	0,	-24,	-24,	-24,	-24,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-35,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-23,	0,	0,	0,	-23,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-23,	0,	-23,	-23,	-23,	-23,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [27,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	85,	0,	0,	28,	29,	30,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	83,	0,	84,	0,	0,	0,	0,	31,	92,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	93,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [27,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-20,	0,	28,	29,	30,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	94,	91,	0,	0,	0,	0,	0,	0,	31,	0,	0,],
            [-28,	0,	0,	0,	-28,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-28,	0,	-28,	-28,	-28,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-29,	0,	0,	0,	-29,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-29,	0,	-29,	-29,	-29,	-29,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-21,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,]
        ];
    }

    analizaSintactico(lexico){
        let terminal = new Terminal("$"); //terminal son las palabras
        let elemento = new Elemento(0); //elemento son los numeros  
        let raiz = new Nodo();
        let raizfunc = new Nodo();
        let regla = new Nodo();
        let dato = new Nodo();
        let deflocal = [];
        let params = [];
        let sentencia = [];
        let expresion = [];
        let sentenciabloque = [];
        let argumentos = [];
        let nodosFunc = [];

        let col = 0;
        let row = 0;
        let E = 3;
        let elementoIzq = 0;
        let reduccion = false;
        
        this.pila.unshift(terminal);
        this.pila.unshift(elemento); //la pila empieza con $0,

        lexico.getSimbolo(); //analiza una simbolo de la src

        if(lexico.cad != "$"){ // si no es el final de la src
            while(!this.aceptacion){
                let ter = new Terminal(""); //terminal son las palabras
                let noTer = new NoTerminal("E"); //no terminal es E
                let ele = new Elemento(0); //elemento son los numeros

                reduccion = false;
                row = this.pila[0].dato;
                col = lexico.tipo;
                //console.log(row + " " + col);
                //console.log(lexico.cad);
                this.accion = this.tablaLR[row][col];
    
                if(this.accion > 0){
                    //desplazamiento
                    ter.dato = lexico.cad;
                    ele.dato = this.accion;
                    this.pila.unshift(ter);
                    this.pila.unshift(ele);
                    
                } else if(this.accion < 0){
                    //reduccion
                    reduccion = true;
                    switch (this.accion) {
                        case -1: 
                            //regla 0, Aceptacion
                            this.aceptacion = true;
                            break;
                        case -2: 
                            E = 24; 
                            noTer.dato = "Prog";
                            
                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(1, this.auxPila);
                            regla.dato = "Prog";
                            regla.hijos.push(raiz);

                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 2; i++) { //regla 1 <programa> ::= <Definiciones>
                                this.pila.shift();
                            }                          
                            break;
                        case -3:
                            E = 25;                       //regla 2 <Definiciones> ::= \e     No se quitan datos de la pila
                            noTer.dato = "Defs";  
                            
                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(2, this.auxPila);
                            regla.dato = "Defs";
                            regla.hijos.push(raiz);

                            //console.log("raiz")
                            //console.log(raiz)
                            raiz = regla;

                            console.log(regla);

                            break;
                        case -4:
                            E = 25; 
                            noTer.dato = "Defs";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(3, this.auxPila);
                            regla.dato = "Defs";
                            regla.hijos.push(raiz);
                            regla.hijos.push(raiz.hijos.pop());
                            regla.hijos.push(nodosFunc.pop());  ///thiiiiiiiissssss

                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 4; i++) { //regla 3 <Definiciones> ::= <Definicion> <Definiciones>  
                                this.pila.shift();
                            }                                                      
                            break;
                        case -5:
                            E = 26;
                            noTer.dato = "Def";  

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(4, this.auxPila);
                            regla.dato = "Def";
                            regla.hijos.push(raiz);

                            raiz = regla;

                            console.log(regla);
                                       
                            for (let i = 0; i < 2; i++) { //regla 4 <Definicion> ::= <DefVar>
                                this.pila.shift();
                            }
                            break;
                        case -6:    
                            E = 26;
                            noTer.dato = "Def";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(5, this.auxPila);
                            regla.dato = "Def";
                            regla.hijos.push(raiz);

                            raiz = regla;

                            console.log(regla);
 
                            for (let i = 0; i < 2; i++) { //regla 5 <Definicion> ::= <DefFunc>
                                this.pila.shift();
                            }
                            break;
                        case -7:    
                            E = 27;
                            noTer.dato = "DefVar";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(6, this.auxPila);
                            regla.dato = "DefVar";
                            regla.quitarDePila();
                            regla.hijos.push(regla.tipo);
                            regla.hijos.push(regla.id);
                            regla.hijos.push(raiz);
                            regla.hijos.push(regla.puntoComa);
                            regla.hijos.push();
                            
                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 8; i++) { //regla 6 <DefVar> ::= tipo identificador <ListaVar> ;
                                this.pila.shift();
                            }
                            break;
                        case -8:                            
                            E = 28;                       //regla 7 <ListaVar> ::= \e     No se quitan datos de la pila
                            noTer.dato = "ListaVar";
                            
                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(7, this.auxPila);
                            regla.dato = "ListaVar";
                            //regla.hijos.push(raiz);

                            raiz = regla;

                            console.log(regla);

                            break;
                        case -9:
                            E = 28;
                            noTer.dato = "ListaVar";
                            
                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(8, this.auxPila);
                            regla.dato = "ListaVar";

                            regla.quitarDePila();
                            regla.hijos.push(regla.coma);
                            regla.hijos.push(regla.id);
                            regla.hijos.push(raiz);

                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 8 <ListaVar> ::= , identificador <ListaVar>
                                this.pila.shift();
                            }
                            break;
                        case -10:
                            E = 29;
                            noTer.dato = "DefFunc";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(9, this.auxPila);
                            regla.dato = "DefFunc";
                            regla.quitarDePila();
                            regla.hijos.push(regla.tipo);
                            regla.hijos.push(regla.id);
                            regla.hijos.push(regla.parentAbre);
                            regla.hijos.push(params.pop());
                            regla.hijos.push(regla.parentCierra);
                            regla.hijos.push(raiz);
                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 12; i++) { //regla 9 <DefFunc> ::= tipo identificador ( <Parametros> ) <BloqFunc>
                                this.pila.shift();
                            }
                            break;
                        case -11:
                            E = 30;                       //regla 10 <Parametros> ::= \e    No se quitan datos de la pila
                            noTer.dato = "Params";
                            
                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(10, this.auxPila);
                            regla.dato = "Params";
                            
                            //regla.hijos.push(raiz);
                            nodosFunc.push(raiz); ///thiiiiiiiissssss

                            params.push(regla);

                            console.log(regla);

                            break;
                        case -12:
                            E = 30;
                            noTer.dato = "Params";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(11, this.auxPila);
                            regla.dato = "Params";

                            regla.quitarDePila();
                            regla.hijos.push(regla.tipo);
                            regla.hijos.push(regla.id);
                            regla.hijos.push(params.pop());

                            nodosFunc.push(raiz); ///thiiiiiiiissssss

                            params.push(regla);

                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 11 <Parametros> ::= tipo identificador <ListaParam>
                                this.pila.shift();
                            }
                            break;
                        case -13:
                            E = 31;                       //regla 12 <ListaParam> ::= \e    No se quitan datos de la pila
                            noTer.dato = "ListaParam";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(12, this.auxPila);
                            regla.dato = "ListaParam";
                            //regla.hijos.push(params.pop());

                            params.push(regla);

                            console.log(regla);

                            break;
                        case -14:
                            E = 31;
                            noTer.dato = "ListaParam";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(13, this.auxPila);
                            regla.dato = "ListaParam";

                            regla.quitarDePila();
                            regla.hijos.push(regla.coma);
                            regla.hijos.push(regla.tipo);
                            regla.hijos.push(regla.id);
                            regla.hijos.push(params.pop());

                            params.push(regla);

                            console.log(regla);

                            for (let i = 0; i < 8; i++) { //regla 13 <ListaParam> ::= , tipo identificador <ListaParam> 
                                this.pila.shift();
                            }
                            break;
                        case -15:
                            E = 32;
                            noTer.dato = "BloqFunc";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(14, this.auxPila);
                            regla.dato = "BloqFunc";

                            regla.quitarDePila();
                            regla.hijos.push(regla.abreLlave);
                            regla.hijos.push(raiz);
                            regla.hijos.push(regla.cierraLlave);

                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 14 <BloqFunc> ::= { <DefLocales> }  
                                this.pila.shift();
                            }
                            break;
                        case -16:
                            E = 33;                       //regla 15 <DefLocales> ::= \e    No se quitan datos de la pila
                            noTer.dato = "DefLocales";
                            
                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(15, this.auxPila);
                            regla.dato = "DefLocales";
                            //regla.hijos.push(raiz);

                            raiz = regla;

                            console.log(regla);
                            break;
                        case -17:
                            E = 33;
                            noTer.dato = "DefLocales";
                            
                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(16, this.auxPila);
                            regla.dato = "DefLocales";
                            regla.hijos.push(raiz);
                            regla.hijos.push(deflocal.pop());

                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 4; i++) { //regla 16 <DefLocales> ::= <DefLocal> <DefLocales>
                                this.pila.shift();
                            }
                            break;
                        case -18:
                            E = 34;
                            noTer.dato = "DefLocal";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(17, this.auxPila);
                            regla.dato = "DefLocal";
                            regla.hijos.push(raiz);

                            deflocal.push(regla);

                            console.log(regla);

                            for (let i = 0; i < 2; i++) { //regla 17 <DefLocal> ::= <DefVar>
                                this.pila.shift();
                            }
                            break;
                        case -19:
                            E = 34;
                            noTer.dato = "DefLocal";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(18, this.auxPila);
                            regla.dato = "DefLocal";
                            regla.hijos.push(sentencia.pop());

                            deflocal.push(regla);

                            console.log(regla);

                            for (let i = 0; i < 2; i++) { //regla 18 <DefLocal> ::= <Sentencia> 
                                this.pila.shift();
                            }
                            break;
                        case -20:
                            E = 35;                       //regla 19 <Sentencias> ::= \e    No se quitan datos de la pila
                            noTer.dato = "Sentencias";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(19, this.auxPila);
                            regla.dato = "Sentencias";
                            //regla.hijos.push(raiz);

                            raiz = regla;

                            console.log(regla);

                            break;
                        case -21:
                            E = 35;
                            noTer.dato = "Sentencias";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(20, this.auxPila);
                            regla.dato = "Sentencias";
                            regla.hijos.push(raiz);
                            regla.hijos.push(sentencia.pop());

                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 4; i++) { //regla 20 <Sentencias> ::= <Sentencia> <Sentencias>  
                                this.pila.shift();
                            }
                            break;
                        case -22:
                            E = 36;
                            noTer.dato = "Sentencia";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(21, this.auxPila);
                            regla.dato = "Sentencia";

                            regla.quitarDePila();
                            regla.hijos.push(regla.id);
                            regla.hijos.push(regla.igual);
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(regla.puntoComa);
                           
                            sentencia.push(regla);

                            console.log(regla);
                            
                            for (let i = 0; i < 8; i++) { //regla 21 <Sentencia> ::= identificador = <Expresion> ; 
                                this.pila.shift();
                            }
                            break;
                        case -23: //....................
                            E = 36;
                            noTer.dato = "Sentencia";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(22, this.auxPila);
                            regla.dato = "Sentencia";

                            regla.quitarDePila();
                            regla.hijos.push(regla.si);
                            regla.hijos.push(regla.parentAbre);
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(regla.parentCierra);
                            regla.hijos.push(sentenciabloque.pop());
                            regla.hijos.push(raiz);
                           
                            sentencia.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 12; i++) { //regla 22 <Sentencia> ::= if ( <Expresion> ) <SentenciaBloque> <Otro> 
                                this.pila.shift();
                            }
                            break;
                        case -24: //....................
                            E = 36;
                            noTer.dato = "Sentencia";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(23, this.auxPila);
                            regla.dato = "Sentencia";

                            regla.quitarDePila();
                            regla.hijos.push(regla.mientras);
                            regla.hijos.push(regla.parentAbre);
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(regla.parentCierra);
                            regla.hijos.push(raiz);
                           
                            sentencia.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 10; i++) { //regla 23 <Sentencia> ::= while ( <Expresion> ) <Bloque>
                                this.pila.shift();
                            }
                            break;
                        case -25:
                            E = 36;
                            noTer.dato = "Sentencia";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(24, this.auxPila);
                            regla.dato = "Sentencia";

                            regla.quitarDePila();
                            regla.hijos.push(regla.regresa);
                            regla.hijos.push(raiz);
                            regla.hijos.push(regla.puntoComa);
                           
                            sentencia.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 24 <Sentencia> ::= return <ValorRegresa> ;
                                this.pila.shift();
                            }
                            break;
                        case -26:
                            E = 36;
                            noTer.dato = "Sentencia";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(25, this.auxPila);
                            regla.dato = "Sentencia";

                            regla.quitarDePila();
                            regla.hijos.push(raiz);
                            regla.hijos.push(regla.puntoComa);
                           
                            sentencia.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 4; i++) { //regla 25 <Sentencia> ::= <LlamadaFunc> ; 
                                this.pila.shift();
                            }
                            break;
                        case -27:
                            E = 37;                       //regla 26 <Otro> ::= \e    No se quitan datos de la pila
                            noTer.dato = "Otro";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(26, this.auxPila);
                            regla.dato = "Otro";
                            //regla.hijos.push(raiz);

                            raiz = regla;

                            console.log(regla);

                            break;
                        case -28:
                            E = 37;
                            noTer.dato = "Otro";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(27, this.auxPila);
                            regla.dato = "Otro";                          

                            regla.hijos.push(sentenciabloque.pop());
                           
                            raiz = regla;
                            
                            console.log(regla);

                            for (let i = 0; i < 4; i++) { //regla 27 <Otro> ::= else <SentenciaBloque> 
                                this.pila.shift();
                            }
                            break;
                        case -29:
                            E = 38;
                            noTer.dato = "Bloque";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(28, this.auxPila);
                            regla.dato = "Bloque";

                            regla.quitarDePila();
                            regla.hijos.push(regla.abreLlave);
                            regla.hijos.push(raiz);
                            regla.hijos.push(regla.cierraLlave);
                           
                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 28 <Bloque> ::= { <Sentencias> } 
                                this.pila.shift();
                            }
                            break;
                        case -30:
                            E = 39;                       //regla 29 <ValorRegresa> ::= \e    No se quitan datos de la pila
                            noTer.dato = "ValorRegresa";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(29, this.auxPila);
                            regla.dato = "ValorRegresa";

                            raiz = regla;
                            break;
                        case -31:
                            E = 39;
                            noTer.dato = "ValorRegresa";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(30, this.auxPila);
                            regla.dato = "ValorRegresa";
                            regla.hijos.push(expresion.pop());

                            raiz = regla;

                            for (let i = 0; i < 2; i++) { //regla 30 <ValorRegresa> ::= <Expresion> 
                                this.pila.shift();
                            }
                            break;
                        case -32:
                            E = 40;                       //regla 31 <Argumentos> ::= \e    No se quitan datos de la pila
                            noTer.dato = "Args";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(31, this.auxPila);
                            regla.dato = "Args";
                            //regla.hijos.push(raiz);

                            argumentos.push(regla);

                            console.log(regla);
                            break;
                        case -33: //....................
                            E = 40;
                            noTer.dato = "Args";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(32, this.auxPila);
                            regla.dato = "Args";
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(raiz);

                            argumentos.push(regla);

                            console.log(regla);

                            for (let i = 0; i < 4; i++) { //regla 32 <Argumentos> ::= <Expresion> <ListaArgumentos>
                                this.pila.shift();
                            }
                            break;
                        case -34:
                            E = 41;                       //regla 33 <ListaArgumentos> ::= \e    No se quitan datos de la pila
                            noTer.dato = "ListaArgs";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(33, this.auxPila);
                            regla.dato = "ListaArgs";
                            //regla.hijos.push(raiz);

                            raiz = regla;

                            console.log(regla);
                            break;
                        case -35: //....................
                            E = 41;
                            noTer.dato = "ListaArgs";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(34, this.auxPila);
                            regla.dato = "ListaArgs";

                            regla.quitarDePila();
                            regla.hijos.push(regla.coma);
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(raiz);

                            raiz = regla;

                            console.log(regla);
                            
                            for (let i = 0; i < 6; i++) { //regla 34 <ListaArgumentos> ::= , <Expresion> <ListaArgumentos>
                                this.pila.shift();
                            }
                            break;
                        case -36:
                            E = 42;
                            noTer.dato = "Termino";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(35, this.auxPila);
                            regla.dato = "Termino";

                            regla.hijos.push(raiz);
                           
                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 2; i++) { //regla 35 <Termino> ::= <LlamadaFunc> 
                                this.pila.shift();
                            }
                            break;
                        case -37:
                            E = 42;
                            noTer.dato = "Termino";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(36, this.auxPila);
                            regla.dato = "Termino";

                            regla.quitarDePila();
                            //regla.hijos.push(raiz);
                            regla.hijos.push(regla.id);
                           
                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 2; i++) { //regla 36 <Termino> ::= identificador
                                this.pila.shift();
                            }
                            break;
                        case -38:
                            E = 42;
                            noTer.dato = "Termino";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(37, this.auxPila);
                            regla.dato = "Termino";

                            regla.quitarDePila();
                            regla.hijos.push(regla.entero);
                           
                            raiz = regla;

                            console.log(regla);
                              
                            for (let i = 0; i < 2; i++) { //regla 37 <Termino> ::= entero
                                this.pila.shift();
                            }
                            break;
                        case -39:
                            E = 42;
                            noTer.dato = "Termino";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(38, this.auxPila);
                            regla.dato = "Termino";

                            regla.quitarDePila();
                            regla.hijos.push(regla.real);
                           
                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 2; i++) { //regla 38 <Termino> ::= real
                                this.pila.shift();
                            }
                            break;
                        case -40:
                            E = 42;
                            noTer.dato = "Termino";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(39, this.auxPila);
                            regla.dato = "Termino";

                            regla.quitarDePila();
                            regla.hijos.push(regla.cadena);
                           
                            raiz = regla;

                            console.log(regla);

                            for (let i = 0; i < 2; i++) { //regla 39 <Termino> ::= cadena
                                this.pila.shift();
                            }
                            break;
                        case -41:
                            E = 43;
                            noTer.dato = "LlamadaFunc";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(40, this.auxPila);
                            regla.dato = "LlamadaFunc";

                            regla.quitarDePila();
                            regla.hijos.push(regla.id);
                            regla.hijos.push(regla.parentAbre);
                            regla.hijos.push(argumentos.pop());
                            regla.hijos.push(regla.parentCierra);
                           
                            raiz = regla;

                            console.log(regla);
                            
                            for (let i = 0; i < 8; i++) { //regla 40 <LlamadaFunc> ::= identificador ( <Argumentos> )
                                this.pila.shift();
                            }
                            break;
                        case -42:
                            E = 44;
                            noTer.dato = "SentenciaBloque";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(41, this.auxPila);
                            regla.dato = "SentenciaBloque";

                            regla.hijos.push(sentencia.pop());

                            sentenciabloque.push(regla);

                            console.log(regla);

                            console.log("regla 41");
                            for (let i = 0; i < 2; i++) { //regla 41 <SentenciaBloque> ::= <Sentencia>
                                this.pila.shift();
                            }
                            break;
                        case -43:
                            E = 44;
                            noTer.dato = "SentenciaBloque";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(42, this.auxPila);
                            regla.dato = "SentenciaBloque";

                            regla.hijos.push(raiz);

                            sentenciabloque.push(regla);

                            console.log(regla);
                            
                            for (let i = 0; i < 2; i++) { //regla 42 <SentenciaBloque> ::= <Bloque>
                                this.pila.shift();
                            }
                            break;
                        case -44:
                            E = 45;
                            noTer.dato = "Expresion";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(43, this.auxPila);
                            regla.dato = "Expresion";

                            regla.quitarDePila();
                            regla.hijos.push(regla.parentAbre);
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(regla.parentCierra);
                           
                            expresion.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 43 <Expresion> ::= ( <Expresion> )
                                this.pila.shift();
                            }
                            break;
                        case -45:
                            E = 45;
                            noTer.dato = "Expresion";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(44, this.auxPila);
                            regla.dato = "Expresion";

                            regla.quitarDePila();
                            regla.hijos.push(regla.opSuma);
                            regla.hijos.push(expresion.pop());
                           
                            expresion.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 4; i++) { //regla 44 <Expresion> ::= opSuma <Expresion>
                                this.pila.shift();
                            }
                            break;
                        case -46:
                            E = 45;
                            noTer.dato = "Expresion";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(45, this.auxPila);
                            regla.dato = "Expresion";

                            regla.quitarDePila();
                            regla.hijos.push(regla.opNot);
                            regla.hijos.push(expresion.pop());
                           
                            expresion.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 4; i++) { //regla 45 <Expresion> ::= opNot <Expresion>
                                this.pila.shift();
                            }
                            break;
                        case -47:
                            E = 45;
                            noTer.dato = "Expresion";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(46, this.auxPila);
                            regla.dato = "Expresion";

                            regla.quitarDePila();
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(regla.opMul);
                            regla.hijos.push(expresion.pop());
                           
                            expresion.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 46 <Expresion> ::= <Expresion> opMul <Expresion>
                                this.pila.shift();
                            }
                            break;
                        case -48:
                            E = 45;
                            noTer.dato = "Expresion";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(47, this.auxPila);
                            regla.dato = "Expresion";

                            regla.quitarDePila();
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(regla.opSuma);
                            regla.hijos.push(expresion.pop());
                           
                            expresion.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 47 <Expresion> ::= <Expresion> opSuma <Expresion> 
                                this.pila.shift();
                            }
                            break;
                        case -49:
                            E = 45;
                            noTer.dato = "Expresion";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(48, this.auxPila);
                            regla.dato = "Expresion";

                            regla.quitarDePila();
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(regla.opRelac);
                            regla.hijos.push(expresion.pop());
                           
                            expresion.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 48 <Expresion> ::= <Expresion> opRelac <Expresion>
                                this.pila.shift();
                            }
                            break;
                        case -50:
                            E = 45;
                            noTer.dato = "Expresion";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(49, this.auxPila);
                            regla.dato = "Expresion";

                            regla.quitarDePila();
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(regla.opIgualdad);
                            regla.hijos.push(expresion.pop());
                           
                            expresion.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 49 <Expresion> ::= <Expresion> opIgualdad <Expresion>
                                this.pila.shift();
                            }
                            break;
                        case -51:
                            E = 45;
                            noTer.dato = "Expresion";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(50, this.auxPila);
                            regla.dato = "Expresion";

                            regla.quitarDePila();
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(regla.opAnd);
                            regla.hijos.push(expresion.pop());
                           
                            expresion.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 50 <Expresion> ::= <Expresion> opAnd <Expresion> 
                                this.pila.shift();
                            }
                            break;
                        case -52:
                            E = 45;
                            noTer.dato = "Expresion";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(51, this.auxPila);
                            regla.dato = "Expresion";

                            regla.quitarDePila();
                            regla.hijos.push(expresion.pop());
                            regla.hijos.push(regla.opOr);
                            regla.hijos.push(expresion.pop());
                           
                            expresion.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 6; i++) { //regla 51 <Expresion> ::= <Expresion> opOr <Expresion> 
                                this.pila.shift();
                            }
                            break;
                        case -53:
                            E = 45;
                            noTer.dato = "Expresion";

                            this.auxPila = [].concat(this.pila);
                            regla = this.generaRegla(52, this.auxPila);
                            regla.dato = "Expresion";
                            regla.hijos.push(raiz);
                           
                            expresion.push(regla);
                            
                            console.log(regla);

                            for (let i = 0; i < 2; i++) { //regla 52 <Expresion> ::= <Termino>  
                                this.pila.shift();
                            }
                            break;
                        default:break;
                    }
                    elementoIzq = this.pila[0].dato;
                    ele.dato = this.tablaLR[elementoIzq][E];
                    
                    if(!this.aceptacion){
                        this.pila.unshift(noTer);
                        this.pila.unshift(ele);
                        //console.log(this.printPila()); //mostrar analisis sintactico
                    }

                } else {
                    //error
                    break;
                }
    
                // if(this.accion > 0)
                //     console.log(this.printPila()); //mostrar analisis sintactico
                
                if(!reduccion)
                    lexico.getSimbolo();             
            }
        }

        if(this.aceptacion){
            console.log("Aceptacion");
            return raiz;
        }       
        else{
            console.log("Error");
            return false;
        }
            
    }

    printPila(){
        let strPila = ""; 
        for (let index = this.pila.length-1; index >= 0; index--) {
            strPila += this.pila[index].dato;
        }
        return strPila;
    }

    generaRegla(num, pila){
        switch(num){
            case 1:
                let r1 = new R1(pila);
                return r1;
                break;
            case 2:
                let r2 = new R2(pila);
                return r2;
                break;
            case 3:
                let r3 = new R3(pila);
                return r3;
                break;
            case 4:
                let r4 = new R4(pila);
                return r4;
                break;
            case 5:
                let r5 = new R5(pila);
                return r5;
                break;
            case 6:
                let r6 = new R6(pila);
                return r6;
                break;
            case 7:
                let r7 = new R7(pila);
                return r7;
                break;
            case 8:
                let r8 = new R8(pila);
                return r8;
                break;
            case 9:
                let r9 = new R9(pila);
                return r9;
                break;
            case 10:
                let r10 = new R10(pila);
                return r10;
                break;
            case 11:
                let r11 = new R11(pila);
                return r11;
                break;
            case 12:
                let r12 = new R12(pila);
                return r12;
                break;
            case 13:
                let r13 = new R13(pila);
                return r13;
                break;
            case 14:
                let r14 = new R14(pila);
                return r14;
                break;
            case 15:
                let r15 = new R15(pila);
                return r15;
                break;
            case 16:
                let r16 = new R16(pila);
                return r16;
                break;
            case 17:
                let r17 = new R17(pila);
                return r17;
                break;
            case 18:
                let r18 = new R18(pila);
                return r18;
                break;
            case 19:
                let r19 = new R19(pila);
                return r19;
                break;
            case 20:
                let r20 = new R20(pila);
                return r20;
                break;
            case 21:
                let r21 = new R21(pila);
                return r21;
                break;
            case 22:
                let r22 = new R22(pila);
                return r22;
                break;
            case 23:
                let r23 = new R23(pila);
                return r23;
                break;
            case 24:
                let r24 = new R24(pila);
                return r24;
                break;
            case 25:
                let r25 = new R25(pila);
                return r25;
                break;
            case 26:
                let r26 = new R26(pila);
                return r26;
                break;
            case 27:
                let r27 = new R27(pila);
                return r27;
                break;
            case 28:
                let r28 = new R28(pila);
                return r28;
                break;
            case 29:
                let r29 = new R29(pila);
                return r29;
                break;
            case 30:
                let r30 = new R30(pila);
                return r30;
                break;
            case 31:
                let r31 = new R31(pila);
                return r31;
                break;
            case 32:
                let r32 = new R32(pila);
                return r32;
                break;
            case 33:
                let r33 = new R33(pila);
                return r33;
                break;
            case 34:
                let r34 = new R34(pila);
                return r34;
                break;
            case 35:
                let r35 = new R35(pila);
                return r35;
                break;
            case 36:
                let r36 = new R36(pila);
                return r36;
                break;
            case 37:
                let r37 = new R37(pila);
                return r37;
                break;
            case 38:
                let r38 = new R38(pila);
                return r38;
                break;
            case 39:
                let r39 = new R39(pila);
                return r39;
                break;
            case 40:
                let r40 = new R40(pila);
                return r40;
                break;
            case 41:
                let r41 = new R41(pila);
                return r41;
                break;
            case 42:
                let r42 = new R42(pila);
                return r42;
                break;
            case 43:
                let r43 = new R43(pila);
                return r43;
                break;
            case 44:
                let r44 = new R44(pila);
                return r44;
                break;
            case 45:
                let r45 = new R45(pila);
                return r45;
                break;
            case 46:
                let r46 = new R46(pila);
                return r46;
                break;
            case 47:
                let r47 = new R47(pila);
                return r47;
                break;
            case 48:
                let r48 = new R48(pila);
                return r48;
                break;
            case 49:
                let r49 = new R49(pila);
                return r49;
                break
            case 50:
                let r50 = new R50(pila);
                return r50;
                break
            case 51:
                let r51 = new R51(pila);
                return r51;
                break
            case 52:
                let r52 = new R52(pila);
                return r52;
                break
            default:break;
        }

    }

}