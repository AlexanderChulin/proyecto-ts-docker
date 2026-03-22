## Proyecto: Todo List Full Stack (TypeScript + JSON Server + Web)

##  Descripción

Este proyecto consiste en el desarrollo de una aplicación de gestión de tareas (*Todo List*) implementada en múltiples niveles:

* Aplicación de consola con **TypeScript**
* API REST simulada con **json-server**
* Interfaz web con **HTML, CSS y JavaScript (fetch API)**

El proyecto está basado en el ejercicio del libro (*Marking Tasks Complete*) y extendido para incluir persistencia y comunicación cliente-servidor.

---

## Tecnologías utilizadas

* **TypeScript**
* **Node.js**
* **Docker**
* **JSON Server**
* **HTML5**
* **CSS3**
* **JavaScript (Fetch API)**

---

## Estructura del proyecto

```
proyecto-ts-docker/
│
├── src/                  # Código TypeScript (CLI)
│   ├── index.ts
│   ├── todoItem.ts
│   ├── todoCollection.ts
│   └── jsonTodoCollection.ts
│
├── dist/                 # Código compilado
│
├── web/                  # Aplicación web
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── db.json           # Base de datos usada por json-server
│
├── package.json
├── tsconfig.json
└── README.md
```

---
##  Instalación

### 1. Clonar repositorio

```
git clone 
cd proyecto-ts-docker
```

---

### 2. Instalar dependencias

```
npm install
```

---

### Ejecución del proyecto

---

### 1. Ejecutar aplicación TypeScript (CLI)

```
npx tsc
node dist/index.js
```

Funcionalidades:

* Menú interactivo (Inquirer)
* Agregar tareas
* Marcar como completadas
* Eliminar tareas
* Persistencia en archivo JSON

---

### 2. Levantar API (JSON Server)

```
npx json-server --watch web/db.json --port 3000
```

Endpoints disponibles:

| Método | Endpoint   |
| ------ | ---------- |
| GET    | /tasks     |
| POST   | /tasks     |
| PATCH  | /tasks/:id |
| DELETE | /tasks/:id |

---

### 3. Pruebas con Postman

Se utilizó **Postman** para probar las operaciones CRUD:

* Obtener tareas
* Crear nuevas tareas
* Actualizar estado
* Eliminar tareas

---

### 4. Ejecutar aplicación web

Abrir el archivo:

```
web/index.html
```

Funcionalidades:

* Mostrar lista de tareas
* Agregar tareas
* Marcar como completadas
* Eliminar tareas
* Comunicación con API mediante `fetch`

---

## Operaciones CRUD

| Operación | Implementación    |
| --------- | ----------------- |
| Create    | POST /tasks       |
| Read      | GET /tasks        |
| Update    | PATCH /tasks/:id  |
| Delete    | DELETE /tasks/:id |

---

## Aprendizajes

Durante este proyecto se aplicaron los siguientes conceptos:

* Programación orientada a objetos con TypeScript
* Uso de clases y tipado fuerte
* Persistencia de datos con JSON
* Creación de APIs REST simuladas
* Consumo de APIs con Fetch
* Manejo de peticiones HTTP
* Separación frontend/backend
* Uso de Docker para entornos de desarrollo

---

## Notas importantes

* El archivo `db.json` debe estar en la carpeta `web/`
* JSON Server debe estar corriendo para que la web funcione
* No modificar la carpeta `dist/` manualmente
* Se recomienda usar `npx` para evitar problemas de permisos
