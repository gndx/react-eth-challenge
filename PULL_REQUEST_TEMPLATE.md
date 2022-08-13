## DESCRIPTION

Solución al reto: React Eth Challenge

Deploy: https://sass3r.github.io/react-eth-challenge

Nombre: Rafael Ramirez

Usuario Platzi: rafael116

Correo Electronico: rafael@cryptostore.com.bo

## Reto:

- [ :heavy_check_mark: ] Primer problema
- [ :heavy_check_mark: ] Segundo problema
- [ :heavy_check_mark: ] Tercer problema
- [ :heavy_check_mark: ] Cuarto Problema
- [ :heavy_check_mark: ] Quinto Problema
- [ :heavy_check_mark: ] Sexto Problema
- [ :heavy_check_mark: ] Septimo Problema

## Documentacion:

### Tests
En cada test se reemplazo la llamada a la funcion mount por shallow
de la biblioteca de pruebas 'enzyme'

~~~~javascript
import { shallow } from 'enzyme';¬
~~~~

### Componentes

App.-

El componente App es el principal y esta estructurado de la siguiente manera:

~~~~javascript
    <div>
      <AppContext.Provider value={cvData}>
        <Header>
          <About />
        </Header>
        <Profile />
        <Experience />
        <div className="grid">
          <Academic />
          <Skills />
          <Interest />
          <Languages />
        </div>
      </AppContext.Provider>
    </div> 
~~~~

Header:

El componente header contiene informacion del nombre, profesion y foto.

About:

El componente about contiene informacion de los datos de contactos y redes sociales.

Profile:

El componente profile contiene informacion sobre la prensetacion del perfil.

Experience:

El componente Experience contiene informacion de la experiencia de trabajo.

Academic:

El componente Academic contiene informacion de la formacion academica.

Skills:

El componente Skills contiene informacion de las habilidades tecnicas.

Interest:

El componente Interest contiene informacion de los intereses.

Languages:

El componente Languages contiene informacion de los idiomas.

## Api

Se implemento la funcion getData.js que por medio de la funcion fetch se obtienen los datos necesarios.

Mediante AppContext y el hook useDataHook se provee la informacion requerida a todos los componentes.

## Estilos

Se utilizo stylus y css grid para los estilos de los componentes.
