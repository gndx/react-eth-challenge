## DESCRIPTION

Solución al reto:

• Se migró index.js a React 18 usando createRoot

• Se remplazó stylus por tailwindcss para darle un aspecto más moderno

• Se creó una estructura de componentes organizadas por carpetas. En cada carpeta se puede encontrar un componente Padre, que hace referencia a la categoría, da formato y engloba a varios componentes Hijos que hacen referencia a los elementos de la categoría. 

• Se utilizó la librería "prop-types" para marcar como requerido algunas propiedades que reciben los componentes. Decidimos hacer esto porque no tiene mucho sentido que acepten información vacía. Por esto mismo agregamos archivos con información por defecto para el entorno de pruebas de cada componente.

• Se arreglaron los test de jest. Usaban el método "mount" que requiere un DOM ya creado como "jsdom", cambiamos a "shallow"

• Se creo un servidor api para servir el json con los datos en:

https://json-server-drab-five.vercel.app/api/data

• Se publicó la web en:

https://eth-5-july.vercel.app/

• Desde App.js se piden los datos a la api y se le suministra solo la información necesaria a cada componente

• Se creó un Loader para mostrar mientras se espera por la información de la api

Nombre: Alberto Sosa Fernández
Usuario Platzi: @tecsobs

## Reto:

- [X] Primer problema
- [X] Segundo problema
- [X] Tercer problema
- [X] Cuarto Problema
- [X] Quinto Problema
- [X] Sexto Problema
- [X] Septimo Problema
