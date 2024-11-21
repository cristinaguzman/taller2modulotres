<<<<<<< HEAD
1.-Event Loop en JavaScript
El Event Loop es un mecanismo fundamental en JavaScript que permite manejar tareas asíncronas y coordinar la ejecución del código en un solo hilo.

Componentes principales:

Stack (Pila de ejecución): Donde se apilan y ejecutan las funciones.
Heap (Montón): Espacio en memoria donde se almacenan los objetos y variables.
Queue (Cola de mensajes): Donde se almacenan las tareas asíncronas en espera de ejecución.
Funcionamiento básico:

Cuando llamas a una función, se agrega al Stack.
Si una tarea es asíncrona (como setTimeout), se envía al Web API para ser procesada externamente.
Una vez completada, la tarea asíncrona se coloca en la Queue.
El Event Loop monitorea el Stack y la Queue. Si el Stack está vacío, mueve las tareas de la Queue al Stack para ejecutarlas.

2.- Manejo de Variables (let y const):
let:

Se utiliza para variables cuyo valor puede cambiar durante la ejecución del programa.
Ejemplo: let errores = []; (La lista de errores puede actualizarse dinámicamente).
Scope: let tiene un alcance de bloque. Solo es accesible dentro del bloque {} donde se define.
const:

Se utiliza para valores que no cambian después de su asignación.
Ejemplo: const mensaje = "Texto fijo"; (La variable mensaje es inmutable).
Scope: Al igual que let, tiene un alcance de bloque.

Operadores para Validación:
== y ===:

==: Compara valores sin importar el tipo. Ejemplo: '5' == 5 → true.
===: Compara valores y tipos estrictamente. Ejemplo: '5' === 5 → false.


## Uso del Debugger
El código incluye el comando `debugger` en el bloque de validación del número de teléfono. Para utilizarlo:
1. Abre las herramientas de desarrollo de tu navegador (generalmente presionando F12).
2. Ve a la pestaña "Sources" y recarga la página.
3. Al ingresar un número de teléfono en el formulario, el flujo se pausará en el comando `debugger`.
4. Desde allí, puedes inspeccionar variables como `phoneInput` o rastrear errores.
=======
# ejercicio3_Bootstrap

Ejercicio Hospital clínico, 
hecho con Bootstrap, metología BEM y sass 7-1
>>>>>>> 81bb4b8988abe2c55c056434d10f8e3120426a1c
