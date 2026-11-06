# API REST - Sistema de Gestión de Guardería

## Descripción del proyecto

Esta API REST forma parte del sistema de gestión de una guardería y tiene como objetivo facilitar la administración de la información relacionada con los acudientes, niños, grupos, relaciones entre niños y acudientes, asistencias y matrículas.

La API permite realizar operaciones CRUD (Crear, Consultar, Actualizar y Eliminar) mediante solicitudes HTTP, facilitando la comunicación entre la base de datos y las aplicaciones que consuman sus servicios.

## Tecnologías utilizadas

- **Node.js:** Entorno de ejecución de JavaScript.
- **Express.js:** Framework para la creación de servicios y rutas REST.
- **MySQL:** Sistema de gestión de bases de datos.
- **JavaScript:** Lenguaje de programación utilizado para el desarrollo del backend.

## Instalación y ejecución

### Requisitos previos

- Tener instalado Node.js.
- Tener instalado npm.
- Contar con acceso a la base de datos MySQL configurada para el proyecto.

## Url en nube
https://appguarderia.onrender.com

### 1. Clonar el repositorio

```bash
git clone https://github.com/sharith2611/AppGuarderia.git
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd AppGuarderia
```

### 3. Instalar las dependencias

Ejecutar el siguiente comando para instalar los paquetes necesarios:

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto y configurar los datos de conexión a la base de datos.

Ejemplo:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=GUARDERIA
```

**Nota:** Los nombres de las variables deben coincidir con los definidos en el archivo de configuración de la conexión a la base de datos.

### 5. Iniciar el servidor

Ejecutar:

```bash
npm start
```

Una vez iniciado, el servidor estará disponible en el puerto configurado.

## Documentación de endpoints

Todas las rutas permiten interactuar con los diferentes módulos del sistema.

### 1. Acudientes

Permite administrar la información de los acudientes de los niños registrados en la guardería.

| Método | Endpoint | Función |
|---|---|---|
| GET | `/acudiente/getAcudientes` | Consultar todos los acudientes |
| GET | `/acudiente/getAcudienteById/:id` | Consultar un acudiente por ID |
| POST | `/acudiente/createAcudiente` | Registrar un acudiente |
| PUT | `/acudiente/updateAcudiente/:id` | Actualizar un acudiente |
| DELETE | `/acudiente/deleteAcudiente/:id` | Eliminar un acudiente |

### 2. Niños

Permite gestionar la información de los niños que forman parte de la guardería.

| Método | Endpoint | Función |
|---|---|---|
| GET | `/nino/getNinos` | Consultar todos los niños |
| GET | `/nino/getNinoById/:id` | Consultar un niño por ID |
| POST | `/nino/createNino` | Registrar un niño |
| PUT | `/nino/updateNino/:id` | Actualizar un niño |
| DELETE | `/nino/deleteNino/:id` | Eliminar un niño |

### 3. Grupos

Permite administrar los grupos de la guardería y organizar a los niños según la clasificación establecida.

| Método | Endpoint | Función |
|---|---|---|
| GET | `/grupo/getGrupos` | Consultar todos los grupos |
| GET | `/grupo/getGrupoById/:id` | Consultar un grupo por ID |
| POST | `/grupo/createGrupo` | Registrar un grupo |
| PUT | `/grupo/updateGrupo/:id` | Actualizar un grupo |
| DELETE | `/grupo/deleteGrupo/:id` | Eliminar un grupo |

### 4. Relaciones niño-acudiente

Permite gestionar las relaciones entre los niños y sus respectivos acudientes.

| Método | Endpoint | Función |
|---|---|---|
| GET | `/ninoAccidente/getNinoAccidentes` | Consultar todas las relaciones |
| GET | `/ninoAccidente/getNinoAccidenteById/:id` | Consultar una relación por ID |
| POST | `/ninoAccidente/createNinoAccidente` | Registrar una relación |
| PUT | `/ninoAccidente/updateNinoAccidente/:id` | Actualizar una relación |
| DELETE | `/ninoAccidente/deleteNinoAccidente/:id` | Eliminar una relación |

**Nota:** El prefijo actual de estas rutas es `/ninoAccidente`. Se recomienda verificarlo, ya que el controlador importado se denomina `ninoAcudienteController`. Si este módulo administra relaciones niño-acudiente, sería conveniente utilizar una nomenclatura coherente.

### 5. Asistencias

Permite registrar y consultar el control de asistencia de los niños de la guardería.

| Método | Endpoint | Función |
|---|---|---|
| GET | `/asistencia/getAsistencias` | Consultar todas las asistencias |
| GET | `/asistencia/getAsistenciaById/:id` | Consultar una asistencia por ID |
| POST | `/asistencia/createAsistencia` | Registrar una asistencia |
| PUT | `/asistencia/updateAsistencia/:id` | Actualizar una asistencia |
| DELETE | `/asistencia/deleteAsistencia/:id` | Eliminar una asistencia |

### 6. Matrículas

Permite administrar los registros de matrícula de los niños en la guardería.

| Método | Endpoint | Función |
|---|---|---|
| GET | `/matricula/getMatriculas` | Consultar todas las matrículas |
| GET | `/matricula/getMatriculaById/:id` | Consultar una matrícula por ID |
| POST | `/matricula/createMatricula` | Registrar una matrícula |
| PUT | `/matricula/updateMatricula/:id` | Actualizar una matrícula |
| DELETE | `/matricula/deleteMatricula/:id` | Eliminar una matrícula |

## Pruebas de la API

Los endpoints pueden probarse utilizando herramientas como:

- **Postman:** Para realizar solicitudes HTTP y verificar las respuestas de los servicios.
- **Thunder Client:** Extensión de Visual Studio Code para probar endpoints REST.

Para consultar los registros se utiliza el método `GET`, mientras que para crear, actualizar y eliminar información se utilizan los métodos `POST`, `PUT` y `DELETE`, respectivamente.

## Estructura general del proyecto

La organización puede variar según la estructura implementada en el repositorio. Generalmente, el proyecto contiene:

```text
API-GUARDERIA/
│
├── src/
│   ├── config/
│   │   └── dbConfig.js
│   │
│   ├── controllers/
│   │
│   ├── routes/
│   │
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Autor

Proyecto académico: **Sistema de Gestión de Guardería**.
Sharith Martinez
