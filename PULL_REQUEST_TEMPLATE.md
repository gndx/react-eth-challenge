# DESCRIPTION

Solución al reto: React Ethereum Challenge

Nombre: Carlos J. Ramirez
Usuario Platzi: @carlosjramirez

## Challenge / Reto

- [X] 1st issue / Primer problema
- [X] 2nd issue / Segundo problema
- [X] 3rd issue / Tercer problema
- [X] 4th issue / Cuarto Problema
- [X] 5th issue / Quinto Problema
- [X] 6th issue / Sexto Problema
- [X] 7th issue / Septimo Problema

## Documentation (english)

Access to production website:

    Frontend:
    <https://cjr-cv-fe.herokuapp.com>

    Backend:
    <https://cjr-cv-be.herokuapp.com>

### Steps taken

I followed the task described on each of the challenge's Github issues, almost in the stablished order.
The stablished order was:

1. Create project components:
<https://github.com/gndx/react-eth-challenge/issues/1>
Analyze the project and identify its structure.

2. Add styles:
<https://github.com/gndx/react-eth-challenge/issues/2>
Create the styles to give it the desired design, keep the proposed structure.
Use @Dribble for inspiration.

3. Create getData.js function:
<https://github.com/gndx/react-eth-challenge/issues/3>
Create getData.js function to consume an API.

4. Integrate API:
<https://github.com/gndx/react-eth-challenge/issues/4>
Start the test server and integrate the proposed information into your application.
npm run server

5. API customization:
<https://github.com/gndx/react-eth-challenge/issues/5>
Customize the data.json file in the root of the project with your information.
If you deploy your own API in a cloud service, it is a plus.

6. Document:
<https://github.com/gndx/react-eth-challenge/issues/6>
Create the necessary documentation for the application in the document of your Pull Request.
Explain in detail the steps taken, describe what were your main blocks and your solutions.

7. Deploy:
<https://github.com/gndx/react-eth-challenge/issues/7>
Deploy
Netlify, vercel, GH Pages, Heroku

### Main blocks / Detalle de los bloques principales

The main blocks for development were:

[0] Fix `npm install`, `enzyme` and `unit tests` issues
[1] Create the project components

[3] Create function getData.js

[2] Add styles

[4] Integrate API

[7] Deploy

[5] Custom API

[6] Document

### My solutions / Mis soluciones

[0] Fix `npm install`, `enzyme` and `unit tests` issues

Starting the project, I did the first `npm install` and ran into the incompatibility issue between `enzyme-adapter-react-16` and the `react@"18.2.0"`

npm ERR! While resolving: enzyme-adapter-react-16@1.15.6
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"18.2.0" from the root project
npm ERR!   peer react@"^18.2.0" from react-dom@18.2.0
npm ERR!   node_modules/react-dom
npm ERR!     react-dom@"18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^16.0.0-0" from enzyme-adapter-react-16@1.15.6
npm ERR! node_modules/enzyme-adapter-react-16
npm ERR!   enzyme-adapter-react-16@"1.15.6" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: react@16.14.0

Searching the documentation, I realized that a solution, according to the Enzyme developer himself, was to migrate to RTL (React Test Library) and I did that. This decision allowed me to learn a lot about unit testing in React and the RTL library.

[1] Create the project components

Then I started developing the components. I decided to do it with `React Hooks`.
I started with the `Header` component as it is the simplest.
I then made one of the components that has lists of items, in this case the `Interest`.
As I developed these two components, I fixed the unit tests to be able to validate the HTML elements returned by the components. This was quite a challenge.

[3] Create function getData.js

While developing the components and the unit tests, I had the need to have the data from the data.json so that the className requested in the unit tests would be displayed. So I had to make inmediatelly a version of `getData.js` that would at least import the json file from the local storage.

[2] Add styles

After having the unit tests and the components lined up, I started adding the styles.

Initially these styles were in a .styl file, however I had to convert it to .css so that they could be included in the production build made with `react-scripts` (see what happened in the Deploy).

