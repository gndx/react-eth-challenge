## DESCRIPTION

Solución al reto:

Nombre: Silva Cazares Luis Alberto

Usuario Platzi: albertosilva

Deploy con netlify :[https://alberto-sc.netlify.app/](https://alberto-sc.netlify.app/)

## Reto:

- [x] Primer problema

- [x] Segundo problema

- [x] Tercer problema

- [x] Cuarto Problema

- [x] Quinto Problema

- [x] Sexto Problema

- [x] Septimo Problema

---

## Retos:

- Primer problema : **_Create the project components_**

Se crearon los componentes como lo sugiere la estructura de App.js cada uno se creo en la carpeta components,

en un principio cada componente tenía otra carpeta para guardar sus estilos juntos, pero para no mover demasiado

los test decidí cambiarlo y pasar los estilos a su propia carpeta.

Cada componente recibe como prop la información que necesita del archivo json.

- Segundo problema : **_Add styles_**

Para añadir estilos se decidio usar styled components, una librería que permite unir todo el potencial de css con javascript

de hecho aunque en principio la desición de usar esta librería fue una mera preferencia , la elaboración de un componente interno,

(las cards de las skills) se facilito gracias a ello, el único inconveniente es que se tuvieron que agregar clases a los

componentes que no hacen nada ya que styled components crea clases con hashes para que nunca colisionen estilos entre distintos

componentes sin embargo los test necesitaban buscar cierta clase en especifico.

- Tercer problema : **_Create getData.js function_**

getData tenía que ser una función que hiciera fetch a una API también definida por nosotros,se decidio usar la API de fetch

para ello haciendo una funcion asincrona que devuelve la misma promesa para que en otro componente se ocupen de la resolución

o posible error.

- Cuarto problema : **_Integrate API_**

Para el desarrollo podiamos o llenar los campos de placeholders o consumir la API con un servidor local con json-server pero

para producción hacía falta un endpoint disponible públicamente y con https, una opción era usar mongoDB sin embargo ya tenía ocpupado el cluster gratuito por lo que se opto por una opcíon mucho mas sencilla , utilizar el mismo endpoint que ofrece github

cuando se vizualizan los archivos de un repositorio en 'raw' este endpont nos viene perfecto ya que el funcionamiento de la API

se reduce únicamente a devolver un json lo cual es justo lo que tenemos, el endpoint es el siguiente [https://raw.githubusercontent.com/Alberto-SC/react-eth-challenge/main/data.json](https://raw.githubusercontent.com/Alberto-SC/react-eth-challenge/main/data.json).

-Quinto problema: _Custom API_

Este problema es básicamente cambiar la información por defecto y usar nuestra propia información , Cabe mencionar que se trato de incluir

todos los campos incluido el campo 'certificate' que en principio según el diseño propuesto no tenía un lugar, se opto por ponerlo en el mismo

container que 'experience' ya que era uno muy grande.

-Sexto problema: _Document_

Documentar la solución a travez de este mismo pull request

-Septimo problema: _Deploy_

Se decidio utilizar netlify ya que desde mi punto de vista es el mas sencillo, no necesita de configuración y lo único que necesita

ya esta definido en el package.json , el único problema es que debido a problemas de dependencias el primer intento falló ya que

'npm install' devolvió un error, esto lo solucionamos usando 'npm install --legacy-peer-deps' pero la única manera de indicarle

a netlify que use dicha opción es que exista un archivo .npmrc donde se especifique dicha opción por lo que solo hacía falta

subir dicho archivo con el siguiente contenido:

```

legacy-peer-deps=true

```

- Otros problemas:

**_Test_**

Los test estaban preparados para usar la función _mount_ de _enzyme_ dicha función crea un problema en todos los test

que indica 'It looks like you called `mount()` without a global document being loaded.' , esto es por que los test no se prueban

en un entorno de navegador por lo que no existe un DOM y hay que proveer uno , una opción es usar JSDOM y modificar

los test para que funcionen , pero otra opción es cambiar 'mount()' por _shallow()_ opción por la que se optó.
Sin embargo shallow también nos trae

un problema del que solo te das cuenta si checas la documentación y es que shallow renderiza un componente aislado

es decir no se renderiza a partir de otro componente que lo llame dentro de nuestro proyecto , esto significa un problema para

los test ya que al hacer fetch de los datos en el componente principal App.js estos datos se pasan como props a los componentes correspondientes , sin embargo con shallow() el componente se renderiza sin nadie que lo llame por lo tanto sin que le pasen props

por lo que los n elementos que requiere encontrar el test nunca serán encontrados ya que no tiene datos,

una solición es pasarle data en el componente del test o poner data por default dentro de cada componente que fue la opción que se tomó

**_Eslint_**

Se decidio cambiar el parser de babel para eslint ya que daba problemas con los imports y no descubrí una manera de quitar el error,

sin embargo considero una buena desición ya que la misma página indica que dicho parser _babel-eslint_

estaba deprecado y su sucesor cambio de nombre por _@babel/eslint-parser_ por lo que se actualizo a dicho paquete.

**_Consideraciones y cambios_**

- [ ] Añadir propTypes

- [ ] Corregir diseño mobile , en web al hacer resize funciona el cambio pero un movil de verdad no funciona.

- [ ] Crear el componente background: el componente bakcground usa hojas de estilo .css y no sigue la estructura con el uso de styled components.
