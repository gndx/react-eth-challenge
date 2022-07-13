import React from 'react';
import Card from './Card';
const Profile = ({profile}) => {
    return (
        <Card>
            <h2 className='Profile-title'>Profile</h2>
            //<p className='Profile-desc'>
            //Amplios conocimientos y experiencias en bases de datos que abarcan tanto los fundamentos teóricos como las tecnologías y 
            //herramientas utilizadas para diseñar e implementar aplicaciones sobre plataformas AS/400, Unix o Windows.
            //Manejo de Herramientas para la extracción y análisis de datos, formateo de Registros de Diario - Journal de AS/400
            //Sólida experiencia en el Desarrollo e Implementación de aplicaciones Win, Web y RPG, utilizando los Patterns Work With Plus,
            //K2B Tools, K2B Audit, Audit Plus y utilizando las Diferentes Versiones de Genexus 8.0, 9.0, Evolution 1, 2 , 3, Genexus 15, Genexus 16
            //y actualmente trabajando con Genexus 17, utilizando los diferentes gestores de Bases de Datos DB/2 400, Oracle, PostgreSQL,
            //utilizando los Generadores Java, C#, RPG, publicados en los Web Sever JBOSS, WebSphere, Tomcat sobre diferentes Sistemas Operativos
            //OS/400, Linux y Windows.
            //Desarrollo e Implementación de aplicaciones en las siguientes Entidades Financieras - Banco Basa S.A., Banco Amambay S.A.,
            //Banco ITAPUA SAECA, Vision Banco, Banco Integración S.A., Interbanco S.A., Chinatrust Comercial Bank, Multibanco, Financiera Atlas,
            //Finanbank.
            //Desarrollo e Implementación de Aplicaciones en las siguientes entidades Comerciales - Galerías Guaraní y Shopping Vendome, Gunder
            //IGSA, Casa Dos Pueblos - Pedro Juan Caballero
            //Desarrollo e Implementación Industrial - Cervecería Internacional
            //</p>
            <p className='Profile-desc'> {profile}</p>
        </Card>
    );
};

export default Profile;