In order to have style patterns and not have to repeat them over and over again, implement `saas`, I included a `"sass" npm script: "sass --watch src/styles/components/App.scss src/styles/components/ App.css"` automatically generate the `src/styles/components/App.css` file.

The theme of styles was also an interesting challenge, because it had a kind of blockage with graphic design.

[7] Deploy

I had to decide the platform for the final deployment. In this case I chose Heroku for its versatility and simplicity, which I had already used for other developments with React and Python.

In order to do the frontend deployment and to have the ease of using the same repository for both frontend and backend, I implemented reading environment variables, and the only solution I've found so far is using `react-scripts`.

By deploying the build with `react-scripts` to production and having `eslint` configured, I had to deal with all the error messages about indentation, parenthesis spacing, braces, etc.

Then the production build didn't take styles into account, so I did a quick search to fix the inclusion of the `App.styl` file in the `build/static/css` directory. However, I didn't find a way at the time, so I ended up using `sass` to generate the `src/styles/components/App.css`, which was successfully included in the build.

[4] Integrate API

I was not aware of the npm 'server' dependency and it seemed very good to me, however to be able to deploy it to Heroku, it is necessary to add the parameters `--port ${PORT} --host 0.0.0.0` and the environment variable $PORT it is assigned by Heroku since the local port is assigned dynamically and changes with every deploy.

[5] Custom API

In this case I modified the `data.json` with my professional information. In the same way, a simple API could be implemented that reads the data from a database, for example, MongoDb or Firebase, and returns it with the same format.

[6] Document

I decided to make these notes in Spanish and English to offer it to people who can read either language, in addition to making this piece of my professional portfolio more attractive.

## --------------------------

## Documentacion (español)

Acceso al sitio en producción:

    Frontend:
    <https://cjr-cv-fe.herokuapp.com>

    Backend:
    <https://cjr-cv-be.herokuapp.com>

### Detalle de pasos dados

Seguí las tareas descritas en cada uno de los problemas del reto casi en el orden establecido.
El orden establecido fue:

1. Crear los componentes del proyecto:
<https://github.com/gndx/react-eth-challenge/issues/1>
Analizar el proyecto e identificar su estructura.

2. Añadir estilos:
<https://github.com/gndx/react-eth-challenge/issues/2>
Crear los estilos para darle el diseño deseado, mantener la estructura propuesta.
Usa @Dribble para inspirarte.

3. Crear función getData.js:
<https://github.com/gndx/react-eth-challenge/issues/3>
Cree la función getData.js para consumir una API.

4. Integrar API:
<https://github.com/gndx/react-eth-challenge/issues/4>
Inicie el servidor de prueba e integre la información propuesta en su aplicación.
npm run server

5. Personalizar API:
<https://github.com/gndx/react-eth-challenge/issues/5>
Personaliza el archivo data.json en la raíz del proyecto con tu información.
Si implementa su propia API en un servicio en la nube, es una ventaja.

6. Documentar:
https://github.com/gndx/react-eth-challenge/issues/6
Crea la documentación necesaria para la aplicación en el documento de tu Pull Request.
Explica detalladamente los pasos dados, describa cuáles fueron sus principales bloques y sus soluciones.

7. Deploy:
https://github.com/gndx/react-eth-challenge/issues/7
Hacer el despliegue en...
Netlify, vercel, GH Pages, Heroku

### Detalle de los bloques principales

Los bloques principales establecidos para el despliegue son: Frontend y Backend.

Los bloques principales para el desarrollo fueron:

[0] Arreglar los problemas del `npm install`, del `enzyme` y los `tests unitarios`
[1] Crear los componentes del proyecto

[3] Crear función getData.js

[2] Añadir estilos

[4] Integrar API

[7] Deploy

[5] Personalizar API

[6] Documentar

### Mis soluciones

[0] Arreglar los problemas del `npm install`, del `enzyme` y los `tests unitarios`

Al comenzar el proyecto, hice el primer `npm install` y me encontré con el problema de incompatibilidad entre `enzyme-adapter-react-16` y el `react@"18.2.0"`

