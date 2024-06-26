## Tecnologias
***
Lista de tecnologias usadas, es necesario contar con SQL Server y NodeJS:
* [NodeJS](https://nodejs.org/en/) Version 20.15.0 
* [ReactJS](https://es.react.dev/): Version 18.3.1
* [Vite](https://v4.vitejs.dev): Version 4
* [SQL Server](https://www.microsoft.com/es-mx/sql-server/sql-server-2022): Version 2022

# Pasos para poder ejecutar la aplicación 

## Configuracion del servidor
***
1. Crear una base de datos con el nombre que sea mas adecuado
2. Acceder a la ruta del server/src y crear un archivo .env con el nombre development.env, tomando en cuenta como ejemplo el example.env
3. Llenar las variables de entorno del archivo creado
```
ENVIRONMENT= Colocar el nombre del archivo (development)
USER_SQL= Usuario con el que nos vamos a conectar a la base de datos 
PASSWORD= Contraseña del usuario de la base de datos
SERVER_SQL= Nombre del servidor de la base de datos (localhost)
DATABASE= Nombre de la base de datos
SERVER_PORT= Puerto por el que se va a exponer el servidor backend (3000)
URL_WEB_APP= URL de la aplicacion frontend (http://localhost:5173)
DIALECT_SEQUELIZE= Dialecto que va a manejar sequelize en este caso colocar mssql
PORT_SQL= Puerto de comunicación con la base de datos, en caso de ser SQL Server colocar (1433)
SALT_ROUNDS= Numero de saltos para poder hashear las contraseñas (10)
SECRET_JWT_KEY= Cadena para poder cifrar los JWT (esta-es-una-cadena-de-ejemplo)
```
4. Una vez que se configuraron las variables de entorno regresar nuevamente al directorio de server (/server) a la altura de los package JSON
5. Ejeuctar los comandos
```
npm run migrations (ejecuta las migraciones de sequelize)
npm run set_seeders (ejecutas los seeders para la tabla de Status_Car)
npm run dev (ejecuta el servidor en modo de desarrollador)
```

## Configuracion del frontend
1. Acceder a la ruta de /frontend
2. Ejecutar los comandos
```
npm install
npm run dev (inicia la aplicación en modo de desarrollador)
```
