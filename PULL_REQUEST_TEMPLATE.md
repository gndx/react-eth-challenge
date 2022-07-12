## DESCRIPTION

Solución al reto:

Nombre: Julian Camilo Garcia EScobar
Usuario Platzi: juliancamilogarcia
Link usuario: https://platzi.com/p/juliancamilogarcia/
Deploy: https://julixncxm.github.io/react-eth-challenge/

## Problems and solutions
    1.Project installation - when installing the project and even installing every dependendy the installation threw errors for enzyme dependency , so I run the commands using --force this flag let install with no problems.
    2.Running tests - when running tests i had an error related to "mount" function , this was a problem with the dependency , the solution proposed for the community was change "mount" for "shallow" in the tests, this allowed tests run.
    3.Function getData - this was one of the problem in terms of write code , was not difficult actually the test gave me the answer with the sintax ".then" for fetch , so the solution was create a function that returns ".then" for the solution of the promise for an endpoint given.
    4. The API - I could use the data.json for customizing the data.json, but i prefer tocopy the structure of the data.json with my data and expose the data.json as and endpoint in one of my projects that retrieves the data as a repsonse, so this let use a custom hook that ask for the data wiht getData.js and with different methods retrive the part of the json involved , for example "getAcademicData" just filter the academic data, and use the hook in the different components.
    5. Pass the data - for pass the data i use the props using each function as data prop , then just map the data for render the elements.
    6. The context of the challenge - just for take a note , my solution was not the properly for the estructure and the challenge , actually the hook and the methods implemented could be consider as obvious and innsesaries but i was lookng not for the challenge but as a problem of real world so i suppose that as real problem may be could be better implement methods isolated for the logic and presentation layer.

## Reto:

- [x] Primer problema
- [x] Segundo problema
- [x] Tercer problema
- [x] Cuarto Problema
- [x] Quinto Problema
- [x] Sexto Problema
- [x] Septimo Problema