npm ERR! While resolving: enzyme-adapter-react-16@1.15.6
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"18.2.0" from the root project
npm ERR!   peer react@"^18.2.0" from react-dom@18.2.0
npm ERR!   node_modules/react-dom
npm ERR!     react-dom@"18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^16.0.0-0" from enzyme-adapter-react-16@1.15.6
npm ERR! node_modules/enzyme-adapter-react-16
npm ERR!   enzyme-adapter-react-16@"1.15.6" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: react@16.14.0

Buscando la documentación, me di cuenta que una solución, según el mismo desarrollador de Enzyme, era migrar a RTL (React Test Library) y eso hice. Esta decisión me permitió aprender bastante sobre test unitarios en React y la librería RTL.

[1] Crear los componentes del proyecto

Luego comencé a desarrollar los componentes. Decidí hacerlo con `React Hooks`.
Comencé con el componente `Header` por ser el mas sencillo.
Luego hice uno de los componentes que tiene listas de elementos, en este caso el `Interest`.
A medida que iba desarrollando estos dos componentes, fui arreglando los test unitarios para poder validar los elementos HTML devueltos por los componentes. Esto fue todo un reto.

[3] Crear función getData.js

Mientras desarrollaba los componentes y los test unitarios, tuve la necesidad de poder tener los datos del data.json para que se mostraran las className solicitadas en los test unitarios. Así que me toco hacer de una vez una versión del `getData.js` que al menos hiciera un import del json.

[2] Añadir estilos

Luego de tener los unit test y los componentes alineados, comencé a añadir los estilos.

Inicialmente estos estilos estaban en un archivo `.styl`, son embargo me tocó convertirlo a .css para que pudiesen incluirse en el build de producción hecho con `react-scrips` (ver lo que sucedió en el Deploy).

Para poder tener patrones de estilos y no tener que repetirlos una y otra vez, implemente `saas`, incluí un npm script `"sass": "sass --watch src/styles/components/App.scss src/styles/components/App.css"` generar automáticamente el archivo `src/styles/components/App.css`.

El tema de los estilos también fue un reto interesante, porque tenía como un bloqueo con el tema del diseño.

[7] Deploy

Acá me tocó decidir la plataforma para el despliegue final. En este caso escogí Heroku por su versatilidad y sencillez, que ya lo había utilizado para otros desarrollos con React y Python.

Para hacer el despliegue del frontend y poder tener la facilidad de usar el mismo repositorio tanto para el frontend como el backend, implementé la lectura de variables de entorno, y la única solución que encontré hasta ahora es usando `react-scrips`.

Al implementar el build con `react-scrips` para produccion y tener el `eslint` configurado, me tocó lidiar con todos los mensajes de error de identación, espaciado de los paréntesis, llaves, etc.

Luego el build de producción no tomaba en cuenta los estilos, por lo que hice una búsqueda rápida para solucionar la inclusión del archivo `App.styl` en el directorio `build/static/css`. Sin embargo, no encontré la manera en ese momento, por lo cual terminé usando `sass` para generar el `src/styles/components/App.css`, el cual si fue incluido exitosamente en el build.

[4] Integrar API

No conocía la dependencia 'server' de npm y me pareció muy buena, sin embargo para poder desplegarla en Heroku, es necesario agregar los parámetros `--port ${PORT} --host 0.0.0.0` y la variable de environment $PORT es asignada por el Heroku ya que el puerto local es asignado dinámicamente y cambia con cada deploy.
 
[5] Personalizar API

En este caso modifiqué el `data.json` con mi información profesional. De igual manera se pudiera implementar un API sencilla que lea los datos de una base de datos, por ejemplo, MongoDb o Firebase, y la devuelva con el mismo formato.

[6] Documentar

Decidí hacer estas notas en español e inglés para ofrecerlo a personas que puedan leer cualquiera de los dos idiomas, además de hacer más atractiva esta pieza de mi portafolio profesional.
