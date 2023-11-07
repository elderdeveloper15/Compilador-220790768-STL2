# Compilador Jesús Ángel Cota López 220790768
 Proyecto Seminario de Traductores de Lenguaje 2

RESULADOS TAREA MINI LEXICO:

![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/0e533b35-0037-4e18-8f7e-d4ba8251c1cf)

 RESULTADOS DE ANALIZADOR LEXICO:

 ![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/403655db-83de-42e0-840d-0387fae1ceae)

RESULTADOS TAREA MINI SINTACTICO:

Prueba 1:  hola+mundo

![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/06d91918-bdaa-42f5-820d-b9c58063f2f8)


Prueba 2: a+b+c+d+e+f

![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/50f54391-7f76-4848-9111-abde3b8b805f)

RESULTADOS DE ANALIZADOR SINTACTICO:

Tabla LR completa analizando: int main(){ int a; while(a != 2){ a=a+a; } }
![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/fb02f4f9-f757-4ca6-9810-ee3001a7f231)
![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/f487f12c-31cf-41c3-91e2-28563c7785f4)


Gramática del compilador

Tabla LR utilizada.
![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/28f3cbba-60ad-4e2a-8517-f9a0358464dc)

RESULTADOS ANALIZADOR SEMÁNTICO:

Analizador Semantico con ejemplo correcto: int main(int x, float y) { int a,b; if(a == 20) { b = a+x; } else { b = a-x; } }

![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/dbdaf3f5-8770-4e6d-90bc-1eac899e11c5)

Analizador Semantico con ejemplo incorrecto: int main(float x, float y) { int a,b; if(a == 20) { b = a+x; } else { b = a-x; } }

![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/ec557aa4-3585-4880-829e-b9e13f0905ca)

Analizador Semantico con ejemplo incorrecto: int main(float x, float y) { int a,b; if(a == 20) { b = a+holaa; } else { b = a; } }

![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/403ad87a-4e58-4fb6-bad3-dbeb34c8cc45)

Analizador Semantico con ejemplo incorrecto: int main(float x, float y, float y) { int a,b,b; if(a == 20) { b = a; } else { b = a; } }

![image](https://github.com/elderdeveloper15/Compilador-220790768-STL2/assets/54344130/13b0a25d-3347-45e7-8440-25523d2bc42c)





